/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Expense = {
  __typename: "Expense",
  amount?: number | null,
  category?: ExpenseCategory | null,
  categoryId?: string | null,
  createdAt: string,
  date?: string | null,
  id?: string | null,
  name?: string | null,
  notes?: string | null,
  owner?: string | null,
  paid?: boolean | null,
  paymentDate?: string | null,
  paymentMethod?: string | null,
  recurring?: boolean | null,
  recurringEndDate?: string | null,
  recurringFrequency?: ExpenseRecurringFrequency | null,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type ExpenseCategory = {
  __typename: "ExpenseCategory",
  createdAt: string,
  expenses?: ModelExpenseConnection | null,
  id: string,
  name?: ExpenseCategoryName | null,
  updatedAt: string,
};

export type ModelExpenseConnection = {
  __typename: "ModelExpenseConnection",
  items:  Array<Expense | null >,
  nextToken?: string | null,
};

export enum ExpenseCategoryName {
  Debt = "Debt",
  Food = "Food",
  Healthcare = "Healthcare",
  Housing = "Housing",
  Insurance = "Insurance",
  Miscellaneous = "Miscellaneous",
  Personal = "Personal",
  Recreation = "Recreation",
  Savings = "Savings",
  Transportation = "Transportation",
  Utilities = "Utilities",
}


export enum ExpenseRecurringFrequency {
  Daily = "Daily",
  Monthly = "Monthly",
  Weekly = "Weekly",
  Yearly = "Yearly",
}


export type User = {
  __typename: "User",
  createdAt: string,
  email?: string | null,
  expenses?: ModelExpenseConnection | null,
  firstName?: string | null,
  id?: string | null,
  lastName?: string | null,
  owner?: string | null,
  preference?: Preference | null,
  profileOwner: string,
  role?: string | null,
  updatedAt: string,
};

export type Preference = {
  __typename: "Preference",
  createdAt: string,
  currency?: PreferenceCurrency | null,
  debt?: number | null,
  debtGoal?: number | null,
  emergencyFund?: number | null,
  emergencyFundGoal?: number | null,
  hasDebt?: boolean | null,
  hasEmergencyFund?: boolean | null,
  hasRetirementFund?: boolean | null,
  id?: string | null,
  lastUpdated?: string | null,
  monthlyExpense?: number | null,
  monthlyIncome?: number | null,
  owner?: string | null,
  retirementFund?: number | null,
  retirementFundGoal?: number | null,
  savingsBalance?: number | null,
  savingsGoal?: number | null,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export enum PreferenceCurrency {
  EUR = "EUR",
  USD = "USD",
}


export type ModelExpenseCategoryFilterInput = {
  and?: Array< ModelExpenseCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelExpenseCategoryNameInput | null,
  not?: ModelExpenseCategoryFilterInput | null,
  or?: Array< ModelExpenseCategoryFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelExpenseCategoryNameInput = {
  eq?: ExpenseCategoryName | null,
  ne?: ExpenseCategoryName | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelExpenseCategoryConnection = {
  __typename: "ModelExpenseCategoryConnection",
  items:  Array<ExpenseCategory | null >,
  nextToken?: string | null,
};

export type ModelExpenseFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelExpenseFilterInput | null > | null,
  categoryId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelExpenseFilterInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelExpenseFilterInput | null > | null,
  owner?: ModelStringInput | null,
  paid?: ModelBooleanInput | null,
  paymentDate?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  recurring?: ModelBooleanInput | null,
  recurringEndDate?: ModelStringInput | null,
  recurringFrequency?: ModelExpenseRecurringFrequencyInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelExpenseRecurringFrequencyInput = {
  eq?: ExpenseRecurringFrequency | null,
  ne?: ExpenseRecurringFrequency | null,
};

export type ModelPreferenceFilterInput = {
  and?: Array< ModelPreferenceFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelPreferenceCurrencyInput | null,
  debt?: ModelFloatInput | null,
  debtGoal?: ModelFloatInput | null,
  emergencyFund?: ModelFloatInput | null,
  emergencyFundGoal?: ModelFloatInput | null,
  hasDebt?: ModelBooleanInput | null,
  hasEmergencyFund?: ModelBooleanInput | null,
  hasRetirementFund?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  lastUpdated?: ModelStringInput | null,
  monthlyExpense?: ModelFloatInput | null,
  monthlyIncome?: ModelFloatInput | null,
  not?: ModelPreferenceFilterInput | null,
  or?: Array< ModelPreferenceFilterInput | null > | null,
  owner?: ModelStringInput | null,
  retirementFund?: ModelFloatInput | null,
  retirementFundGoal?: ModelFloatInput | null,
  savingsBalance?: ModelFloatInput | null,
  savingsGoal?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelPreferenceCurrencyInput = {
  eq?: PreferenceCurrency | null,
  ne?: PreferenceCurrency | null,
};

export type ModelPreferenceConnection = {
  __typename: "ModelPreferenceConnection",
  items:  Array<Preference | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelExpenseConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelExpenseConditionInput | null > | null,
  categoryId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelExpenseConditionInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelExpenseConditionInput | null > | null,
  owner?: ModelStringInput | null,
  paid?: ModelBooleanInput | null,
  paymentDate?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  recurring?: ModelBooleanInput | null,
  recurringEndDate?: ModelStringInput | null,
  recurringFrequency?: ModelExpenseRecurringFrequencyInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateExpenseInput = {
  amount?: number | null,
  categoryId?: string | null,
  date?: string | null,
  id?: string | null,
  name?: string | null,
  notes?: string | null,
  paid?: boolean | null,
  paymentDate?: string | null,
  paymentMethod?: string | null,
  recurring?: boolean | null,
  recurringEndDate?: string | null,
  recurringFrequency?: ExpenseRecurringFrequency | null,
  userId: string,
};

export type ModelExpenseCategoryConditionInput = {
  and?: Array< ModelExpenseCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelExpenseCategoryNameInput | null,
  not?: ModelExpenseCategoryConditionInput | null,
  or?: Array< ModelExpenseCategoryConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateExpenseCategoryInput = {
  id?: string | null,
  name?: ExpenseCategoryName | null,
};

export type ModelPreferenceConditionInput = {
  and?: Array< ModelPreferenceConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelPreferenceCurrencyInput | null,
  debt?: ModelFloatInput | null,
  debtGoal?: ModelFloatInput | null,
  emergencyFund?: ModelFloatInput | null,
  emergencyFundGoal?: ModelFloatInput | null,
  hasDebt?: ModelBooleanInput | null,
  hasEmergencyFund?: ModelBooleanInput | null,
  hasRetirementFund?: ModelBooleanInput | null,
  lastUpdated?: ModelStringInput | null,
  monthlyExpense?: ModelFloatInput | null,
  monthlyIncome?: ModelFloatInput | null,
  not?: ModelPreferenceConditionInput | null,
  or?: Array< ModelPreferenceConditionInput | null > | null,
  owner?: ModelStringInput | null,
  retirementFund?: ModelFloatInput | null,
  retirementFundGoal?: ModelFloatInput | null,
  savingsBalance?: ModelFloatInput | null,
  savingsGoal?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePreferenceInput = {
  currency?: PreferenceCurrency | null,
  debt?: number | null,
  debtGoal?: number | null,
  emergencyFund?: number | null,
  emergencyFundGoal?: number | null,
  hasDebt?: boolean | null,
  hasEmergencyFund?: boolean | null,
  hasRetirementFund?: boolean | null,
  id?: string | null,
  lastUpdated?: string | null,
  monthlyExpense?: number | null,
  monthlyIncome?: number | null,
  retirementFund?: number | null,
  retirementFundGoal?: number | null,
  savingsBalance?: number | null,
  savingsGoal?: number | null,
  userId: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  role?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  email?: string | null,
  firstName?: string | null,
  id?: string | null,
  lastName?: string | null,
  profileOwner: string,
  role?: string | null,
};

export type DeleteExpenseInput = {
  userId: string,
};

export type DeleteExpenseCategoryInput = {
  id: string,
};

export type DeletePreferenceInput = {
  userId: string,
};

export type DeleteUserInput = {
  profileOwner: string,
};

export type UpdateExpenseInput = {
  amount?: number | null,
  categoryId?: string | null,
  date?: string | null,
  id?: string | null,
  name?: string | null,
  notes?: string | null,
  paid?: boolean | null,
  paymentDate?: string | null,
  paymentMethod?: string | null,
  recurring?: boolean | null,
  recurringEndDate?: string | null,
  recurringFrequency?: ExpenseRecurringFrequency | null,
  userId: string,
};

export type UpdateExpenseCategoryInput = {
  id: string,
  name?: ExpenseCategoryName | null,
};

export type UpdatePreferenceInput = {
  currency?: PreferenceCurrency | null,
  debt?: number | null,
  debtGoal?: number | null,
  emergencyFund?: number | null,
  emergencyFundGoal?: number | null,
  hasDebt?: boolean | null,
  hasEmergencyFund?: boolean | null,
  hasRetirementFund?: boolean | null,
  id?: string | null,
  lastUpdated?: string | null,
  monthlyExpense?: number | null,
  monthlyIncome?: number | null,
  retirementFund?: number | null,
  retirementFundGoal?: number | null,
  savingsBalance?: number | null,
  savingsGoal?: number | null,
  userId: string,
};

export type UpdateUserInput = {
  email?: string | null,
  firstName?: string | null,
  id?: string | null,
  lastName?: string | null,
  profileOwner: string,
  role?: string | null,
};

export type ModelSubscriptionExpenseFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionExpenseFilterInput | null > | null,
  categoryId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionExpenseFilterInput | null > | null,
  owner?: ModelStringInput | null,
  paid?: ModelSubscriptionBooleanInput | null,
  paymentDate?: ModelSubscriptionStringInput | null,
  paymentMethod?: ModelSubscriptionStringInput | null,
  recurring?: ModelSubscriptionBooleanInput | null,
  recurringEndDate?: ModelSubscriptionStringInput | null,
  recurringFrequency?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionExpenseCategoryFilterInput = {
  and?: Array< ModelSubscriptionExpenseCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionExpenseCategoryFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPreferenceFilterInput = {
  and?: Array< ModelSubscriptionPreferenceFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  debt?: ModelSubscriptionFloatInput | null,
  debtGoal?: ModelSubscriptionFloatInput | null,
  emergencyFund?: ModelSubscriptionFloatInput | null,
  emergencyFundGoal?: ModelSubscriptionFloatInput | null,
  hasDebt?: ModelSubscriptionBooleanInput | null,
  hasEmergencyFund?: ModelSubscriptionBooleanInput | null,
  hasRetirementFund?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastUpdated?: ModelSubscriptionStringInput | null,
  monthlyExpense?: ModelSubscriptionFloatInput | null,
  monthlyIncome?: ModelSubscriptionFloatInput | null,
  or?: Array< ModelSubscriptionPreferenceFilterInput | null > | null,
  owner?: ModelStringInput | null,
  retirementFund?: ModelSubscriptionFloatInput | null,
  retirementFundGoal?: ModelSubscriptionFloatInput | null,
  savingsBalance?: ModelSubscriptionFloatInput | null,
  savingsGoal?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profileOwner?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetExpenseQueryVariables = {
  userId: string,
};

export type GetExpenseQuery = {
  getExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetExpenseCategoryQueryVariables = {
  id: string,
};

export type GetExpenseCategoryQuery = {
  getExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type GetPreferenceQueryVariables = {
  userId: string,
};

export type GetPreferenceQuery = {
  getPreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetUserQueryVariables = {
  profileOwner: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};

export type ListExpenseCategoriesQueryVariables = {
  filter?: ModelExpenseCategoryFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListExpenseCategoriesQuery = {
  listExpenseCategories?:  {
    __typename: "ModelExpenseCategoryConnection",
    items:  Array< {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListExpensesQueryVariables = {
  filter?: ModelExpenseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: string | null,
};

export type ListExpensesQuery = {
  listExpenses?:  {
    __typename: "ModelExpenseConnection",
    items:  Array< {
      __typename: "Expense",
      amount?: number | null,
      categoryId?: string | null,
      createdAt: string,
      date?: string | null,
      id?: string | null,
      name?: string | null,
      notes?: string | null,
      owner?: string | null,
      paid?: boolean | null,
      paymentDate?: string | null,
      paymentMethod?: string | null,
      recurring?: boolean | null,
      recurringEndDate?: string | null,
      recurringFrequency?: ExpenseRecurringFrequency | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPreferencesQueryVariables = {
  filter?: ModelPreferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: string | null,
};

export type ListPreferencesQuery = {
  listPreferences?:  {
    __typename: "ModelPreferenceConnection",
    items:  Array< {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  profileOwner?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateExpenseMutationVariables = {
  condition?: ModelExpenseConditionInput | null,
  input: CreateExpenseInput,
};

export type CreateExpenseMutation = {
  createExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateExpenseCategoryMutationVariables = {
  condition?: ModelExpenseCategoryConditionInput | null,
  input: CreateExpenseCategoryInput,
};

export type CreateExpenseCategoryMutation = {
  createExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type CreatePreferenceMutationVariables = {
  condition?: ModelPreferenceConditionInput | null,
  input: CreatePreferenceInput,
};

export type CreatePreferenceMutation = {
  createPreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteExpenseMutationVariables = {
  condition?: ModelExpenseConditionInput | null,
  input: DeleteExpenseInput,
};

export type DeleteExpenseMutation = {
  deleteExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteExpenseCategoryMutationVariables = {
  condition?: ModelExpenseCategoryConditionInput | null,
  input: DeleteExpenseCategoryInput,
};

export type DeleteExpenseCategoryMutation = {
  deleteExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type DeletePreferenceMutationVariables = {
  condition?: ModelPreferenceConditionInput | null,
  input: DeletePreferenceInput,
};

export type DeletePreferenceMutation = {
  deletePreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateExpenseMutationVariables = {
  condition?: ModelExpenseConditionInput | null,
  input: UpdateExpenseInput,
};

export type UpdateExpenseMutation = {
  updateExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateExpenseCategoryMutationVariables = {
  condition?: ModelExpenseCategoryConditionInput | null,
  input: UpdateExpenseCategoryInput,
};

export type UpdateExpenseCategoryMutation = {
  updateExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type UpdatePreferenceMutationVariables = {
  condition?: ModelPreferenceConditionInput | null,
  input: UpdatePreferenceInput,
};

export type UpdatePreferenceMutation = {
  updatePreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null,
  owner?: string | null,
};

export type OnCreateExpenseSubscription = {
  onCreateExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateExpenseCategorySubscriptionVariables = {
  filter?: ModelSubscriptionExpenseCategoryFilterInput | null,
};

export type OnCreateExpenseCategorySubscription = {
  onCreateExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionPreferenceFilterInput | null,
  owner?: string | null,
};

export type OnCreatePreferenceSubscription = {
  onCreatePreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExpenseSubscription = {
  onDeleteExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteExpenseCategorySubscriptionVariables = {
  filter?: ModelSubscriptionExpenseCategoryFilterInput | null,
};

export type OnDeleteExpenseCategorySubscription = {
  onDeleteExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionPreferenceFilterInput | null,
  owner?: string | null,
};

export type OnDeletePreferenceSubscription = {
  onDeletePreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExpenseSubscription = {
  onUpdateExpense?:  {
    __typename: "Expense",
    amount?: number | null,
    category?:  {
      __typename: "ExpenseCategory",
      createdAt: string,
      id: string,
      name?: ExpenseCategoryName | null,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    createdAt: string,
    date?: string | null,
    id?: string | null,
    name?: string | null,
    notes?: string | null,
    owner?: string | null,
    paid?: boolean | null,
    paymentDate?: string | null,
    paymentMethod?: string | null,
    recurring?: boolean | null,
    recurringEndDate?: string | null,
    recurringFrequency?: ExpenseRecurringFrequency | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateExpenseCategorySubscriptionVariables = {
  filter?: ModelSubscriptionExpenseCategoryFilterInput | null,
};

export type OnUpdateExpenseCategorySubscription = {
  onUpdateExpenseCategory?:  {
    __typename: "ExpenseCategory",
    createdAt: string,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    name?: ExpenseCategoryName | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionPreferenceFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePreferenceSubscription = {
  onUpdatePreference?:  {
    __typename: "Preference",
    createdAt: string,
    currency?: PreferenceCurrency | null,
    debt?: number | null,
    debtGoal?: number | null,
    emergencyFund?: number | null,
    emergencyFundGoal?: number | null,
    hasDebt?: boolean | null,
    hasEmergencyFund?: boolean | null,
    hasRetirementFund?: boolean | null,
    id?: string | null,
    lastUpdated?: string | null,
    monthlyExpense?: number | null,
    monthlyIncome?: number | null,
    owner?: string | null,
    retirementFund?: number | null,
    retirementFundGoal?: number | null,
    savingsBalance?: number | null,
    savingsGoal?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      firstName?: string | null,
      id?: string | null,
      lastName?: string | null,
      owner?: string | null,
      profileOwner: string,
      role?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    expenses?:  {
      __typename: "ModelExpenseConnection",
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    id?: string | null,
    lastName?: string | null,
    owner?: string | null,
    preference?:  {
      __typename: "Preference",
      createdAt: string,
      currency?: PreferenceCurrency | null,
      debt?: number | null,
      debtGoal?: number | null,
      emergencyFund?: number | null,
      emergencyFundGoal?: number | null,
      hasDebt?: boolean | null,
      hasEmergencyFund?: boolean | null,
      hasRetirementFund?: boolean | null,
      id?: string | null,
      lastUpdated?: string | null,
      monthlyExpense?: number | null,
      monthlyIncome?: number | null,
      owner?: string | null,
      retirementFund?: number | null,
      retirementFundGoal?: number | null,
      savingsBalance?: number | null,
      savingsGoal?: number | null,
      updatedAt: string,
      userId: string,
    } | null,
    profileOwner: string,
    role?: string | null,
    updatedAt: string,
  } | null,
};
