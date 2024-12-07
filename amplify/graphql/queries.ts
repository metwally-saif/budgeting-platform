/* tslint:disable */
 
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getExpense = /* GraphQL */ `query GetExpense($userId: String!) {
  getExpense(userId: $userId) {
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
` as GeneratedQuery<
  APITypes.GetExpenseQueryVariables,
  APITypes.GetExpenseQuery
>;
export const getExpenseCategory =
  /* GraphQL */ `query GetExpenseCategory($id: ID!) {
  getExpenseCategory(id: $id) {
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
` as GeneratedQuery<
    APITypes.GetExpenseCategoryQueryVariables,
    APITypes.GetExpenseCategoryQuery
  >;
export const getPreference =
  /* GraphQL */ `query GetPreference($userId: String!) {
  getPreference(userId: $userId) {
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
` as GeneratedQuery<
    APITypes.GetPreferenceQueryVariables,
    APITypes.GetPreferenceQuery
  >;
export const getUser = /* GraphQL */ `query GetUser($profileOwner: String!) {
  getUser(profileOwner: $profileOwner) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listExpenseCategories = /* GraphQL */ `query ListExpenseCategories(
  $filter: ModelExpenseCategoryFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExpenseCategories(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpenseCategoriesQueryVariables,
  APITypes.ListExpenseCategoriesQuery
>;
export const listExpenses = /* GraphQL */ `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String
) {
  listExpenses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      amount
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
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpensesQueryVariables,
  APITypes.ListExpensesQuery
>;
export const listPreferences = /* GraphQL */ `query ListPreferences(
  $filter: ModelPreferenceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String
) {
  listPreferences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPreferencesQueryVariables,
  APITypes.ListPreferencesQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $profileOwner: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    profileOwner: $profileOwner
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
