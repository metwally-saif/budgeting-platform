import { useState, useCallback, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser } from ".";
import {
  CreateExpenseTypeInput,
  UpdateExpenseTypeInput,
  DeleteExpenseTypeInput,
  ExpenseType,
} from "../../amplify/graphql/API";

export function useExpenseType() {
  const [expenseType, setExpenseType] = useState<ExpenseType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  ); // Add dependencies if generateClient depends on any dynamic values

  const fetchExpenseType = useCallback(
    async (id: string) => {
      try {
        const { data } = await client.models.ExpenseType.get({ id });
        if (!data) {
          setError(new Error("ExpenseType not found"));
          return;
        }
        setExpenseType(data as unknown as ExpenseType);
      } catch (error) {
        setError(error as Error);
      }
    },
    [client],
  );

  return { expenseType, fetchExpenseType, error };
}

export function useListExpenseTypeByUserId() {
  const { user } = useUser();
  const [expenseTypes, setExpenseTypes] = useState<ExpenseType[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  );

  const fetchExpenseTypes = useCallback(async () => {
    if (!user) {
      return;
    }
    try {
      const { data } = await client.models.ExpenseType.list({
        filter: { userId: { eq: user.sub } },
      });
      if (!data) {
        setError(new Error("ExpenseType not found"));
        return;
      }
      setExpenseTypes(data as unknown as ExpenseType[]);
    } catch (error) {
      setError(error as Error);
    }
  }, [client, user]);

  useEffect(() => {
    fetchExpenseTypes();
  }, [fetchExpenseTypes]);

  return { expenseTypes, fetchExpenseTypes, error };
}

export function useAddExpenseType() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const createExpenseType = useCallback(
    async (input: CreateExpenseTypeInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        const res = await client.models.ExpenseType.create({ ...input });
        console.log(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { saving, createExpenseType, error };
}

export function useUpdateExpenseType() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const updateExpenseType = useCallback(
    async (input: UpdateExpenseTypeInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        const res = await client.models.ExpenseType.update({
          ...input,
          userId: user.sub,
          name: input.name ?? undefined,
        });
        console.log(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { saving, updateExpenseType, error };
}

export function useDeleteExpenseType() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const deleteExpenseType = useCallback(
    async (input: DeleteExpenseTypeInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        const res = await client.models.ExpenseType.delete({ ...input });
        console.log(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { saving, deleteExpenseType, error };
}
