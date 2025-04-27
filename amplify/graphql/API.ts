/* tslint:disable */

//  This file was automatically generated and should not be edited.

export type BankAccount = {
  __typename: "BankAccount";
  balance?: number | null;
  createdAt: string;
  history?: ModelHistoryBankAccountConnection | null;
  id: string;
  name?: string | null;
  owner?: string | null;
  type?: BankAccountType | null;
  updatedAt: string;
  user?: User | null;
  userId: string;
};

export type ModelHistoryBankAccountConnection = {
  __typename: "ModelHistoryBankAccountConnection";
  items: Array<HistoryBankAccount | null>;
  nextToken?: string | null;
};

export type HistoryBankAccount = {
  __typename: "HistoryBankAccount";
  balance?: number | null;
  bankAccount?: BankAccount | null;
  bankAccountId: string;
  createdAt: string;
  date?: string | null;
  id: string;
  name?: string | null;
  owner?: string | null;
  type?: HistoryBankAccountType | null;
  updatedAt: string;
  user?: User | null;
  userId: string;
};

export enum HistoryBankAccountType {
  Cash = "Cash",
  Checking = "Checking",
  Credit_Card = "Credit_Card",
  Line_of_Credit = "Line_of_Credit",
  Savings = "Savings",
}

export type User = {
  __typename: "User";
  bankAccounts?: ModelBankAccountConnection | null;
  createdAt: string;
  email?: string | null;
  expenseTypes?: ModelExpenseTypeConnection | null;
  expenses?: ModelExpenseConnection | null;
  firstName?: string | null;
  historyBankAccount?: ModelHistoryBankAccountConnection | null;
  historyExpense?: ModelHistoryExpenseConnection | null;
  id?: string | null;
  lastName?: string | null;
  owner?: string | null;
  predictedExpenses?: ModelPredictedExpenseConnection | null;
  preference?: Preference | null;
  profileOwner: string;
  role?: string | null;
  updatedAt: string;
};

export type ModelBankAccountConnection = {
  __typename: "ModelBankAccountConnection";
  items: Array<BankAccount | null>;
  nextToken?: string | null;
};

export type ModelExpenseTypeConnection = {
  __typename: "ModelExpenseTypeConnection";
  items: Array<ExpenseType | null>;
  nextToken?: string | null;
};

export type ExpenseType = {
  __typename: "ExpenseType";
  createdAt: string;
  expenseHistory?: ModelHistoryExpenseConnection | null;
  expenses?: ModelExpenseConnection | null;
  id: string;
  name: string;
  owner?: string | null;
  predictedExpenses?: ModelPredictedExpenseConnection | null;
  updatedAt: string;
  user?: User | null;
  userId: string;
};

export type ModelHistoryExpenseConnection = {
  __typename: "ModelHistoryExpenseConnection";
  items: Array<HistoryExpense | null>;
  nextToken?: string | null;
};

export type HistoryExpense = {
  __typename: "HistoryExpense";
  assigned: number;
  category?: HistoryExpenseCategory | null;
  createdAt: string;
  date: string;
  expense?: Expense | null;
  expenseId: string;
  expenseType?: ExpenseType | null;
  expenseTypeId: string;
  id: string;
  updatedAt: string;
  user?: User | null;
  userId: string;
};

