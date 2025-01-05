import { useState, useCallback, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser, useListExpenseTypeByUserId } from ".";
import {
  CreateExpenseInput,
  UpdateExpenseInput,
  DeleteExpenseInput,
  ExpenseType,
  Expense,
} from "../../amplify/graphql/API";

export interface ExpenseTypeWithExpenses {
  expenseType: ExpenseType;
  expenses: Expense[];
}

export function useExpense() {
  const [expense, setExpense] = useState<Expense | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  ); // Add dependencies if generateClient depends on any dynamic values

  const fetchExpense = useCallback(
    async (id: string) => {
      try {
        const { data } = await client.models.Expense.get({ id: id });
        if (!data) {
          setError(new Error("Expense not found"));
          return;
        }
        setExpense(data as unknown as Expense);
      } catch (error) {
        setError(error as Error);
      }
    },
    [client],
  );

  return { expense, fetchExpense, error };
}

export function useListExpenseByUserId() {
  const { user } = useUser();
  const [expenseTypesWithExpenses, setExpenseTypesWithExpenses] = useState<
    ExpenseTypeWithExpenses[]
  >([]);
  const [error, setError] = useState<Error | null>(null);
  const { expenseTypes } = useListExpenseTypeByUserId();

  const listExpenses = useCallback(async () => {
    if (!user || !expenseTypes) {
      return;
    }
    try {
      // Fetch all expenses concurrently using Promise.all
      const expenseTypesWithExpenses = await Promise.all(
        expenseTypes.map(async (expenseType) => {
          const { data } = await (
            expenseType.expenses as unknown as () => Promise<{
              data: Expense[];
            }>
          )();
          return {
            expenseType,
            expenses: data || [],
          };
        }),
      );

      // Update state once with all fetched data
      setExpenseTypesWithExpenses(expenseTypesWithExpenses);
    } catch (err) {
      setError(err as Error);
    }
  }, [expenseTypes, user]); // Removed 'expenses' from dependencies to prevent re-renders

  useEffect(() => {
    listExpenses();
  }, [listExpenses]);

  return { expenseTypesWithExpenses, listExpenses, error };
}

export function useAddExpense() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const createExpense = useCallback(
    async (input: CreateExpenseInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.Expense.create({ ...input });
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { createExpense, saving, error };
}

export function useUpdateExpense() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const updateExpense = useCallback(
    async (input: UpdateExpenseInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.Expense.update({
          ...input,
          userId: user.sub,
        });
      } catch (error) {
        console.error("Failed to update expense:", error);
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client, user],
  );

  return { updateExpense, saving, error };
}

export function useDeleteExpense() {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const deleteExpense = useCallback(
    async (input: DeleteExpenseInput) => {
      if (!user) {
        return;
      }
      try {
        setDeleting(true);
        await client.models.Expense.delete({ ...input });
      } catch (error) {
        setError(error as Error);
      } finally {
        setDeleting(false);
      }
    },
    [client, user],
  );

  return { deleteExpense, deleting, error };
}
