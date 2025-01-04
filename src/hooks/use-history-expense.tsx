import { useState, useCallback, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser } from ".";
import { HistoryExpense } from "../../amplify/graphql/API";

export function useListHistoryExpenseByUserId() {
  const { user } = useUser();
  const [historyExpenses, setHistoryExpenses] = useState<HistoryExpense[]>([]);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  );

  const listHistoryExpenses = useCallback(async () => {
    if (!user) {
      return;
    }

    try {
      const { data } =
        await client.models.HistoryExpense.listHistoryExpenseByUserId({
          userId: user.sub,
        });

      if (!data) {
        setError(new Error("History expenses not found"));
        return;
      }

      setHistoryExpenses(data as unknown as HistoryExpense[]);
    } catch (error) {
      setError(error as Error);
    }
  }, [client, user]);

  useEffect(() => {
    listHistoryExpenses();
  }, [listHistoryExpenses]);

  return { historyExpenses, listHistoryExpenses, error };
}
