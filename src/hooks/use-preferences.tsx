import { useState, useCallback, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser } from ".";
import {
  CreatePreferenceInput,
  ExpenseType,
  Preference,
  UpdatePreferenceInput,
} from "../../amplify/graphql/API";

import getInitialExpenses from "../utils/analyze-create-expenses";

export function usePreference() {
  const { user } = useUser();
  const [preference, setPreference] = useState<Preference | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  ); // Add dependencies if generateClient depends on any dynamic values

  const fetchPreference = useCallback(async () => {
    if (!user) {
      return;
    }
    try {
      const { data } = await client.models.Preference.get({ userId: user.sub });
      if (!data) {
        setError(new Error("Preference not found"));
        return;
      }
      setPreference(data as unknown as Preference);
    } catch (error) {
      setError(error as Error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    fetchPreference();
  }, [fetchPreference]);

  return { preference, fetchPreference, error };
}

export function useAddPreference() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({ authMode: "userPool" });

  const createPreference = useCallback(
    async (input: CreatePreferenceInput) => {
      if (!user) return;
      try {
        setSaving(true);

        // Create expense types concurrently for "Bills", "Needs", and "Wants"
        const expenseTypes = ["Bills", "Needs", "Wants"];
        const expenseTypePromises = expenseTypes.map((expenseType) =>
          client.models.ExpenseType.create({
            name: expenseType,
            userId: user.sub,
          }).then((res) => res.data as unknown as ExpenseType),
        );
        const addedTypes = await Promise.all(expenseTypePromises);

        // Create the user preference
        const prefRes = await client.models.Preference.create({ ...input });
        if (!prefRes?.data) {
          throw new Error("Failed to create preference");
        }

        // Get initial expenses (ensure this function is synchronous or properly awaited)
        const initialExpenses = getInitialExpenses(
          prefRes.data as unknown as Preference,
          user.sub,
          addedTypes,
        );

        // Create initial expenses concurrently
        const expensePromises = initialExpenses.map((expense) =>
          client.models.Expense.create(expense),
        );
        await Promise.all(expensePromises);
      } catch (err) {
        setError(err as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { createPreference, saving, error };
}

export function useUpdatePreference() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const updatePreference = useCallback(
    async (input: UpdatePreferenceInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.Preference.update({ ...input });
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { updatePreference, saving, error };
}
