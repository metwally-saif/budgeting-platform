/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createExpense = /* GraphQL */ `mutation CreateExpense(
  $condition: ModelExpenseConditionInput
  $input: CreateExpenseInput!
) {
  createExpense(condition: $condition, input: $input) {
    amount
    category {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    categoryId
    createdAt
    date
    id
    name
    notes
    owner
    paid
    paymentDate
    paymentMethod
    recurring
    recurringEndDate
    recurringFrequency
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
export const createExpenseCategory = /* GraphQL */ `mutation CreateExpenseCategory(
  $condition: ModelExpenseCategoryConditionInput
  $input: CreateExpenseCategoryInput!
) {
  createExpenseCategory(condition: $condition, input: $input) {
    createdAt
    expenses {
      nextToken
      __typename
    }
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpenseCategoryMutationVariables,
  APITypes.CreateExpenseCategoryMutation
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
    emergencyFund
    emergencyFundGoal
    hasDebt
    hasEmergencyFund
    hasRetirementFund
    id
    lastUpdated
    monthlyExpense
    monthlyIncome
    owner
    retirementFund
    retirementFundGoal
    savingsBalance
    savingsGoal
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
    createdAt
    email
    expenses {
      nextToken
      __typename
    }
    firstName
    id
    lastName
    owner
    preference {
      createdAt
      currency
      debt
      debtGoal
      emergencyFund
      emergencyFundGoal
      hasDebt
      hasEmergencyFund
      hasRetirementFund
      id
      lastUpdated
      monthlyExpense
      monthlyIncome
      owner
      retirementFund
      retirementFundGoal
      savingsBalance
      savingsGoal
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
export const deleteExpense = /* GraphQL */ `mutation DeleteExpense(
  $condition: ModelExpenseConditionInput
  $input: DeleteExpenseInput!
) {
  deleteExpense(condition: $condition, input: $input) {
    amount
    category {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    categoryId
    createdAt
    date
    id
    name
    notes
    owner
    paid
    paymentDate
    paymentMethod
    recurring
    recurringEndDate
    recurringFrequency
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
export const deleteExpenseCategory = /* GraphQL */ `mutation DeleteExpenseCategory(
  $condition: ModelExpenseCategoryConditionInput
  $input: DeleteExpenseCategoryInput!
) {
  deleteExpenseCategory(condition: $condition, input: $input) {
    createdAt
    expenses {
      nextToken
      __typename
    }
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpenseCategoryMutationVariables,
  APITypes.DeleteExpenseCategoryMutation
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
    emergencyFund
    emergencyFundGoal
    hasDebt
    hasEmergencyFund
    hasRetirementFund
    id
    lastUpdated
    monthlyExpense
    monthlyIncome
    owner
    retirementFund
    retirementFundGoal
    savingsBalance
    savingsGoal
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
    createdAt
    email
    expenses {
      nextToken
      __typename
    }
    firstName
    id
    lastName
    owner
    preference {
      createdAt
      currency
      debt
      debtGoal
      emergencyFund
      emergencyFundGoal
      hasDebt
      hasEmergencyFund
      hasRetirementFund
      id
      lastUpdated
      monthlyExpense
      monthlyIncome
      owner
      retirementFund
      retirementFundGoal
      savingsBalance
      savingsGoal
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
export const updateExpense = /* GraphQL */ `mutation UpdateExpense(
  $condition: ModelExpenseConditionInput
  $input: UpdateExpenseInput!
) {
  updateExpense(condition: $condition, input: $input) {
    amount
    category {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    categoryId
    createdAt
    date
    id
    name
    notes
    owner
    paid
    paymentDate
    paymentMethod
    recurring
    recurringEndDate
    recurringFrequency
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
  APITypes.UpdateExpenseMutationVariables,
  APITypes.UpdateExpenseMutation
>;
export const updateExpenseCategory = /* GraphQL */ `mutation UpdateExpenseCategory(
  $condition: ModelExpenseCategoryConditionInput
  $input: UpdateExpenseCategoryInput!
) {
  updateExpenseCategory(condition: $condition, input: $input) {
    createdAt
    expenses {
      nextToken
      __typename
    }
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpenseCategoryMutationVariables,
  APITypes.UpdateExpenseCategoryMutation
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
    emergencyFund
    emergencyFundGoal
    hasDebt
    hasEmergencyFund
    hasRetirementFund
    id
    lastUpdated
    monthlyExpense
    monthlyIncome
    owner
    retirementFund
    retirementFundGoal
    savingsBalance
    savingsGoal
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
    createdAt
    email
    expenses {
      nextToken
      __typename
    }
    firstName
    id
    lastName
    owner
    preference {
      createdAt
      currency
      debt
      debtGoal
      emergencyFund
      emergencyFundGoal
      hasDebt
      hasEmergencyFund
      hasRetirementFund
      id
      lastUpdated
      monthlyExpense
      monthlyIncome
      owner
      retirementFund
      retirementFundGoal
      savingsBalance
      savingsGoal
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
