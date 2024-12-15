/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBankAccount =
  /* GraphQL */ `subscription OnCreateBankAccount(
  $filter: ModelSubscriptionBankAccountFilterInput
  $owner: String
) {
  onCreateBankAccount(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateBankAccountSubscriptionVariables,
    APITypes.OnCreateBankAccountSubscription
  >;
export const onCreateExpense = /* GraphQL */ `subscription OnCreateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onCreateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateExpenseTypeSubscriptionVariables,
    APITypes.OnCreateExpenseTypeSubscription
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
` as GeneratedSubscription<
    APITypes.OnDeleteExpenseTypeSubscriptionVariables,
    APITypes.OnDeleteExpenseTypeSubscription
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
` as GeneratedSubscription<
    APITypes.OnUpdateExpenseTypeSubscriptionVariables,
    APITypes.OnUpdateExpenseTypeSubscription
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