export enum HistoryExpenseCategory {
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

export type Expense = {
  __typename: "Expense";
  assigned?: number | null;
  category?: ExpenseCategory | null;
  createdAt: string;
  date?: string | null;
  dueDate?: string | null;
  expenseType?: ExpenseType | null;
  expenseTypeId?: string | null;
  hasTarget?: boolean | null;
  history?: ModelHistoryExpenseConnection | null;
  id: string;
  name?: string | null;
  nextMonthIWantToSetAside?: number | null;
  notes?: string | null;
  owner?: string | null;
  recurring?: boolean | null;
  recurringFrequency?: ExpenseRecurringFrequency | null;
  targetAmount?: number | null;
  updatedAt: string;
  user?: User | null;
  userId: string;
};

export enum ExpenseCategory {
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

export type ModelExpenseConnection = {
  __typename: "ModelExpenseConnection";
  items: Array<Expense | null>;
  nextToken?: string | null;
};

export type ModelPredictedExpenseConnection = {
  __typename: "ModelPredictedExpenseConnection";
  items: Array<PredictedExpense | null>;
  nextToken?: string | null;
};

export type PredictedExpense = {
  __typename: "PredictedExpense";
  category?: PredictedExpenseCategory | null;
  createdAt: string;
  date: string;
  expenseType?: ExpenseType | null;
  expenseTypeId?: string | null;
  id: string;
  owner?: string | null;
  predictedAmount?: number | null;
  updatedAt: string;
  user?: User | null;
};

export enum PredictedExpenseCategory {
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

export type Preference = {
  __typename: "Preference";
  createdAt: string;
  currency?: PreferenceCurrency | null;
  debt?: number | null;
  debtGoal?: number | null;
  deptType?: PreferenceDeptType | null;
  emergencyFund?: number | null;
  emergencyFundGoal?: number | null;
  financialStatus?: PreferenceFinancialStatus | null;
  hasDebt?: boolean | null;
  hasEmergencyFund?: boolean | null;
  hasRetirementFund?: boolean | null;
  homeOwnership?: PreferenceHomeOwnership | null;
  id?: string | null;
  lastUpdated?: string | null;
  monthlyExpense?: number | null;
  monthlyIncome?: number | null;
  mostSpend?: PreferenceMostSpend | null;
  owner?: string | null;
  retirementFund?: number | null;
  retirementFundGoal?: number | null;
  savingsBalance?: number | null;
  savingsGoal?: number | null;
  subscriptions?: Array<string | null> | null;
  transportation?: PreferenceTransportation | null;
  updatedAt: string;
  user?: User | null;
  userId: string;
};

export enum PreferenceCurrency {
  EUR = "EUR",
  USD = "USD",
}

export enum PreferenceDeptType {
  AutoLoans = "AutoLoans",
  CreditCard = "CreditCard",
  MedicalDept = "MedicalDept",
  Other = "Other",
  PersonalLoans = "PersonalLoans",
  StudentLoan = "StudentLoan",
}

export enum PreferenceFinancialStatus {
  Average = "Average",
  Good = "Good",
  Poor = "Poor",
}

export enum PreferenceHomeOwnership {
  Other = "Other",
  Own = "Own",
  Rent = "Rent",
}

export enum PreferenceMostSpend {
  Entertainment = "Entertainment",
  Food = "Food",
  Healthcare = "Healthcare",
  Housing = "Housing",
  Insurance = "Insurance",
  Other = "Other",
  Transportation = "Transportation",
}

export enum PreferenceTransportation {
  Other = "Other",
  Private = "Private",
  Public = "Public",
}

export enum BankAccountType {
  Cash = "Cash",
  Checking = "Checking",
  Credit_Card = "Credit_Card",
  Line_of_Credit = "Line_of_Credit",
  Savings = "Savings",
}

export type ConversationChat = {
  __typename: "ConversationChat";
  createdAt: string;
  id: string;
  messages?: ModelConversationMessageChatConnection | null;
  metadata?: string | null;
  name?: string | null;
  owner?: string | null;
  updatedAt: string;
};

export type ModelConversationMessageChatConnection = {
  __typename: "ModelConversationMessageChatConnection";
  items: Array<ConversationMessageChat | null>;
  nextToken?: string | null;
};

export type ConversationMessageChat = {
  __typename: "ConversationMessageChat";
  aiContext?: string | null;
  associatedUserMessageId?: string | null;
  content?: Array<AmplifyAIContentBlock | null> | null;
  conversation?: ConversationChat | null;
  conversationId: string;
  createdAt: string;
  id: string;
  owner?: string | null;
  role?: AmplifyAIConversationParticipantRole | null;
  toolConfiguration?: AmplifyAIToolConfiguration | null;
  updatedAt: string;
};

export type AmplifyAIConversationMessage = {
  __typename: "AmplifyAIConversationMessage";
  aiContext?: string | null;
  associatedUserMessageId?: string | null;
  content?: Array<AmplifyAIContentBlock | null> | null;
  conversationId: string;
  createdAt?: string | null;
  id: string;
  owner?: string | null;
  role?: AmplifyAIConversationParticipantRole | null;
  toolConfiguration?: AmplifyAIToolConfiguration | null;
  updatedAt?: string | null;
};

export type AmplifyAIContentBlock = {
  __typename: "AmplifyAIContentBlock";
  document?: AmplifyAIDocumentBlock | null;
  image?: AmplifyAIImageBlock | null;
  text?: string | null;
  toolResult?: AmplifyAIToolResultBlock | null;
  toolUse?: AmplifyAIToolUseBlock | null;
};

export type AmplifyAIDocumentBlock = {
  __typename: "AmplifyAIDocumentBlock";
  format: string;
  name: string;
  source: AmplifyAIDocumentBlockSource;
};

export type AmplifyAIDocumentBlockSource = {
  __typename: "AmplifyAIDocumentBlockSource";
  bytes?: string | null;
};

export type AmplifyAIImageBlock = {
  __typename: "AmplifyAIImageBlock";
  format: string;
  source: AmplifyAIImageBlockSource;
};

export type AmplifyAIImageBlockSource = {
  __typename: "AmplifyAIImageBlockSource";
  bytes?: string | null;
};

export type AmplifyAIToolResultBlock = {
  __typename: "AmplifyAIToolResultBlock";
  content: Array<AmplifyAIToolResultContentBlock>;
  status?: string | null;
  toolUseId: string;
};

export type AmplifyAIToolResultContentBlock = {
  __typename: "AmplifyAIToolResultContentBlock";
  document?: AmplifyAIDocumentBlock | null;
  image?: AmplifyAIImageBlock | null;
  json?: string | null;
  text?: string | null;
};

export type AmplifyAIToolUseBlock = {
  __typename: "AmplifyAIToolUseBlock";
  input: string;
  name: string;
  toolUseId: string;
};

export enum AmplifyAIConversationParticipantRole {
  assistant = "assistant",
  user = "user",
}

export type AmplifyAIToolConfiguration = {
  __typename: "AmplifyAIToolConfiguration";
  tools?: Array<AmplifyAITool | null> | null;
};

export type AmplifyAITool = {
  __typename: "AmplifyAITool";
  toolSpec?: AmplifyAIToolSpecification | null;
};

export type AmplifyAIToolSpecification = {
  __typename: "AmplifyAIToolSpecification";
  description?: string | null;
  inputSchema: AmplifyAIToolInputSchema;
  name: string;
};

export type AmplifyAIToolInputSchema = {
  __typename: "AmplifyAIToolInputSchema";
  json?: string | null;
};

export type ModelBankAccountFilterInput = {
  and?: Array<ModelBankAccountFilterInput | null> | null;
  balance?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  not?: ModelBankAccountFilterInput | null;
  or?: Array<ModelBankAccountFilterInput | null> | null;
  owner?: ModelStringInput | null;
  type?: ModelBankAccountTypeInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type ModelFloatInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
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

export type ModelStringInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelIDInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelBankAccountTypeInput = {
  eq?: BankAccountType | null;
  ne?: BankAccountType | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelConversationChatFilterInput = {
  and?: Array<ModelConversationChatFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  metadata?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelConversationChatFilterInput | null;
  or?: Array<ModelConversationChatFilterInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelConversationChatConnection = {
  __typename: "ModelConversationChatConnection";
  items: Array<ConversationChat | null>;
  nextToken?: string | null;
};

export type ModelConversationMessageChatFilterInput = {
  aiContext?: ModelStringInput | null;
  and?: Array<ModelConversationMessageChatFilterInput | null> | null;
  associatedUserMessageId?: ModelIDInput | null;
  conversationId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  not?: ModelConversationMessageChatFilterInput | null;
  or?: Array<ModelConversationMessageChatFilterInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelAmplifyAIConversationParticipantRoleInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelAmplifyAIConversationParticipantRoleInput = {
  eq?: AmplifyAIConversationParticipantRole | null;
  ne?: AmplifyAIConversationParticipantRole | null;
};

export type ModelExpenseFilterInput = {
  and?: Array<ModelExpenseFilterInput | null> | null;
  assigned?: ModelFloatInput | null;
  category?: ModelExpenseCategoryInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  expenseTypeId?: ModelStringInput | null;
  hasTarget?: ModelBooleanInput | null;
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  nextMonthIWantToSetAside?: ModelFloatInput | null;
  not?: ModelExpenseFilterInput | null;
  notes?: ModelStringInput | null;
  or?: Array<ModelExpenseFilterInput | null> | null;
  owner?: ModelStringInput | null;
  recurring?: ModelBooleanInput | null;
  recurringFrequency?: ModelExpenseRecurringFrequencyInput | null;
  targetAmount?: ModelFloatInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type ModelExpenseCategoryInput = {
  eq?: ExpenseCategory | null;
  ne?: ExpenseCategory | null;
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  eq?: boolean | null;
  ne?: boolean | null;
};

export type ModelExpenseRecurringFrequencyInput = {
  eq?: ExpenseRecurringFrequency | null;
  ne?: ExpenseRecurringFrequency | null;
};

export type ModelExpenseTypeFilterInput = {
  and?: Array<ModelExpenseTypeFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  not?: ModelExpenseTypeFilterInput | null;
  or?: Array<ModelExpenseTypeFilterInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type ModelHistoryBankAccountFilterInput = {
  and?: Array<ModelHistoryBankAccountFilterInput | null> | null;
  balance?: ModelFloatInput | null;
  bankAccountId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  not?: ModelHistoryBankAccountFilterInput | null;
  or?: Array<ModelHistoryBankAccountFilterInput | null> | null;
  owner?: ModelStringInput | null;
  type?: ModelHistoryBankAccountTypeInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type ModelHistoryBankAccountTypeInput = {
  eq?: HistoryBankAccountType | null;
  ne?: HistoryBankAccountType | null;
};

export type ModelHistoryExpenseFilterInput = {
  and?: Array<ModelHistoryExpenseFilterInput | null> | null;
  assigned?: ModelFloatInput | null;
  category?: ModelHistoryExpenseCategoryInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  expenseId?: ModelStringInput | null;
  expenseTypeId?: ModelStringInput | null;
  id?: ModelIDInput | null;
  not?: ModelHistoryExpenseFilterInput | null;
  or?: Array<ModelHistoryExpenseFilterInput | null> | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type ModelHistoryExpenseCategoryInput = {
  eq?: HistoryExpenseCategory | null;
  ne?: HistoryExpenseCategory | null;
};

export type ModelPredictedExpenseFilterInput = {
  and?: Array<ModelPredictedExpenseFilterInput | null> | null;
  category?: ModelPredictedExpenseCategoryInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  expenseTypeId?: ModelStringInput | null;
  id?: ModelIDInput | null;
  not?: ModelPredictedExpenseFilterInput | null;
  or?: Array<ModelPredictedExpenseFilterInput | null> | null;
  owner?: ModelStringInput | null;
  predictedAmount?: ModelFloatInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelPredictedExpenseCategoryInput = {
  eq?: PredictedExpenseCategory | null;
  ne?: PredictedExpenseCategory | null;
};

export type ModelPreferenceFilterInput = {
  and?: Array<ModelPreferenceFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  currency?: ModelPreferenceCurrencyInput | null;
  debt?: ModelFloatInput | null;
  debtGoal?: ModelFloatInput | null;
  deptType?: ModelPreferenceDeptTypeInput | null;
  emergencyFund?: ModelFloatInput | null;
  emergencyFundGoal?: ModelFloatInput | null;
  financialStatus?: ModelPreferenceFinancialStatusInput | null;
  hasDebt?: ModelBooleanInput | null;
  hasEmergencyFund?: ModelBooleanInput | null;
  hasRetirementFund?: ModelBooleanInput | null;
  homeOwnership?: ModelPreferenceHomeOwnershipInput | null;
  id?: ModelIDInput | null;
  lastUpdated?: ModelStringInput | null;
  monthlyExpense?: ModelFloatInput | null;
  monthlyIncome?: ModelFloatInput | null;
  mostSpend?: ModelPreferenceMostSpendInput | null;
  not?: ModelPreferenceFilterInput | null;
  or?: Array<ModelPreferenceFilterInput | null> | null;
  owner?: ModelStringInput | null;
  retirementFund?: ModelFloatInput | null;
  retirementFundGoal?: ModelFloatInput | null;
  savingsBalance?: ModelFloatInput | null;
  savingsGoal?: ModelFloatInput | null;
  subscriptions?: ModelStringInput | null;
  transportation?: ModelPreferenceTransportationInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type ModelPreferenceCurrencyInput = {
  eq?: PreferenceCurrency | null;
  ne?: PreferenceCurrency | null;
};

export type ModelPreferenceDeptTypeInput = {
  eq?: PreferenceDeptType | null;
  ne?: PreferenceDeptType | null;
};

export type ModelPreferenceFinancialStatusInput = {
  eq?: PreferenceFinancialStatus | null;
  ne?: PreferenceFinancialStatus | null;
};

export type ModelPreferenceHomeOwnershipInput = {
  eq?: PreferenceHomeOwnership | null;
  ne?: PreferenceHomeOwnership | null;
};

export type ModelPreferenceMostSpendInput = {
  eq?: PreferenceMostSpend | null;
  ne?: PreferenceMostSpend | null;
};

export type ModelPreferenceTransportationInput = {
  eq?: PreferenceTransportation | null;
  ne?: PreferenceTransportation | null;
};

export type ModelPreferenceConnection = {
  __typename: "ModelPreferenceConnection";
  items: Array<Preference | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  and?: Array<ModelUserFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  email?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  id?: ModelIDInput | null;
  lastName?: ModelStringInput | null;
  not?: ModelUserFilterInput | null;
  or?: Array<ModelUserFilterInput | null> | null;
  owner?: ModelStringInput | null;
  profileOwner?: ModelStringInput | null;
  role?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type AmplifyAIContentBlockInput = {
  document?: AmplifyAIDocumentBlockInput | null;
  image?: AmplifyAIImageBlockInput | null;
  text?: string | null;
  toolResult?: AmplifyAIToolResultBlockInput | null;
  toolUse?: AmplifyAIToolUseBlockInput | null;
};

export type AmplifyAIDocumentBlockInput = {
  format: string;
  name: string;
  source: AmplifyAIDocumentBlockSourceInput;
};

export type AmplifyAIDocumentBlockSourceInput = {
  bytes?: string | null;
};

export type AmplifyAIImageBlockInput = {
  format: string;
  source: AmplifyAIImageBlockSourceInput;
};

export type AmplifyAIImageBlockSourceInput = {
  bytes?: string | null;
};

export type AmplifyAIToolResultBlockInput = {
  content: Array<AmplifyAIToolResultContentBlockInput>;
  status?: string | null;
  toolUseId: string;
};

export type AmplifyAIToolResultContentBlockInput = {
  document?: AmplifyAIDocumentBlockInput | null;
  image?: AmplifyAIImageBlockInput | null;
  json?: string | null;
  text?: string | null;
};

export type AmplifyAIToolUseBlockInput = {
  input: string;
  name: string;
  toolUseId: string;
};

export type AmplifyAIToolConfigurationInput = {
  tools?: Array<AmplifyAIToolInput | null> | null;
};

export type AmplifyAIToolInput = {
  toolSpec?: AmplifyAIToolSpecificationInput | null;
};

export type AmplifyAIToolSpecificationInput = {
  description?: string | null;
  inputSchema: AmplifyAIToolInputSchemaInput;
  name: string;
};

export type AmplifyAIToolInputSchemaInput = {
  json?: string | null;
};

export type CreateConversationMessageChatAssistantInput = {
  associatedUserMessageId?: string | null;
  content?: Array<AmplifyAIContentBlockInput | null> | null;
  conversationId?: string | null;
};

export type CreateConversationMessageChatAssistantStreamingInput = {
  accumulatedTurnContent?: Array<AmplifyAIContentBlockInput | null> | null;
  associatedUserMessageId: string;
  contentBlockDeltaIndex?: number | null;
  contentBlockDoneAtIndex?: number | null;
  contentBlockIndex?: number | null;
  contentBlockText?: string | null;
  contentBlockToolUse?: string | null;
  conversationId: string;
  errors?: Array<AmplifyAIConversationTurnErrorInput | null> | null;
  p?: string | null;
  stopReason?: string | null;
};

export type AmplifyAIConversationTurnErrorInput = {
  errorType: string;
  message: string;
};

export type AmplifyAIConversationMessageStreamPart = {
  __typename: "AmplifyAIConversationMessageStreamPart";
  associatedUserMessageId: string;
  contentBlockDeltaIndex?: number | null;
  contentBlockDoneAtIndex?: number | null;
  contentBlockIndex?: number | null;
  contentBlockText?: string | null;
  contentBlockToolUse?: AmplifyAIToolUseBlock | null;
  conversationId: string;
  errors?: Array<AmplifyAIConversationTurnError | null> | null;
  id: string;
  owner?: string | null;
  p?: string | null;
  stopReason?: string | null;
};

export type AmplifyAIConversationTurnError = {
  __typename: "AmplifyAIConversationTurnError";
  errorType: string;
  message: string;
};

export type ModelBankAccountConditionInput = {
  and?: Array<ModelBankAccountConditionInput | null> | null;
  balance?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelBankAccountConditionInput | null;
  or?: Array<ModelBankAccountConditionInput | null> | null;
  owner?: ModelStringInput | null;
  type?: ModelBankAccountTypeInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type CreateBankAccountInput = {
  balance?: number | null;
  id?: string | null;
  name?: string | null;
  type?: BankAccountType | null;
  userId: string;
};

export type ModelConversationChatConditionInput = {
  and?: Array<ModelConversationChatConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  metadata?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelConversationChatConditionInput | null;
  or?: Array<ModelConversationChatConditionInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateConversationChatInput = {
  id?: string | null;
  metadata?: string | null;
  name?: string | null;
};

export type ModelConversationMessageChatConditionInput = {
  aiContext?: ModelStringInput | null;
  and?: Array<ModelConversationMessageChatConditionInput | null> | null;
  associatedUserMessageId?: ModelIDInput | null;
  conversationId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  not?: ModelConversationMessageChatConditionInput | null;
  or?: Array<ModelConversationMessageChatConditionInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelAmplifyAIConversationParticipantRoleInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateConversationMessageChatInput = {
  aiContext?: string | null;
  associatedUserMessageId?: string | null;
  content?: Array<AmplifyAIContentBlockInput | null> | null;
  conversationId: string;
  id?: string | null;
  role?: AmplifyAIConversationParticipantRole | null;
  toolConfiguration?: AmplifyAIToolConfigurationInput | null;
};

export type ModelExpenseConditionInput = {
  and?: Array<ModelExpenseConditionInput | null> | null;
  assigned?: ModelFloatInput | null;
  category?: ModelExpenseCategoryInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  expenseTypeId?: ModelStringInput | null;
  hasTarget?: ModelBooleanInput | null;
  name?: ModelStringInput | null;
  nextMonthIWantToSetAside?: ModelFloatInput | null;
  not?: ModelExpenseConditionInput | null;
  notes?: ModelStringInput | null;
  or?: Array<ModelExpenseConditionInput | null> | null;
  owner?: ModelStringInput | null;
  recurring?: ModelBooleanInput | null;
  recurringFrequency?: ModelExpenseRecurringFrequencyInput | null;
  targetAmount?: ModelFloatInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type CreateExpenseInput = {
  assigned?: number | null;
  category?: ExpenseCategory | null;
  date?: string | null;
  dueDate?: string | null;
  expenseTypeId?: string | null;
  hasTarget?: boolean | null;
  id?: string | null;
  name?: string | null;
  nextMonthIWantToSetAside?: number | null;
  notes?: string | null;
  recurring?: boolean | null;
  recurringFrequency?: ExpenseRecurringFrequency | null;
  targetAmount?: number | null;
  userId: string;
};

export type ModelExpenseTypeConditionInput = {
  and?: Array<ModelExpenseTypeConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelExpenseTypeConditionInput | null;
  or?: Array<ModelExpenseTypeConditionInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type CreateExpenseTypeInput = {
  id?: string | null;
  name: string;
  userId: string;
};

export type ModelHistoryBankAccountConditionInput = {
  and?: Array<ModelHistoryBankAccountConditionInput | null> | null;
  balance?: ModelFloatInput | null;
  bankAccountId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelHistoryBankAccountConditionInput | null;
  or?: Array<ModelHistoryBankAccountConditionInput | null> | null;
  owner?: ModelStringInput | null;
  type?: ModelHistoryBankAccountTypeInput | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type CreateHistoryBankAccountInput = {
  balance?: number | null;
  bankAccountId: string;
  date?: string | null;
  id?: string | null;
  name?: string | null;
  type?: HistoryBankAccountType | null;
  userId: string;
};

export type ModelHistoryExpenseConditionInput = {
  and?: Array<ModelHistoryExpenseConditionInput | null> | null;
  assigned?: ModelFloatInput | null;
  category?: ModelHistoryExpenseCategoryInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  expenseId?: ModelStringInput | null;
  expenseTypeId?: ModelStringInput | null;
  not?: ModelHistoryExpenseConditionInput | null;
  or?: Array<ModelHistoryExpenseConditionInput | null> | null;
  updatedAt?: ModelStringInput | null;
  userId?: ModelStringInput | null;
};

export type CreateHistoryExpenseInput = {
  assigned: number;
  category?: HistoryExpenseCategory | null;
  date: string;
  expenseId: string;
  expenseTypeId: string;
  id?: string | null;
  userId: string;
};

export type ModelPredictedExpenseConditionInput = {
  and?: Array<ModelPredictedExpenseConditionInput | null> | null;
  category?: ModelPredictedExpenseCategoryInput | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  expenseTypeId?: ModelStringInput | null;
  not?: ModelPredictedExpenseConditionInput | null;
  or?: Array<ModelPredictedExpenseConditionInput | null> | null;
  owner?: ModelStringInput | null;
  predictedAmount?: ModelFloatInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreatePredictedExpenseInput = {
  category?: PredictedExpenseCategory | null;
  date: string;
  expenseTypeId?: string | null;
  id?: string | null;
  owner?: string | null;
  predictedAmount?: number | null;
};

export type ModelPreferenceConditionInput = {
  and?: Array<ModelPreferenceConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  currency?: ModelPreferenceCurrencyInput | null;
  debt?: ModelFloatInput | null;
  debtGoal?: ModelFloatInput | null;
  deptType?: ModelPreferenceDeptTypeInput | null;
  emergencyFund?: ModelFloatInput | null;
  emergencyFundGoal?: ModelFloatInput | null;
  financialStatus?: ModelPreferenceFinancialStatusInput | null;
  hasDebt?: ModelBooleanInput | null;
  hasEmergencyFund?: ModelBooleanInput | null;
  hasRetirementFund?: ModelBooleanInput | null;
  homeOwnership?: ModelPreferenceHomeOwnershipInput | null;
  lastUpdated?: ModelStringInput | null;
  monthlyExpense?: ModelFloatInput | null;
  monthlyIncome?: ModelFloatInput | null;
  mostSpend?: ModelPreferenceMostSpendInput | null;
  not?: ModelPreferenceConditionInput | null;
  or?: Array<ModelPreferenceConditionInput | null> | null;
  owner?: ModelStringInput | null;
  retirementFund?: ModelFloatInput | null;
  retirementFundGoal?: ModelFloatInput | null;
  savingsBalance?: ModelFloatInput | null;
  savingsGoal?: ModelFloatInput | null;
  subscriptions?: ModelStringInput | null;
  transportation?: ModelPreferenceTransportationInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreatePreferenceInput = {
  currency?: PreferenceCurrency | null;
  debt?: number | null;
  debtGoal?: number | null;
  deptType?: PreferenceDeptType | null;
  emergencyFund?: number | null;
  emergencyFundGoal?: number | null;
  financialStatus?: PreferenceFinancialStatus | null;
  hasDebt?: boolean | null;
  hasEmergencyFund?: boolean | null;
  hasRetirementFund?: boolean | null;
  homeOwnership?: PreferenceHomeOwnership | null;
  id?: string | null;
  lastUpdated?: string | null;
  monthlyExpense?: number | null;
  monthlyIncome?: number | null;
  mostSpend?: PreferenceMostSpend | null;
  retirementFund?: number | null;
  retirementFundGoal?: number | null;
  savingsBalance?: number | null;
  savingsGoal?: number | null;
  subscriptions?: Array<string | null> | null;
  transportation?: PreferenceTransportation | null;
  userId: string;
};

export type ModelUserConditionInput = {
  and?: Array<ModelUserConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  email?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  not?: ModelUserConditionInput | null;
  or?: Array<ModelUserConditionInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateUserInput = {
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  profileOwner: string;
  role?: string | null;
};

export type DeleteBankAccountInput = {
  id: string;
};

export type DeleteConversationChatInput = {
  id: string;
};

export type DeleteConversationMessageChatInput = {
  id: string;
};

export type DeleteExpenseInput = {
  id: string;
};

export type DeleteExpenseTypeInput = {
  id: string;
};

export type DeleteHistoryBankAccountInput = {
  id: string;
};

export type DeleteHistoryExpenseInput = {
  id: string;
};

export type DeletePredictedExpenseInput = {
  id: string;
};

export type DeletePreferenceInput = {
  userId: string;
};

export type DeleteUserInput = {
  profileOwner: string;
};

export type UpdateBankAccountInput = {
  balance?: number | null;
  id: string;
  name?: string | null;
  type?: BankAccountType | null;
  userId?: string | null;
};

export type UpdateConversationChatInput = {
  id: string;
  metadata?: string | null;
  name?: string | null;
};

export type UpdateExpenseInput = {
  assigned?: number | null;
  category?: ExpenseCategory | null;
  date?: string | null;
  dueDate?: string | null;
  expenseTypeId?: string | null;
  hasTarget?: boolean | null;
  id: string;
  name?: string | null;
  nextMonthIWantToSetAside?: number | null;
  notes?: string | null;
  recurring?: boolean | null;
  recurringFrequency?: ExpenseRecurringFrequency | null;
  targetAmount?: number | null;
  userId?: string | null;
};

export type UpdateExpenseTypeInput = {
  id: string;
  name?: string | null;
  userId?: string | null;
};

export type UpdateHistoryBankAccountInput = {
  balance?: number | null;
  bankAccountId?: string | null;
  date?: string | null;
  id: string;
  name?: string | null;
  type?: HistoryBankAccountType | null;
  userId?: string | null;
};

export type UpdateHistoryExpenseInput = {
  assigned?: number | null;
  category?: HistoryExpenseCategory | null;
  date?: string | null;
  expenseId?: string | null;
  expenseTypeId?: string | null;
  id: string;
  userId?: string | null;
};

export type UpdatePredictedExpenseInput = {
  category?: PredictedExpenseCategory | null;
  date?: string | null;
  expenseTypeId?: string | null;
  id: string;
  owner?: string | null;
  predictedAmount?: number | null;
};

export type UpdatePreferenceInput = {
  currency?: PreferenceCurrency | null;
  debt?: number | null;
  debtGoal?: number | null;
  deptType?: PreferenceDeptType | null;
  emergencyFund?: number | null;
  emergencyFundGoal?: number | null;
  financialStatus?: PreferenceFinancialStatus | null;
  hasDebt?: boolean | null;
  hasEmergencyFund?: boolean | null;
  hasRetirementFund?: boolean | null;
  homeOwnership?: PreferenceHomeOwnership | null;
  id?: string | null;
  lastUpdated?: string | null;
  monthlyExpense?: number | null;
  monthlyIncome?: number | null;
  mostSpend?: PreferenceMostSpend | null;
  retirementFund?: number | null;
  retirementFundGoal?: number | null;
  savingsBalance?: number | null;
  savingsGoal?: number | null;
  subscriptions?: Array<string | null> | null;
  transportation?: PreferenceTransportation | null;
  userId: string;
};

export type UpdateUserInput = {
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  profileOwner: string;
  role?: string | null;
};

export type ModelSubscriptionBankAccountFilterInput = {
  and?: Array<ModelSubscriptionBankAccountFilterInput | null> | null;
  balance?: ModelSubscriptionFloatInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionBankAccountFilterInput | null> | null;
  owner?: ModelStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionFloatInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  in?: Array<number | null> | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionConversationMessageChatFilterInput = {
  aiContext?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionConversationMessageChatFilterInput | null> | null;
  associatedUserMessageId?: ModelSubscriptionIDInput | null;
  conversationId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  or?: Array<ModelSubscriptionConversationMessageChatFilterInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionExpenseFilterInput = {
  and?: Array<ModelSubscriptionExpenseFilterInput | null> | null;
  assigned?: ModelSubscriptionFloatInput | null;
  category?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  dueDate?: ModelSubscriptionStringInput | null;
  expenseTypeId?: ModelSubscriptionStringInput | null;
  hasTarget?: ModelSubscriptionBooleanInput | null;
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  nextMonthIWantToSetAside?: ModelSubscriptionFloatInput | null;
  notes?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionExpenseFilterInput | null> | null;
  owner?: ModelStringInput | null;
  recurring?: ModelSubscriptionBooleanInput | null;
  recurringFrequency?: ModelSubscriptionStringInput | null;
  targetAmount?: ModelSubscriptionFloatInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type ModelSubscriptionExpenseTypeFilterInput = {
  and?: Array<ModelSubscriptionExpenseTypeFilterInput | null> | null;
  createdAt?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionExpenseTypeFilterInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionHistoryBankAccountFilterInput = {
  and?: Array<ModelSubscriptionHistoryBankAccountFilterInput | null> | null;
  balance?: ModelSubscriptionFloatInput | null;
  bankAccountId?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionHistoryBankAccountFilterInput | null> | null;
  owner?: ModelStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionHistoryExpenseFilterInput = {
  and?: Array<ModelSubscriptionHistoryExpenseFilterInput | null> | null;
  assigned?: ModelSubscriptionFloatInput | null;
  category?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  expenseId?: ModelSubscriptionStringInput | null;
  expenseTypeId?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  or?: Array<ModelSubscriptionHistoryExpenseFilterInput | null> | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionPredictedExpenseFilterInput = {
  and?: Array<ModelSubscriptionPredictedExpenseFilterInput | null> | null;
  category?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  expenseTypeId?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  or?: Array<ModelSubscriptionPredictedExpenseFilterInput | null> | null;
  owner?: ModelStringInput | null;
  predictedAmount?: ModelSubscriptionFloatInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionPreferenceFilterInput = {
  and?: Array<ModelSubscriptionPreferenceFilterInput | null> | null;
  createdAt?: ModelSubscriptionStringInput | null;
  currency?: ModelSubscriptionStringInput | null;
  debt?: ModelSubscriptionFloatInput | null;
  debtGoal?: ModelSubscriptionFloatInput | null;
  deptType?: ModelSubscriptionStringInput | null;
  emergencyFund?: ModelSubscriptionFloatInput | null;
  emergencyFundGoal?: ModelSubscriptionFloatInput | null;
  financialStatus?: ModelSubscriptionStringInput | null;
  hasDebt?: ModelSubscriptionBooleanInput | null;
  hasEmergencyFund?: ModelSubscriptionBooleanInput | null;
  hasRetirementFund?: ModelSubscriptionBooleanInput | null;
  homeOwnership?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  lastUpdated?: ModelSubscriptionStringInput | null;
  monthlyExpense?: ModelSubscriptionFloatInput | null;
  monthlyIncome?: ModelSubscriptionFloatInput | null;
  mostSpend?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionPreferenceFilterInput | null> | null;
  owner?: ModelStringInput | null;
  retirementFund?: ModelSubscriptionFloatInput | null;
  retirementFundGoal?: ModelSubscriptionFloatInput | null;
  savingsBalance?: ModelSubscriptionFloatInput | null;
  savingsGoal?: ModelSubscriptionFloatInput | null;
  subscriptions?: ModelSubscriptionStringInput | null;
  transportation?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  createdAt?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
  owner?: ModelStringInput | null;
  profileOwner?: ModelSubscriptionStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type GetBankAccountQueryVariables = {
  id: string;
};

export type GetBankAccountQuery = {
  getBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type GetConversationChatQueryVariables = {
  id: string;
};

export type GetConversationChatQuery = {
  getConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type GetConversationMessageChatQueryVariables = {
  id: string;
};

export type GetConversationMessageChatQuery = {
  getConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    associatedUserMessageId?: string | null;
    content?: Array<{
      __typename: "AmplifyAIContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: AmplifyAIConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "AmplifyAIToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type GetExpenseQueryVariables = {
  id: string;
};

export type GetExpenseQuery = {
  getExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type GetExpenseTypeQueryVariables = {
  id: string;
};

export type GetExpenseTypeQuery = {
  getExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type GetHistoryBankAccountQueryVariables = {
  id: string;
};

export type GetHistoryBankAccountQuery = {
  getHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type GetHistoryExpenseQueryVariables = {
  id: string;
};

export type GetHistoryExpenseQuery = {
  getHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type GetPredictedExpenseQueryVariables = {
  id: string;
};

export type GetPredictedExpenseQuery = {
  getPredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type GetPreferenceQueryVariables = {
  userId: string;
};

export type GetPreferenceQuery = {
  getPreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type GetUserQueryVariables = {
  profileOwner: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};

export type ListBankAccountByUserIdQueryVariables = {
  filter?: ModelBankAccountFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  userId: string;
};

export type ListBankAccountByUserIdQuery = {
  listBankAccountByUserId?: {
    __typename: "ModelBankAccountConnection";
    items: Array<{
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListBankAccountsQueryVariables = {
  filter?: ModelBankAccountFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListBankAccountsQuery = {
  listBankAccounts?: {
    __typename: "ModelBankAccountConnection";
    items: Array<{
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListConversationChatsQueryVariables = {
  filter?: ModelConversationChatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListConversationChatsQuery = {
  listConversationChats?: {
    __typename: "ModelConversationChatConnection";
    items: Array<{
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListConversationMessageChatsQueryVariables = {
  filter?: ModelConversationMessageChatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListConversationMessageChatsQuery = {
  listConversationMessageChats?: {
    __typename: "ModelConversationMessageChatConnection";
    items: Array<{
      __typename: "ConversationMessageChat";
      aiContext?: string | null;
      associatedUserMessageId?: string | null;
      conversationId: string;
      createdAt: string;
      id: string;
      owner?: string | null;
      role?: AmplifyAIConversationParticipantRole | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListExpenseByUserIdQueryVariables = {
  filter?: ModelExpenseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  userId: string;
};

export type ListExpenseByUserIdQuery = {
  listExpenseByUserId?: {
    __typename: "ModelExpenseConnection";
    items: Array<{
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListExpenseTypeByUserIdQueryVariables = {
  filter?: ModelExpenseTypeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  userId: string;
};

export type ListExpenseTypeByUserIdQuery = {
  listExpenseTypeByUserId?: {
    __typename: "ModelExpenseTypeConnection";
    items: Array<{
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListExpenseTypesQueryVariables = {
  filter?: ModelExpenseTypeFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListExpenseTypesQuery = {
  listExpenseTypes?: {
    __typename: "ModelExpenseTypeConnection";
    items: Array<{
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListExpensesQueryVariables = {
  filter?: ModelExpenseFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListExpensesQuery = {
  listExpenses?: {
    __typename: "ModelExpenseConnection";
    items: Array<{
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListHistoryBankAccountByUserIdQueryVariables = {
  filter?: ModelHistoryBankAccountFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  userId: string;
};

export type ListHistoryBankAccountByUserIdQuery = {
  listHistoryBankAccountByUserId?: {
    __typename: "ModelHistoryBankAccountConnection";
    items: Array<{
      __typename: "HistoryBankAccount";
      balance?: number | null;
      bankAccountId: string;
      createdAt: string;
      date?: string | null;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: HistoryBankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListHistoryBankAccountsQueryVariables = {
  filter?: ModelHistoryBankAccountFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListHistoryBankAccountsQuery = {
  listHistoryBankAccounts?: {
    __typename: "ModelHistoryBankAccountConnection";
    items: Array<{
      __typename: "HistoryBankAccount";
      balance?: number | null;
      bankAccountId: string;
      createdAt: string;
      date?: string | null;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: HistoryBankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListHistoryExpenseByUserIdQueryVariables = {
  filter?: ModelHistoryExpenseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  userId: string;
};

export type ListHistoryExpenseByUserIdQuery = {
  listHistoryExpenseByUserId?: {
    __typename: "ModelHistoryExpenseConnection";
    items: Array<{
      __typename: "HistoryExpense";
      assigned: number;
      category?: HistoryExpenseCategory | null;
      createdAt: string;
      date: string;
      expenseId: string;
      expenseTypeId: string;
      id: string;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListHistoryExpensesQueryVariables = {
  filter?: ModelHistoryExpenseFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListHistoryExpensesQuery = {
  listHistoryExpenses?: {
    __typename: "ModelHistoryExpenseConnection";
    items: Array<{
      __typename: "HistoryExpense";
      assigned: number;
      category?: HistoryExpenseCategory | null;
      createdAt: string;
      date: string;
      expenseId: string;
      expenseTypeId: string;
      id: string;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListPredictedExpenseByOwnerQueryVariables = {
  filter?: ModelPredictedExpenseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  owner: string;
  sortDirection?: ModelSortDirection | null;
};

export type ListPredictedExpenseByOwnerQuery = {
  listPredictedExpenseByOwner?: {
    __typename: "ModelPredictedExpenseConnection";
    items: Array<{
      __typename: "PredictedExpense";
      category?: PredictedExpenseCategory | null;
      createdAt: string;
      date: string;
      expenseTypeId?: string | null;
      id: string;
      owner?: string | null;
      predictedAmount?: number | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListPredictedExpensesQueryVariables = {
  filter?: ModelPredictedExpenseFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListPredictedExpensesQuery = {
  listPredictedExpenses?: {
    __typename: "ModelPredictedExpenseConnection";
    items: Array<{
      __typename: "PredictedExpense";
      category?: PredictedExpenseCategory | null;
      createdAt: string;
      date: string;
      expenseTypeId?: string | null;
      id: string;
      owner?: string | null;
      predictedAmount?: number | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListPreferencesQueryVariables = {
  filter?: ModelPreferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  userId?: string | null;
};

export type ListPreferencesQuery = {
  listPreferences?: {
    __typename: "ModelPreferenceConnection";
    items: Array<{
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  profileOwner?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ChatMutationVariables = {
  aiContext?: string | null;
  content?: Array<AmplifyAIContentBlockInput | null> | null;
  conversationId: string;
  toolConfiguration?: AmplifyAIToolConfigurationInput | null;
};

export type ChatMutation = {
  chat: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    associatedUserMessageId?: string | null;
    content?: Array<{
      __typename: "AmplifyAIContentBlock";
      text?: string | null;
    } | null> | null;
    conversationId: string;
    createdAt?: string | null;
    id: string;
    owner?: string | null;
    role?: AmplifyAIConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "AmplifyAIToolConfiguration";
    } | null;
    updatedAt?: string | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type CreateAssistantResponseChatMutationVariables = {
  input: CreateConversationMessageChatAssistantInput;
};

export type CreateAssistantResponseChatMutation = {
  createAssistantResponseChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    associatedUserMessageId?: string | null;
    content?: Array<{
      __typename: "AmplifyAIContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: AmplifyAIConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "AmplifyAIToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type CreateAssistantResponseStreamChatMutationVariables = {
  input: CreateConversationMessageChatAssistantStreamingInput;
};

export type CreateAssistantResponseStreamChatMutation = {
  createAssistantResponseStreamChat?: {
    __typename: "AmplifyAIConversationMessageStreamPart";
    associatedUserMessageId: string;
    contentBlockDeltaIndex?: number | null;
    contentBlockDoneAtIndex?: number | null;
    contentBlockIndex?: number | null;
    contentBlockText?: string | null;
    contentBlockToolUse?: {
      __typename: "AmplifyAIToolUseBlock";
      input: string;
      name: string;
      toolUseId: string;
    } | null;
    conversationId: string;
    errors?: Array<{
      __typename: "AmplifyAIConversationTurnError";
      errorType: string;
      message: string;
    } | null> | null;
    id: string;
    owner?: string | null;
    p?: string | null;
    stopReason?: string | null;
  } | null;
};

export type CreateBankAccountMutationVariables = {
  condition?: ModelBankAccountConditionInput | null;
  input: CreateBankAccountInput;
};

export type CreateBankAccountMutation = {
  createBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type CreateConversationChatMutationVariables = {
  condition?: ModelConversationChatConditionInput | null;
  input: CreateConversationChatInput;
};

export type CreateConversationChatMutation = {
  createConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateConversationMessageChatMutationVariables = {
  condition?: ModelConversationMessageChatConditionInput | null;
  input: CreateConversationMessageChatInput;
};

export type CreateConversationMessageChatMutation = {
  createConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    associatedUserMessageId?: string | null;
    content?: Array<{
      __typename: "AmplifyAIContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: AmplifyAIConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "AmplifyAIToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type CreateExpenseMutationVariables = {
  condition?: ModelExpenseConditionInput | null;
  input: CreateExpenseInput;
};

export type CreateExpenseMutation = {
  createExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type CreateExpenseTypeMutationVariables = {
  condition?: ModelExpenseTypeConditionInput | null;
  input: CreateExpenseTypeInput;
};

export type CreateExpenseTypeMutation = {
  createExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type CreateHistoryBankAccountMutationVariables = {
  condition?: ModelHistoryBankAccountConditionInput | null;
  input: CreateHistoryBankAccountInput;
};

export type CreateHistoryBankAccountMutation = {
  createHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type CreateHistoryExpenseMutationVariables = {
  condition?: ModelHistoryExpenseConditionInput | null;
  input: CreateHistoryExpenseInput;
};

export type CreateHistoryExpenseMutation = {
  createHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type CreatePredictedExpenseMutationVariables = {
  condition?: ModelPredictedExpenseConditionInput | null;
  input: CreatePredictedExpenseInput;
};

export type CreatePredictedExpenseMutation = {
  createPredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type CreatePreferenceMutationVariables = {
  condition?: ModelPreferenceConditionInput | null;
  input: CreatePreferenceInput;
};

export type CreatePreferenceMutation = {
  createPreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null;
  input: CreateUserInput;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteBankAccountMutationVariables = {
  condition?: ModelBankAccountConditionInput | null;
  input: DeleteBankAccountInput;
};

export type DeleteBankAccountMutation = {
  deleteBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type DeleteConversationChatMutationVariables = {
  condition?: ModelConversationChatConditionInput | null;
  input: DeleteConversationChatInput;
};

export type DeleteConversationChatMutation = {
  deleteConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteConversationMessageChatMutationVariables = {
  condition?: ModelConversationMessageChatConditionInput | null;
  input: DeleteConversationMessageChatInput;
};

export type DeleteConversationMessageChatMutation = {
  deleteConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    associatedUserMessageId?: string | null;
    content?: Array<{
      __typename: "AmplifyAIContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: AmplifyAIConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "AmplifyAIToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type DeleteExpenseMutationVariables = {
  condition?: ModelExpenseConditionInput | null;
  input: DeleteExpenseInput;
};

export type DeleteExpenseMutation = {
  deleteExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type DeleteExpenseTypeMutationVariables = {
  condition?: ModelExpenseTypeConditionInput | null;
  input: DeleteExpenseTypeInput;
};

export type DeleteExpenseTypeMutation = {
  deleteExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type DeleteHistoryBankAccountMutationVariables = {
  condition?: ModelHistoryBankAccountConditionInput | null;
  input: DeleteHistoryBankAccountInput;
};

export type DeleteHistoryBankAccountMutation = {
  deleteHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type DeleteHistoryExpenseMutationVariables = {
  condition?: ModelHistoryExpenseConditionInput | null;
  input: DeleteHistoryExpenseInput;
};

export type DeleteHistoryExpenseMutation = {
  deleteHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type DeletePredictedExpenseMutationVariables = {
  condition?: ModelPredictedExpenseConditionInput | null;
  input: DeletePredictedExpenseInput;
};

export type DeletePredictedExpenseMutation = {
  deletePredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type DeletePreferenceMutationVariables = {
  condition?: ModelPreferenceConditionInput | null;
  input: DeletePreferenceInput;
};

export type DeletePreferenceMutation = {
  deletePreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null;
  input: DeleteUserInput;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateBankAccountMutationVariables = {
  condition?: ModelBankAccountConditionInput | null;
  input: UpdateBankAccountInput;
};

export type UpdateBankAccountMutation = {
  updateBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type UpdateConversationChatMutationVariables = {
  condition?: ModelConversationChatConditionInput | null;
  input: UpdateConversationChatInput;
};

export type UpdateConversationChatMutation = {
  updateConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateExpenseMutationVariables = {
  condition?: ModelExpenseConditionInput | null;
  input: UpdateExpenseInput;
};

export type UpdateExpenseMutation = {
  updateExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type UpdateExpenseTypeMutationVariables = {
  condition?: ModelExpenseTypeConditionInput | null;
  input: UpdateExpenseTypeInput;
};

export type UpdateExpenseTypeMutation = {
  updateExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type UpdateHistoryBankAccountMutationVariables = {
  condition?: ModelHistoryBankAccountConditionInput | null;
  input: UpdateHistoryBankAccountInput;
};

export type UpdateHistoryBankAccountMutation = {
  updateHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type UpdateHistoryExpenseMutationVariables = {
  condition?: ModelHistoryExpenseConditionInput | null;
  input: UpdateHistoryExpenseInput;
};

export type UpdateHistoryExpenseMutation = {
  updateHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type UpdatePredictedExpenseMutationVariables = {
  condition?: ModelPredictedExpenseConditionInput | null;
  input: UpdatePredictedExpenseInput;
};

export type UpdatePredictedExpenseMutation = {
  updatePredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type UpdatePreferenceMutationVariables = {
  condition?: ModelPreferenceConditionInput | null;
  input: UpdatePreferenceInput;
};

export type UpdatePreferenceMutation = {
  updatePreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null;
  input: UpdateUserInput;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateAssistantResponseChatSubscriptionVariables = {
  conversationId?: string | null;
};

export type OnCreateAssistantResponseChatSubscription = {
  onCreateAssistantResponseChat?: {
    __typename: "AmplifyAIConversationMessageStreamPart";
    associatedUserMessageId: string;
    contentBlockDeltaIndex?: number | null;
    contentBlockDoneAtIndex?: number | null;
    contentBlockIndex?: number | null;
    contentBlockText?: string | null;
    contentBlockToolUse?: {
      __typename: "AmplifyAIToolUseBlock";
      input: string;
      name: string;
      toolUseId: string;
    } | null;
    conversationId: string;
    errors?: Array<{
      __typename: "AmplifyAIConversationTurnError";
      errorType: string;
      message: string;
    } | null> | null;
    id: string;
    owner?: string | null;
    p?: string | null;
    stopReason?: string | null;
  } | null;
};

export type OnCreateBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionBankAccountFilterInput | null;
  owner?: string | null;
};

export type OnCreateBankAccountSubscription = {
  onCreateBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnCreateConversationMessageChatSubscriptionVariables = {
  filter?: ModelSubscriptionConversationMessageChatFilterInput | null;
  owner?: string | null;
};

export type OnCreateConversationMessageChatSubscription = {
  onCreateConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    associatedUserMessageId?: string | null;
    content?: Array<{
      __typename: "AmplifyAIContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: AmplifyAIConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "AmplifyAIToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type OnCreateExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null;
  owner?: string | null;
};

export type OnCreateExpenseSubscription = {
  onCreateExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnCreateExpenseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseTypeFilterInput | null;
  owner?: string | null;
};

export type OnCreateExpenseTypeSubscription = {
  onCreateExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnCreateHistoryBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionHistoryBankAccountFilterInput | null;
  owner?: string | null;
};

export type OnCreateHistoryBankAccountSubscription = {
  onCreateHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnCreateHistoryExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionHistoryExpenseFilterInput | null;
};

export type OnCreateHistoryExpenseSubscription = {
  onCreateHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnCreatePredictedExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionPredictedExpenseFilterInput | null;
  owner?: string | null;
};

export type OnCreatePredictedExpenseSubscription = {
  onCreatePredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type OnCreatePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionPreferenceFilterInput | null;
  owner?: string | null;
};

export type OnCreatePreferenceSubscription = {
  onCreatePreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionBankAccountFilterInput | null;
  owner?: string | null;
};

export type OnDeleteBankAccountSubscription = {
  onDeleteBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnDeleteExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null;
  owner?: string | null;
};

export type OnDeleteExpenseSubscription = {
  onDeleteExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnDeleteExpenseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseTypeFilterInput | null;
  owner?: string | null;
};

export type OnDeleteExpenseTypeSubscription = {
  onDeleteExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnDeleteHistoryBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionHistoryBankAccountFilterInput | null;
  owner?: string | null;
};

export type OnDeleteHistoryBankAccountSubscription = {
  onDeleteHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnDeleteHistoryExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionHistoryExpenseFilterInput | null;
};

export type OnDeleteHistoryExpenseSubscription = {
  onDeleteHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnDeletePredictedExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionPredictedExpenseFilterInput | null;
  owner?: string | null;
};

export type OnDeletePredictedExpenseSubscription = {
  onDeletePredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type OnDeletePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionPreferenceFilterInput | null;
  owner?: string | null;
};

export type OnDeletePreferenceSubscription = {
  onDeletePreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionBankAccountFilterInput | null;
  owner?: string | null;
};

export type OnUpdateBankAccountSubscription = {
  onUpdateBankAccount?: {
    __typename: "BankAccount";
    balance?: number | null;
    createdAt: string;
    history?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: BankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnUpdateExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null;
  owner?: string | null;
};

export type OnUpdateExpenseSubscription = {
  onUpdateExpense?: {
    __typename: "Expense";
    assigned?: number | null;
    category?: ExpenseCategory | null;
    createdAt: string;
    date?: string | null;
    dueDate?: string | null;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    hasTarget?: boolean | null;
    history?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name?: string | null;
    nextMonthIWantToSetAside?: number | null;
    notes?: string | null;
    owner?: string | null;
    recurring?: boolean | null;
    recurringFrequency?: ExpenseRecurringFrequency | null;
    targetAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnUpdateExpenseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseTypeFilterInput | null;
  owner?: string | null;
};

export type OnUpdateExpenseTypeSubscription = {
  onUpdateExpenseType?: {
    __typename: "ExpenseType";
    createdAt: string;
    expenseHistory?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    name: string;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnUpdateHistoryBankAccountSubscriptionVariables = {
  filter?: ModelSubscriptionHistoryBankAccountFilterInput | null;
  owner?: string | null;
};

export type OnUpdateHistoryBankAccountSubscription = {
  onUpdateHistoryBankAccount?: {
    __typename: "HistoryBankAccount";
    balance?: number | null;
    bankAccount?: {
      __typename: "BankAccount";
      balance?: number | null;
      createdAt: string;
      id: string;
      name?: string | null;
      owner?: string | null;
      type?: BankAccountType | null;
      updatedAt: string;
      userId: string;
    } | null;
    bankAccountId: string;
    createdAt: string;
    date?: string | null;
    id: string;
    name?: string | null;
    owner?: string | null;
    type?: HistoryBankAccountType | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnUpdateHistoryExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionHistoryExpenseFilterInput | null;
};

export type OnUpdateHistoryExpenseSubscription = {
  onUpdateHistoryExpense?: {
    __typename: "HistoryExpense";
    assigned: number;
    category?: HistoryExpenseCategory | null;
    createdAt: string;
    date: string;
    expense?: {
      __typename: "Expense";
      assigned?: number | null;
      category?: ExpenseCategory | null;
      createdAt: string;
      date?: string | null;
      dueDate?: string | null;
      expenseTypeId?: string | null;
      hasTarget?: boolean | null;
      id: string;
      name?: string | null;
      nextMonthIWantToSetAside?: number | null;
      notes?: string | null;
      owner?: string | null;
      recurring?: boolean | null;
      recurringFrequency?: ExpenseRecurringFrequency | null;
      targetAmount?: number | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseId: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId: string;
    id: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnUpdatePredictedExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionPredictedExpenseFilterInput | null;
  owner?: string | null;
};

export type OnUpdatePredictedExpenseSubscription = {
  onUpdatePredictedExpense?: {
    __typename: "PredictedExpense";
    category?: PredictedExpenseCategory | null;
    createdAt: string;
    date: string;
    expenseType?: {
      __typename: "ExpenseType";
      createdAt: string;
      id: string;
      name: string;
      owner?: string | null;
      updatedAt: string;
      userId: string;
    } | null;
    expenseTypeId?: string | null;
    id: string;
    owner?: string | null;
    predictedAmount?: number | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type OnUpdatePreferenceSubscriptionVariables = {
  filter?: ModelSubscriptionPreferenceFilterInput | null;
  owner?: string | null;
};

export type OnUpdatePreferenceSubscription = {
  onUpdatePreference?: {
    __typename: "Preference";
    createdAt: string;
    currency?: PreferenceCurrency | null;
    debt?: number | null;
    debtGoal?: number | null;
    deptType?: PreferenceDeptType | null;
    emergencyFund?: number | null;
    emergencyFundGoal?: number | null;
    financialStatus?: PreferenceFinancialStatus | null;
    hasDebt?: boolean | null;
    hasEmergencyFund?: boolean | null;
    hasRetirementFund?: boolean | null;
    homeOwnership?: PreferenceHomeOwnership | null;
    id?: string | null;
    lastUpdated?: string | null;
    monthlyExpense?: number | null;
    monthlyIncome?: number | null;
    mostSpend?: PreferenceMostSpend | null;
    owner?: string | null;
    retirementFund?: number | null;
    retirementFundGoal?: number | null;
    savingsBalance?: number | null;
    savingsGoal?: number | null;
    subscriptions?: Array<string | null> | null;
    transportation?: PreferenceTransportation | null;
    updatedAt: string;
    user?: {
      __typename: "User";
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id?: string | null;
      lastName?: string | null;
      owner?: string | null;
      profileOwner: string;
      role?: string | null;
      updatedAt: string;
    } | null;
    userId: string;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    email?: string | null;
    expenseTypes?: {
      __typename: "ModelExpenseTypeConnection";
      nextToken?: string | null;
    } | null;
    expenses?: {
      __typename: "ModelExpenseConnection";
      nextToken?: string | null;
    } | null;
    firstName?: string | null;
    historyBankAccount?: {
      __typename: "ModelHistoryBankAccountConnection";
      nextToken?: string | null;
    } | null;
    historyExpense?: {
      __typename: "ModelHistoryExpenseConnection";
      nextToken?: string | null;
    } | null;
    id?: string | null;
    lastName?: string | null;
    owner?: string | null;
    predictedExpenses?: {
      __typename: "ModelPredictedExpenseConnection";
      nextToken?: string | null;
    } | null;
    preference?: {
      __typename: "Preference";
      createdAt: string;
      currency?: PreferenceCurrency | null;
      debt?: number | null;
      debtGoal?: number | null;
      deptType?: PreferenceDeptType | null;
      emergencyFund?: number | null;
      emergencyFundGoal?: number | null;
      financialStatus?: PreferenceFinancialStatus | null;
      hasDebt?: boolean | null;
      hasEmergencyFund?: boolean | null;
      hasRetirementFund?: boolean | null;
      homeOwnership?: PreferenceHomeOwnership | null;
      id?: string | null;
      lastUpdated?: string | null;
      monthlyExpense?: number | null;
      monthlyIncome?: number | null;
      mostSpend?: PreferenceMostSpend | null;
      owner?: string | null;
      retirementFund?: number | null;
      retirementFundGoal?: number | null;
      savingsBalance?: number | null;
      savingsGoal?: number | null;
      subscriptions?: Array<string | null> | null;
      transportation?: PreferenceTransportation | null;
      updatedAt: string;
      userId: string;
    } | null;
    profileOwner: string;
    role?: string | null;
    updatedAt: string;
  } | null;
};
