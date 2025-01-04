/* tslint:disable */
 
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBankAccount = /* GraphQL */ `mutation CreateBankAccount(
  $condition: ModelBankAccountConditionInput
  $input: CreateBankAccountInput!
) {
  createBankAccount(condition: $condition, input: $input) {
    balance
    createdAt
    id
    name
    owner
    type
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBankAccountMutationVariables,
  APITypes.CreateBankAccountMutation
>;
export const createExpense = /* GraphQL */ `mutation CreateExpense(
  $condition: ModelExpenseConditionInput
  $input: CreateExpenseInput!
) {
  createExpense(condition: $condition, input: $input) {
    amount
    assigned
    category
    createdAt
    date
    dueDate
    expenseType {
      createdAt
      id
      name
      owner
      updatedAt
      userId
      __typename
    }
    expenseTypeId
    hasTarget
    history {
      nextToken
      __typename
    }
    id
    name
    nextMonthIWantToSetAside
    notes
    owner
    recurring
    recurringFrequency
    targetAmount
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpenseMutationVariables,
  APITypes.CreateExpenseMutation
>;
export const createExpenseType = /* GraphQL */ `mutation CreateExpenseType(
  $condition: ModelExpenseTypeConditionInput
  $input: CreateExpenseTypeInput!
) {
  createExpenseType(condition: $condition, input: $input) {
    createdAt
    expenses {
      nextToken
      __typename
    }
    id
    name
    owner
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpenseTypeMutationVariables,
  APITypes.CreateExpenseTypeMutation
>;
export const createHistoryExpense =
  /* GraphQL */ `mutation CreateHistoryExpense(
  $condition: ModelHistoryExpenseConditionInput
  $input: CreateHistoryExpenseInput!
) {
  createHistoryExpense(condition: $condition, input: $input) {
    amount
    createdAt
    date
    expenseId
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateHistoryExpenseMutationVariables,
    APITypes.CreateHistoryExpenseMutation
  >;
export const createPreference = /* GraphQL */ `mutation CreatePreference(
  $condition: ModelPreferenceConditionInput
  $input: CreatePreferenceInput!
) {
  createPreference(condition: $condition, input: $input) {
    createdAt
    currency
    debt
    debtGoal
    deptType
    emergencyFund
    emergencyFundGoal
    financialStatus
    hasDebt
    hasEmergencyFund
    hasRetirementFund
    homeOwnership
    id
    lastUpdated
    monthlyExpense
    monthlyIncome
    mostSpend
    owner
    retirementFund
    retirementFundGoal
    savingsBalance
    savingsGoal
    subscriptions
    transportation
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePreferenceMutationVariables,
  APITypes.CreatePreferenceMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    bankAccounts {
      nextToken
      __typename
    }
    createdAt
    email
    expenseTypes {
      nextToken
      __typename
    }
    expenses {
      nextToken
      __typename
    }
    firstName
    historyExpense {
      nextToken
      __typename
    }
    id
    lastName
    owner
    preference {
      createdAt
      currency
      debt
      debtGoal
      deptType
      emergencyFund
      emergencyFundGoal
      financialStatus
      hasDebt
      hasEmergencyFund
      hasRetirementFund
      homeOwnership
      id
      lastUpdated
      monthlyExpense
      monthlyIncome
      mostSpend
      owner
      retirementFund
      retirementFundGoal
      savingsBalance
      savingsGoal
      subscriptions
      transportation
      updatedAt
      userId
      __typename
    }
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteBankAccount = /* GraphQL */ `mutation DeleteBankAccount(
  $condition: ModelBankAccountConditionInput
  $input: DeleteBankAccountInput!
) {
  deleteBankAccount(condition: $condition, input: $input) {
    balance
    createdAt
    id
    name
    owner
    type
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBankAccountMutationVariables,
  APITypes.DeleteBankAccountMutation
>;
export const deleteExpense = /* GraphQL */ `mutation DeleteExpense(
  $condition: ModelExpenseConditionInput
  $input: DeleteExpenseInput!
) {
  deleteExpense(condition: $condition, input: $input) {
    amount
    assigned
    category
    createdAt
    date
    dueDate
    expenseType {
      createdAt
      id
      name
      owner
      updatedAt
      userId
      __typename
    }
    expenseTypeId
    hasTarget
    history {
      nextToken
      __typename
    }
    id
    name
    nextMonthIWantToSetAside
    notes
    owner
    recurring
    recurringFrequency
    targetAmount
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpenseMutationVariables,
  APITypes.DeleteExpenseMutation
>;
export const deleteExpenseType = /* GraphQL */ `mutation DeleteExpenseType(
  $condition: ModelExpenseTypeConditionInput
  $input: DeleteExpenseTypeInput!
) {
  deleteExpenseType(condition: $condition, input: $input) {
    createdAt
    expenses {
      nextToken
      __typename
    }
    id
    name
    owner
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpenseTypeMutationVariables,
  APITypes.DeleteExpenseTypeMutation
>;
export const deleteHistoryExpense =
  /* GraphQL */ `mutation DeleteHistoryExpense(
  $condition: ModelHistoryExpenseConditionInput
  $input: DeleteHistoryExpenseInput!
) {
  deleteHistoryExpense(condition: $condition, input: $input) {
    amount
    createdAt
    date
    expense {
      amount
      assigned
      category
      createdAt
      date
      dueDate
      expenseTypeId
      hasTarget
      id
      name
      nextMonthIWantToSetAside
      notes
      owner
      recurring
      recurringFrequency
      targetAmount
      updatedAt
      userId
      __typename
    }
    expenseId
    id
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteHistoryExpenseMutationVariables,
    APITypes.DeleteHistoryExpenseMutation
  >;
export const deletePreference = /* GraphQL */ `mutation DeletePreference(
  $condition: ModelPreferenceConditionInput
  $input: DeletePreferenceInput!
) {
  deletePreference(condition: $condition, input: $input) {
    createdAt
    currency
    debt
    debtGoal
    deptType
    emergencyFund
    emergencyFundGoal
    financialStatus
    hasDebt
    hasEmergencyFund
    hasRetirementFund
    homeOwnership
    id
    lastUpdated
    monthlyExpense
    monthlyIncome
    mostSpend
    owner
    retirementFund
    retirementFundGoal
    savingsBalance
    savingsGoal
    subscriptions
    transportation
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePreferenceMutationVariables,
  APITypes.DeletePreferenceMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    bankAccounts {
      nextToken
      __typename
    }
    createdAt
    email
    expenseTypes {
      nextToken
      __typename
    }
    expenses {
      nextToken
      __typename
    }
    firstName
    historyExpense {
      nextToken
      __typename
    }
    id
    lastName
    owner
    preference {
      createdAt
      currency
      debt
      debtGoal
      deptType
      emergencyFund
      emergencyFundGoal
      financialStatus
      hasDebt
      hasEmergencyFund
      hasRetirementFund
      homeOwnership
      id
      lastUpdated
      monthlyExpense
      monthlyIncome
      mostSpend
      owner
      retirementFund
      retirementFundGoal
      savingsBalance
      savingsGoal
      subscriptions
      transportation
      updatedAt
      userId
      __typename
    }
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateBankAccount = /* GraphQL */ `mutation UpdateBankAccount(
  $condition: ModelBankAccountConditionInput
  $input: UpdateBankAccountInput!
) {
  updateBankAccount(condition: $condition, input: $input) {
    balance
    createdAt
    id
    name
    owner
    type
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBankAccountMutationVariables,
  APITypes.UpdateBankAccountMutation
>;
export const updateExpense = /* GraphQL */ `mutation UpdateExpense(
  $condition: ModelExpenseConditionInput
  $input: UpdateExpenseInput!
) {
  updateExpense(condition: $condition, input: $input) {
    amount
    assigned
    category
    createdAt
    date
    dueDate
    expenseTypeId
    hasTarget
    id
    name
    nextMonthIWantToSetAside
    notes
    owner
    recurring
    recurringFrequency
    targetAmount
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpenseMutationVariables,
  APITypes.UpdateExpenseMutation
>;
export const updateExpenseType = /* GraphQL */ `mutation UpdateExpenseType(
  $condition: ModelExpenseTypeConditionInput
  $input: UpdateExpenseTypeInput!
) {
  updateExpenseType(condition: $condition, input: $input) {
    createdAt
    expenses {
      nextToken
      __typename
    }
    id
    name
    owner
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpenseTypeMutationVariables,
  APITypes.UpdateExpenseTypeMutation
>;
export const updateHistoryExpense =
  /* GraphQL */ `mutation UpdateHistoryExpense(
  $condition: ModelHistoryExpenseConditionInput
  $input: UpdateHistoryExpenseInput!
) {
  updateHistoryExpense(condition: $condition, input: $input) {
    amount
    createdAt
    date
    expense {
      amount
      assigned
      category
      createdAt
      date
      dueDate
      expenseTypeId
      hasTarget
      id
      name
      nextMonthIWantToSetAside
      notes
      owner
      recurring
      recurringFrequency
      targetAmount
      updatedAt
      userId
      __typename
    }
    expenseId
    id
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdateHistoryExpenseMutationVariables,
    APITypes.UpdateHistoryExpenseMutation
  >;
export const updatePreference = /* GraphQL */ `mutation UpdatePreference(
  $condition: ModelPreferenceConditionInput
  $input: UpdatePreferenceInput!
) {
  updatePreference(condition: $condition, input: $input) {
    createdAt
    currency
    debt
    debtGoal
    deptType
    emergencyFund
    emergencyFundGoal
    financialStatus
    hasDebt
    hasEmergencyFund
    hasRetirementFund
    homeOwnership
    id
    lastUpdated
    monthlyExpense
    monthlyIncome
    mostSpend
    owner
    retirementFund
    retirementFundGoal
    savingsBalance
    savingsGoal
    subscriptions
    transportation
    updatedAt
    user {
      createdAt
      email
      firstName
      id
      lastName
      owner
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePreferenceMutationVariables,
  APITypes.UpdatePreferenceMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    bankAccounts {
      nextToken
      __typename
    }
    createdAt
    email
    expenseTypes {
      nextToken
      __typename
    }
    expenses {
      nextToken
      __typename
    }
    firstName
    historyExpense {
      nextToken
      __typename
    }
    id
    lastName
    owner
    preference {
      createdAt
      currency
      debt
      debtGoal
      deptType
      emergencyFund
      emergencyFundGoal
      financialStatus
      hasDebt
      hasEmergencyFund
      hasRetirementFund
      homeOwnership
      id
      lastUpdated
      monthlyExpense
      monthlyIncome
      mostSpend
      owner
      retirementFund
      retirementFundGoal
      savingsBalance
      savingsGoal
      subscriptions
      transportation
      updatedAt
      userId
      __typename
    }
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
