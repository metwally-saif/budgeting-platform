/* tslint:disable */
/* eslint-disable */
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
    history {
      nextToken
      __typename
    }
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
export const getConversationChat =
  /* GraphQL */ `query GetConversationChat($id: ID!) {
  getConversationChat(id: $id) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    metadata
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationChatQueryVariables,
    APITypes.GetConversationChatQuery
  >;
export const getConversationMessageChat =
  /* GraphQL */ `query GetConversationMessageChat($id: ID!) {
  getConversationMessageChat(id: $id) {
    aiContext
    associatedUserMessageId
    content {
      text
      __typename
    }
    conversation {
      createdAt
      id
      metadata
      name
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    owner
    role
    toolConfiguration {
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationMessageChatQueryVariables,
    APITypes.GetConversationMessageChatQuery
  >;
export const getExpense = /* GraphQL */ `query GetExpense($id: ID!) {
  getExpense(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExpenseQueryVariables,
  APITypes.GetExpenseQuery
>;
export const getExpenseType = /* GraphQL */ `query GetExpenseType($id: ID!) {
  getExpenseType(id: $id) {
    createdAt
    expenseHistory {
      nextToken
      __typename
    }
    expenses {
      nextToken
      __typename
    }
    id
    name
    owner
    predictedExpenses {
      nextToken
      __typename
    }
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
export const getHistoryBankAccount =
  /* GraphQL */ `query GetHistoryBankAccount($id: ID!) {
  getHistoryBankAccount(id: $id) {
    balance
    bankAccount {
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
    bankAccountId
    createdAt
    date
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
    APITypes.GetHistoryBankAccountQueryVariables,
    APITypes.GetHistoryBankAccountQuery
  >;
export const getHistoryExpense =
  /* GraphQL */ `query GetHistoryExpense($id: ID!) {
  getHistoryExpense(id: $id) {
    assigned
    category
    createdAt
    date
    expense {
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
` as GeneratedQuery<
    APITypes.GetHistoryExpenseQueryVariables,
    APITypes.GetHistoryExpenseQuery
  >;
export const getPredictedExpense =
  /* GraphQL */ `query GetPredictedExpense($id: ID!) {
  getPredictedExpense(id: $id) {
    category
    createdAt
    date
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
    id
    owner
    predictedAmount
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
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetPredictedExpenseQueryVariables,
    APITypes.GetPredictedExpenseQuery
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
    historyBankAccount {
      nextToken
      __typename
    }
    historyExpense {
      nextToken
      __typename
    }
    id
    lastName
    owner
    predictedExpenses {
      nextToken
      __typename
    }
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
export const listConversationChats = /* GraphQL */ `query ListConversationChats(
  $filter: ModelConversationChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      metadata
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationChatsQueryVariables,
  APITypes.ListConversationChatsQuery
>;
export const listConversationMessageChats =
  /* GraphQL */ `query ListConversationMessageChats(
  $filter: ModelConversationMessageChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationMessageChats(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      aiContext
      associatedUserMessageId
      conversationId
      createdAt
      id
      owner
      role
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListConversationMessageChatsQueryVariables,
    APITypes.ListConversationMessageChatsQuery
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
export const listHistoryBankAccountByUserId =
  /* GraphQL */ `query ListHistoryBankAccountByUserId(
  $filter: ModelHistoryBankAccountFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String!
) {
  listHistoryBankAccountByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      balance
      bankAccountId
      createdAt
      date
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
    APITypes.ListHistoryBankAccountByUserIdQueryVariables,
    APITypes.ListHistoryBankAccountByUserIdQuery
  >;
export const listHistoryBankAccounts =
  /* GraphQL */ `query ListHistoryBankAccounts(
  $filter: ModelHistoryBankAccountFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listHistoryBankAccounts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      balance
      bankAccountId
      createdAt
      date
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
    APITypes.ListHistoryBankAccountsQueryVariables,
    APITypes.ListHistoryBankAccountsQuery
  >;
export const listHistoryExpenseByUserId =
  /* GraphQL */ `query ListHistoryExpenseByUserId(
  $filter: ModelHistoryExpenseFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String!
) {
  listHistoryExpenseByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      assigned
      category
      createdAt
      date
      expenseId
      expenseTypeId
      id
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListHistoryExpenseByUserIdQueryVariables,
    APITypes.ListHistoryExpenseByUserIdQuery
  >;
export const listHistoryExpenses = /* GraphQL */ `query ListHistoryExpenses(
  $filter: ModelHistoryExpenseFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listHistoryExpenses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      assigned
      category
      createdAt
      date
      expenseId
      expenseTypeId
      id
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHistoryExpensesQueryVariables,
  APITypes.ListHistoryExpensesQuery
>;
export const listPredictedExpenseByOwner =
  /* GraphQL */ `query ListPredictedExpenseByOwner(
  $filter: ModelPredictedExpenseFilterInput
  $limit: Int
  $nextToken: String
  $owner: String!
  $sortDirection: ModelSortDirection
) {
  listPredictedExpenseByOwner(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    owner: $owner
    sortDirection: $sortDirection
  ) {
    items {
      category
      createdAt
      date
      expenseTypeId
      id
      owner
      predictedAmount
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListPredictedExpenseByOwnerQueryVariables,
    APITypes.ListPredictedExpenseByOwnerQuery
  >;
export const listPredictedExpenses = /* GraphQL */ `query ListPredictedExpenses(
  $filter: ModelPredictedExpenseFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPredictedExpenses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      category
      createdAt
      date
      expenseTypeId
      id
      owner
      predictedAmount
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPredictedExpensesQueryVariables,
  APITypes.ListPredictedExpensesQuery
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
