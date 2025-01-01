/* tslint:disable */
 
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBankAccount = /* GraphQL */ `query GetBankAccount($id: ID!) {
  getBankAccount(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBankAccountQueryVariables,
  APITypes.GetBankAccountQuery
>;
export const getExpense = /* GraphQL */ `query GetExpense($id: ID!) {
  getExpense(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExpenseQueryVariables,
  APITypes.GetExpenseQuery
>;
export const getExpenseType = /* GraphQL */ `query GetExpenseType($id: ID!) {
  getExpenseType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExpenseTypeQueryVariables,
  APITypes.GetExpenseTypeQuery
>;
export const getPreference =
  /* GraphQL */ `query GetPreference($userId: String!) {
  getPreference(userId: $userId) {
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
` as GeneratedQuery<
    APITypes.GetPreferenceQueryVariables,
    APITypes.GetPreferenceQuery
  >;
export const getUser = /* GraphQL */ `query GetUser($profileOwner: String!) {
  getUser(profileOwner: $profileOwner) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listBankAccountByUserId =
  /* GraphQL */ `query ListBankAccountByUserId(
  $filter: ModelBankAccountFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String!
) {
  listBankAccountByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      balance
      createdAt
      id
      name
      owner
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListBankAccountByUserIdQueryVariables,
    APITypes.ListBankAccountByUserIdQuery
  >;
export const listBankAccounts = /* GraphQL */ `query ListBankAccounts(
  $filter: ModelBankAccountFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBankAccounts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      balance
      createdAt
      id
      name
      owner
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBankAccountsQueryVariables,
  APITypes.ListBankAccountsQuery
>;
export const listExpenseByUserId = /* GraphQL */ `query ListExpenseByUserId(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String!
) {
  listExpenseByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpenseByUserIdQueryVariables,
  APITypes.ListExpenseByUserIdQuery
>;
export const listExpenseTypeByUserId =
  /* GraphQL */ `query ListExpenseTypeByUserId(
  $filter: ModelExpenseTypeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String!
) {
  listExpenseTypeByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      createdAt
      id
      name
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListExpenseTypeByUserIdQueryVariables,
    APITypes.ListExpenseTypeByUserIdQuery
  >;
export const listExpenseTypes = /* GraphQL */ `query ListExpenseTypes(
  $filter: ModelExpenseTypeFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExpenseTypes(
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
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpenseTypesQueryVariables,
  APITypes.ListExpenseTypesQuery
>;
export const listExpenses = /* GraphQL */ `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExpenses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
