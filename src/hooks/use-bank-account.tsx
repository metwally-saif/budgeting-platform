import { useState, useCallback, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useUser } from ".";
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
  DeleteBankAccountInput,
  BankAccountType,
  BankAccount,
} from "../../amplify/graphql/API";
import { useAddHistoryBankAccount } from ".";

export function useBankAccount() {
  const [bankAccount, setBankAccount] = useState<BankAccountType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  ); // Add dependencies if generateClient depends on any dynamic values

  const fetchBankAccount = useCallback(
    async (id: string) => {
      try {
        const { data } = await client.models.BankAccount.get({ id });
        if (!data) {
          setError(new Error("BankAccount not found"));
          return;
        }
        setBankAccount(data as unknown as BankAccountType);
      } catch (error) {
        setError(error as Error);
      }
    },
    [client],
  );

  return { bankAccount, fetchBankAccount, error };
}

export function useListBankAccountsByUserId() {
  const { user } = useUser();
  const [bankAccounts, setBankAccounts] = useState<BankAccount[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the client to prevent recreation on every render
  const client = useMemo(
    () =>
      generateClient<Schema>({
        authMode: "userPool",
      }),
    [],
  );

  const fetchBankAccounts = useCallback(async () => {
    if (!user) {
      return;
    }
    try {
      const { data } = await client.models.BankAccount.list({
        filter: { userId: { eq: user.sub } },
      });
      if (!data) {
        setError(new Error("BankAccount not found"));
        return;
      }
      setBankAccounts(data as unknown as BankAccount[]);
    } catch (error) {
      setError(error as Error);
    }
  }, [client, user]);

  useEffect(() => {
    fetchBankAccounts();
  }, [fetchBankAccounts]);

  return { bankAccounts, fetchBankAccounts, error };
}

export function useAddBankAccount() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const { fetchBankAccounts } = useListBankAccountsByUserId();
  const { createHistoryBankAccount } = useAddHistoryBankAccount();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const createBankAccount = useCallback(
    async (input: CreateBankAccountInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.BankAccount.create({
          ...input,
          userId: user.sub,
        });
        fetchBankAccounts();
        if (input.id) {
          createHistoryBankAccount({
            userId: user.sub,
            bankAccountId: input.id,
            balance: input.balance,
          });
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [
      client.models.BankAccount,
      createHistoryBankAccount,
      fetchBankAccounts,
      user,
    ],
  );

  return { saving, createBankAccount, error };
}

export function useUpdateBankAccount() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const { fetchBankAccounts } = useListBankAccountsByUserId();
  const { createHistoryBankAccount } = useAddHistoryBankAccount();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const updateBankAccount = useCallback(
    async (input: UpdateBankAccountInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.BankAccount.update({
          ...input,
          userId: user.sub,
        });
        fetchBankAccounts();
        createHistoryBankAccount({
          userId: user.sub,
          bankAccountId: input.id,
          balance: input.balance,
        });
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [
      client.models.BankAccount,
      createHistoryBankAccount,
      fetchBankAccounts,
      user,
    ],
  );

  return { saving, updateBankAccount, error };
}

export function useDeleteBankAccount() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useUser();
  const { fetchBankAccounts } = useListBankAccountsByUserId();
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const deleteBankAccount = useCallback(
    async (input: DeleteBankAccountInput) => {
      if (!user) {
        return;
      }
      try {
        setSaving(true);
        await client.models.BankAccount.delete({ ...input });
        fetchBankAccounts();
      } catch (error) {
        setError(error as Error);
      } finally {
        setSaving(false);
      }
    },
    [client.models.BankAccount, fetchBankAccounts, user],
  );

  return { saving, deleteBankAccount, error };
}
