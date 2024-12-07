/* tslint:disable */
 
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExpense = /* GraphQL */ `subscription OnCreateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onCreateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExpenseSubscriptionVariables,
  APITypes.OnCreateExpenseSubscription
>;
export const onCreateExpenseCategory =
  /* GraphQL */ `subscription OnCreateExpenseCategory(
  $filter: ModelSubscriptionExpenseCategoryFilterInput
) {
  onCreateExpenseCategory(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateExpenseCategorySubscriptionVariables,
    APITypes.OnCreateExpenseCategorySubscription
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
` as GeneratedSubscription<
    APITypes.OnCreatePreferenceSubscriptionVariables,
    APITypes.OnCreatePreferenceSubscription
  >;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteExpense = /* GraphQL */ `subscription OnDeleteExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onDeleteExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExpenseSubscriptionVariables,
  APITypes.OnDeleteExpenseSubscription
>;
export const onDeleteExpenseCategory =
  /* GraphQL */ `subscription OnDeleteExpenseCategory(
  $filter: ModelSubscriptionExpenseCategoryFilterInput
) {
  onDeleteExpenseCategory(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteExpenseCategorySubscriptionVariables,
    APITypes.OnDeleteExpenseCategorySubscription
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
` as GeneratedSubscription<
    APITypes.OnDeletePreferenceSubscriptionVariables,
    APITypes.OnDeletePreferenceSubscription
  >;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateExpense = /* GraphQL */ `subscription OnUpdateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onUpdateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExpenseSubscriptionVariables,
  APITypes.OnUpdateExpenseSubscription
>;
export const onUpdateExpenseCategory =
  /* GraphQL */ `subscription OnUpdateExpenseCategory(
  $filter: ModelSubscriptionExpenseCategoryFilterInput
) {
  onUpdateExpenseCategory(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateExpenseCategorySubscriptionVariables,
    APITypes.OnUpdateExpenseCategorySubscription
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
` as GeneratedSubscription<
    APITypes.OnUpdatePreferenceSubscriptionVariables,
    APITypes.OnUpdatePreferenceSubscription
  >;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
