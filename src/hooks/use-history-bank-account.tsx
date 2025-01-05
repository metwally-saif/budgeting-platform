import { useState, useCallback, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser } from ".";
import {
  CreateHistoryBankAccountInput,
  HistoryBankAccount,
} from "../../amplify/graphql/API";

export function useListHistoryBankAccountsByUserId() {
  const { user } = useUser();
  const [historyBankAccounts, setHistoryBankAccounts] = useState<
    HistoryBankAccount[] | null
  >(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  );

  const fetchHistoryBankAccounts = useCallback(async () => {
    if (!user) {
      return;
    }
    try {
      const { data } = await client.models.HistoryBankAccount.list({
        filter: { userId: { eq: user.sub } },
      });
      if (!data) {
        setError(new Error("BankAccount not found"));
        return;
      }
      setHistoryBankAccounts(data as unknown as HistoryBankAccount[]);
    } catch (error) {
      setError(error as Error);
    }
  }, [client, user]);

  useEffect(() => {
    fetchHistoryBankAccounts();
  }, [fetchHistoryBankAccounts]);

  return { historyBankAccounts, fetchHistoryBankAccounts, error };
}

export function useAddHistoryBankAccount() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const { fetchHistoryBankAccounts } = useListHistoryBankAccountsByUserId();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const createHistoryBankAccount: (
    input: CreateHistoryBankAccountInput,
  ) => Promise<void> = useCallback(
    async (input: CreateHistoryBankAccountInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.HistoryBankAccount.create({
          ...input,
          userId: user.sub,
        });
        fetchHistoryBankAccounts();
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client.models.HistoryBankAccount, fetchHistoryBankAccounts, user],
  );

  return { saving, createHistoryBankAccount, error };
}
