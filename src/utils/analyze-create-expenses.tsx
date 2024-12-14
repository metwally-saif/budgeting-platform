// Import necessary types and enums
import {
  Preference,
  PreferenceTransportation,
  PreferenceDeptType,
  PreferenceFinancialStatus,
  PreferenceMostSpend,
  ExpenseType,
} from "../../amplify/graphql/API";
import {
  ExpenseCategory,
  ExpenseRecurringFrequency,
  CreateExpenseInput,
} from "../../amplify/graphql/API";

/**
 * Capitalizes the first letter of a string
 * @param s - The string to capitalize
 * @returns The capitalized string
 */
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Generates initial expenses based on user preferences and expense type mapping
 * @param input - The user's preferences
 * @param userId - The user's unique identifier
 * @param expenseTypeMap - A mapping of expense type names to their corresponding IDs
 * @returns An array of ExpenseInput objects
 */
const getInitialExpenses = (
  input: Preference,
  userId: string,
  expenseTypeMap: ExpenseType[],
): CreateExpenseInput[] => {
  const expenses: CreateExpenseInput[] = [];

  /**
   * Helper function to assign expense type and type ID
   * @param type - The expense type name ("Bills", "Needs", "Wants")
   * @param name - The name of the expense
   * @param category - The category of the expense
   * @param options - Additional options for the expense
   */
  const addExpense = (
    type: "Bills" | "Needs" | "Wants",
    name: string,
    category: ExpenseCategory,
    options: Partial<CreateExpenseInput> = {},
  ) => {
    expenses.push({
      name,
      category,
      expenseTypeId: expenseTypeMap.find((et) => et.name === type)?.id || "",
      userId,
      recurring: true,
      recurringFrequency: ExpenseRecurringFrequency.Monthly,
      ...options,
    });
  };

  // 1. Basic Expenses - Bills
  const basicBills = [
    { name: "💰 Taxes", category: ExpenseCategory.Miscellaneous },
    { name: "📱 Phone Bill", category: ExpenseCategory.Personal },
    { name: "💡 Utilities", category: ExpenseCategory.Utilities },
    { name: "🔌 Internet", category: ExpenseCategory.Personal },
  ];

  basicBills.forEach((bill) => {
    addExpense("Bills", bill.name, bill.category);
  });

  // 2. Housing Expenses - Bills or Needs based on Ownership
  if (input.homeOwnership) {
    switch (input.homeOwnership) {
      case "Own":
        addExpense("Bills", "🏡 Mortgage Payment", ExpenseCategory.Housing);
        addExpense(
          "Needs",
          "🛠️ Home Maintenance",
          ExpenseCategory.Housing,
          { recurring: false }, // One-time or as needed
        );
        break;
      case "Rent":
        addExpense("Bills", "🏠 Rent Payment", ExpenseCategory.Housing);
        break;
      case "Other":
        addExpense(
          "Bills",
          "🏘️ Other Housing Expenses",
          ExpenseCategory.Housing,
          { recurring: false },
        );
        break;
      default:
        break;
    }
  }

  // 3. Transportation Expenses - Needs
  if (input.transportation) {
    switch (input.transportation) {
      case PreferenceTransportation.Private:
        addExpense("Needs", "⛽ Gas", ExpenseCategory.Transportation);
        addExpense(
          "Needs",
          "🔧 Auto Maintenance",
          ExpenseCategory.Transportation,
        );
        addExpense("Bills", "🛠️ Car Insurance", ExpenseCategory.Insurance);
        if (input.deptType === PreferenceDeptType.AutoLoans) {
          addExpense("Bills", "🚗 Car Loan Payment", ExpenseCategory.Debt);
        }
        break;
      case PreferenceTransportation.Public:
        addExpense(
          "Needs",
          "🚌 Public Transport Pass",
          ExpenseCategory.Transportation,
        );
        addExpense(
          "Needs",
          "🚲 Bike Maintenance",
          ExpenseCategory.Transportation,
        );
        break;
      case PreferenceTransportation.Other:
        addExpense(
          "Wants",
          "🚴‍♂️ Scooter Rental",
          ExpenseCategory.Transportation,
        );
        addExpense(
          "Wants",
          "🛴 Electric Skateboard",
          ExpenseCategory.Transportation,
        );
        break;
      default:
        break;
    }
  }

  // 4. Debt-Related Expenses - Bills or Needs
  if (input.hasDebt && input.deptType) {
    let debtExpenseName = "";
    switch (input.deptType) {
      case PreferenceDeptType.AutoLoans:
        debtExpenseName = "🚗 Auto Loan Payment";
        break;
      case PreferenceDeptType.CreditCard:
        debtExpenseName = "💳 Credit Card Payment";
        break;
      case PreferenceDeptType.MedicalDept:
        debtExpenseName = "🏥 Medical Debt Payment";
        break;
      case PreferenceDeptType.Other:
        debtExpenseName = "🔖 Other Debt Payment";
        break;
      case PreferenceDeptType.PersonalLoans:
        debtExpenseName = "📄 Personal Loan Payment";
        break;
      case PreferenceDeptType.StudentLoan:
        debtExpenseName = "🎓 Student Loan Payment";
        break;
      default:
        debtExpenseName = "💳 Debt Payment";
        break;
    }

    addExpense("Bills", debtExpenseName, ExpenseCategory.Debt);
  }

  // 5. Emergency Fund Expenses - Needs
  if (input.hasEmergencyFund) {
    addExpense("Needs", "🚑 Emergency Fund Savings", ExpenseCategory.Savings, {
      hasTarget: true,
      targetAmount: input.emergencyFundGoal || 1000, // Default goal if not provided
    });
  }

  // 6. Retirement Fund Expenses - Needs
  if (input.hasRetirementFund) {
    addExpense("Needs", "🏖️ Retirement Fund Savings", ExpenseCategory.Savings, {
      hasTarget: true,
      targetAmount: input.retirementFundGoal || 5000, // Default goal if not provided
    });
  }

  // 7. Most Spent Category Expenses
  if (input.mostSpend) {
    switch (input.mostSpend) {
      case PreferenceMostSpend.Entertainment:
        addExpense("Wants", "🎬 Entertainment", ExpenseCategory.Recreation);
        break;
      case PreferenceMostSpend.Food:
        addExpense("Needs", "🍔 Groceries", ExpenseCategory.Food);
        addExpense("Wants", "🍽️ Dining Out", ExpenseCategory.Food);
        break;
      case PreferenceMostSpend.Healthcare:
        addExpense(
          "Needs",
          "🩺 Healthcare Expenses",
          ExpenseCategory.Healthcare,
        );
        break;
      case PreferenceMostSpend.Insurance:
        addExpense("Bills", "🛡️ Insurance Premiums", ExpenseCategory.Insurance);
        break;
      case PreferenceMostSpend.Other:
        addExpense(
          "Wants",
          "🛍️ Other Expenses",
          ExpenseCategory.Miscellaneous,
          { recurring: false },
        );
        break;
      // Housing and Transportation are already handled
      default:
        break;
    }
  }

  // 8. Subscription Expenses - Wants
  if (input.subscriptions && input.subscriptions.length > 0) {
    input.subscriptions.forEach((subscription) => {
      if (subscription) {
        addExpense(
          "Wants",
          `📺 ${capitalize(subscription)}`,
          ExpenseCategory.Recreation,
        );
      }
    });
  }

  // 9. Financial Status-Based Expenses
  if (input.financialStatus) {
    switch (input.financialStatus) {
      case PreferenceFinancialStatus.Good:
        addExpense(
          "Needs",
          "💼 Investment Contributions",
          ExpenseCategory.Savings,
        );
        break;
      case PreferenceFinancialStatus.Average:
        addExpense(
          "Needs",
          "📈 Savings Contributions",
          ExpenseCategory.Savings,
        );
        break;
      case PreferenceFinancialStatus.Poor:
        addExpense(
          "Needs",
          "🛠️ Emergency Repairs",
          ExpenseCategory.Miscellaneous,
          { recurring: false },
        );
        break;
      default:
        break;
    }
  }

  // 10. Debt and Savings Goals
  if (input.debtGoal && input.hasDebt) {
    addExpense("Bills", "📉 Debt Repayment Goal", ExpenseCategory.Debt, {
      hasTarget: true,
      targetAmount: input.debtGoal,
    });
  }

  if (input.savingsGoal) {
    addExpense("Needs", "💵 Savings Goal", ExpenseCategory.Savings, {
      hasTarget: true,
      targetAmount: input.savingsGoal,
    });
  }

  // Ensure Emergency and Retirement Fund Goals are set
  if (input.emergencyFundGoal && input.hasEmergencyFund) {
    const emergencyFundExpense = expenses.find(
      (exp) => exp.name === "🚑 Emergency Fund Savings",
    );
    if (emergencyFundExpense) {
      emergencyFundExpense.targetAmount = input.emergencyFundGoal;
    }
  }

  if (input.retirementFundGoal && input.hasRetirementFund) {
    const retirementFundExpense = expenses.find(
      (exp) => exp.name === "🏖️ Retirement Fund Savings",
    );
    if (retirementFundExpense) {
      retirementFundExpense.targetAmount = input.retirementFundGoal;
    }
  }

  return expenses;
};

export default getInitialExpenses;
