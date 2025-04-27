/* tslint:disable */

// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAssistantResponseChat =
  /* GraphQL */ `subscription OnCreateAssistantResponseChat($conversationId: ID) {
  onCreateAssistantResponseChat(conversationId: $conversationId) {
    associatedUserMessageId
    contentBlockDeltaIndex
    contentBlockDoneAtIndex
    contentBlockIndex
    contentBlockText
    contentBlockToolUse {
      input
      name
      toolUseId
      __typename
    }
    conversationId
    errors {
      errorType
      message
      __typename
    }
    id
    owner
    p
    stopReason
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateAssistantResponseChatSubscriptionVariables,
    APITypes.OnCreateAssistantResponseChatSubscription
  >;
export const onCreateBankAccount =
  /* GraphQL */ `subscription OnCreateBankAccount(
  $filter: ModelSubscriptionBankAccountFilterInput
  $owner: String
) {
  onCreateBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateBankAccountSubscriptionVariables,
    APITypes.OnCreateBankAccountSubscription
  >;
export const onCreateConversationMessageChat =
  /* GraphQL */ `subscription OnCreateConversationMessageChat(
  $filter: ModelSubscriptionConversationMessageChatFilterInput
  $owner: String
) {
  onCreateConversationMessageChat(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateConversationMessageChatSubscriptionVariables,
    APITypes.OnCreateConversationMessageChatSubscription
  >;
export const onCreateExpense = /* GraphQL */ `subscription OnCreateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onCreateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExpenseSubscriptionVariables,
  APITypes.OnCreateExpenseSubscription
>;
export const onCreateExpenseType =
  /* GraphQL */ `subscription OnCreateExpenseType(
  $filter: ModelSubscriptionExpenseTypeFilterInput
  $owner: String
) {
  onCreateExpenseType(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateExpenseTypeSubscriptionVariables,
    APITypes.OnCreateExpenseTypeSubscription
  >;
export const onCreateHistoryBankAccount =
  /* GraphQL */ `subscription OnCreateHistoryBankAccount(
  $filter: ModelSubscriptionHistoryBankAccountFilterInput
  $owner: String
) {
  onCreateHistoryBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateHistoryBankAccountSubscriptionVariables,
    APITypes.OnCreateHistoryBankAccountSubscription
  >;
export const onCreateHistoryExpense =
  /* GraphQL */ `subscription OnCreateHistoryExpense(
  $filter: ModelSubscriptionHistoryExpenseFilterInput
) {
  onCreateHistoryExpense(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateHistoryExpenseSubscriptionVariables,
    APITypes.OnCreateHistoryExpenseSubscription
  >;
export const onCreatePredictedExpense =
  /* GraphQL */ `subscription OnCreatePredictedExpense(
  $filter: ModelSubscriptionPredictedExpenseFilterInput
  $owner: String
) {
  onCreatePredictedExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreatePredictedExpenseSubscriptionVariables,
    APITypes.OnCreatePredictedExpenseSubscription
  >;
export const onCreatePreference =
  /* GraphQL */ `subscription OnCreatePreference(
  $filter: ModelSubscriptionPreferenceFilterInput
  $owner: String
) {
  onCreatePreference(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreatePreferenceSubscriptionVariables,
    APITypes.OnCreatePreferenceSubscription
  >;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteBankAccount =
  /* GraphQL */ `subscription OnDeleteBankAccount(
  $filter: ModelSubscriptionBankAccountFilterInput
  $owner: String
) {
  onDeleteBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteBankAccountSubscriptionVariables,
    APITypes.OnDeleteBankAccountSubscription
  >;
export const onDeleteExpense = /* GraphQL */ `subscription OnDeleteExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onDeleteExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExpenseSubscriptionVariables,
  APITypes.OnDeleteExpenseSubscription
>;
export const onDeleteExpenseType =
  /* GraphQL */ `subscription OnDeleteExpenseType(
  $filter: ModelSubscriptionExpenseTypeFilterInput
  $owner: String
) {
  onDeleteExpenseType(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteExpenseTypeSubscriptionVariables,
    APITypes.OnDeleteExpenseTypeSubscription
  >;
export const onDeleteHistoryBankAccount =
  /* GraphQL */ `subscription OnDeleteHistoryBankAccount(
  $filter: ModelSubscriptionHistoryBankAccountFilterInput
  $owner: String
) {
  onDeleteHistoryBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteHistoryBankAccountSubscriptionVariables,
    APITypes.OnDeleteHistoryBankAccountSubscription
  >;
export const onDeleteHistoryExpense =
  /* GraphQL */ `subscription OnDeleteHistoryExpense(
  $filter: ModelSubscriptionHistoryExpenseFilterInput
) {
  onDeleteHistoryExpense(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteHistoryExpenseSubscriptionVariables,
    APITypes.OnDeleteHistoryExpenseSubscription
  >;
export const onDeletePredictedExpense =
  /* GraphQL */ `subscription OnDeletePredictedExpense(
  $filter: ModelSubscriptionPredictedExpenseFilterInput
  $owner: String
) {
  onDeletePredictedExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeletePredictedExpenseSubscriptionVariables,
    APITypes.OnDeletePredictedExpenseSubscription
  >;
export const onDeletePreference =
  /* GraphQL */ `subscription OnDeletePreference(
  $filter: ModelSubscriptionPreferenceFilterInput
  $owner: String
) {
  onDeletePreference(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeletePreferenceSubscriptionVariables,
    APITypes.OnDeletePreferenceSubscription
  >;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateBankAccount =
  /* GraphQL */ `subscription OnUpdateBankAccount(
  $filter: ModelSubscriptionBankAccountFilterInput
  $owner: String
) {
  onUpdateBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateBankAccountSubscriptionVariables,
    APITypes.OnUpdateBankAccountSubscription
  >;
export const onUpdateExpense = /* GraphQL */ `subscription OnUpdateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onUpdateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExpenseSubscriptionVariables,
  APITypes.OnUpdateExpenseSubscription
>;
export const onUpdateExpenseType =
  /* GraphQL */ `subscription OnUpdateExpenseType(
  $filter: ModelSubscriptionExpenseTypeFilterInput
  $owner: String
) {
  onUpdateExpenseType(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateExpenseTypeSubscriptionVariables,
    APITypes.OnUpdateExpenseTypeSubscription
  >;
export const onUpdateHistoryBankAccount =
  /* GraphQL */ `subscription OnUpdateHistoryBankAccount(
  $filter: ModelSubscriptionHistoryBankAccountFilterInput
  $owner: String
) {
  onUpdateHistoryBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateHistoryBankAccountSubscriptionVariables,
    APITypes.OnUpdateHistoryBankAccountSubscription
  >;
export const onUpdateHistoryExpense =
  /* GraphQL */ `subscription OnUpdateHistoryExpense(
  $filter: ModelSubscriptionHistoryExpenseFilterInput
) {
  onUpdateHistoryExpense(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateHistoryExpenseSubscriptionVariables,
    APITypes.OnUpdateHistoryExpenseSubscription
  >;
export const onUpdatePredictedExpense =
  /* GraphQL */ `subscription OnUpdatePredictedExpense(
  $filter: ModelSubscriptionPredictedExpenseFilterInput
  $owner: String
) {
  onUpdatePredictedExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdatePredictedExpenseSubscriptionVariables,
    APITypes.OnUpdatePredictedExpenseSubscription
  >;
export const onUpdatePreference =
  /* GraphQL */ `subscription OnUpdatePreference(
  $filter: ModelSubscriptionPreferenceFilterInput
  $owner: String
) {
  onUpdatePreference(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdatePreferenceSubscriptionVariables,
    APITypes.OnUpdatePreferenceSubscription
  >;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
