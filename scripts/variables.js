/** ============================================================================
    Page: Variables | Controle de finanças
    Description: Arquivo de variáveis
    ----------------------------------------------------------------------------
    Files
      |__ Content: messages, variables
      |__ Data: data-expenses, data-income, data-investments
      |__ Dashboards: income, investments, expenses
      |__ Composition: components, formatters, utils, getters

    Variables
      |__ global
      |__ income
      |__ investments
      |__ expenses
      |__ classroom
      |__ component: barchart
      |__ component: table
      |__ component: graphic line
      |__ component: graphic bar vertical
      |__ component: graphic bar horizontal
============================================================================= */

import { messages as message } from './messages.js';
import { income as dataIncome } from './fake-income.js';
import { transactions as dataTransactions } from './fake-investments.js';
import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
import * as formatter from './formatters.js';
import * as utils from './utils.js';
import * as getter from './getters.js';

// GLOBAL ----------------------------------------------------------------------
export const reporting = dataIncome.reporting;

// INCOME ----------------------------------------------------------------------
export const incomeHours = dataIncome.hours;
export const incomeValue = dataIncome.value;
export const incomeTarget = dataIncome.reserve.target;
export const incomeAmount = incomeHours * incomeValue;

// EXPENSES --------------------------------------------------------------------
export const expenses = dataExpenses;
export const reserves = dataTransactions.reserves;

export const companyExpenses = getter.getExpenses.byKey(
  'category',
  message.payments.category.professional,
  expenses
);
export const companyAccounting = getter.getExpenses.byKey(
  'tag',
  message.payments.tag.professional.accounting,
  companyExpenses
);
export const companyTaxes = getter.getExpenses.byKey(
  'tag',
  message.payments.tag.professional.taxes,
  companyExpenses
);
export const companyObligations = utils.sum.amount(
  utils.sum.expensesAmount(companyAccounting),
  utils.sum.expensesAmount(companyTaxes)
);
export const companyOtherExpenses =
  utils.sum.expensesAmount(companyExpenses) - companyObligations;

export const habitationExpenses = getter.getExpenses.byKey(
  'category',
  message.payments.category.habitation,
  expenses
);
export const expensesEssential = utils.sum.expensesAmount(habitationExpenses);
export const incomeUsable = incomeAmount - expensesEssential;

export const reserveEmergency = incomeUsable * 0.08;
export const reserveExtra = incomeTarget.extra / 12;
export const reserveInvestments = incomeUsable * 0.1;
export const reserveVacation = incomeTarget.vacation / 12;
export const reserveAmount = utils.sum.amount(
  reserveEmergency,
  reserveExtra,
  reserveVacation,
  reserveInvestments
);

export const emergencyTarget = expensesEssential * 6;
export const emergencyAccomplished = utils.sum.values(reserves.emergency);
export const emergencyBalance = emergencyTarget - emergencyAccomplished;

export const monthlyObligation = utils.sum.amount(
  expensesEssential,
  companyObligations,
  reserveAmount
);
export const monthlyBalance = incomeAmount - monthlyObligation;

export const expensesByCategories = getter.getExpenses.groupedBy(
  'category',
  expenses
);
export const expensesByFIs = getter.getExpenses.groupedBy('fi', expenses);
export const expensesByMethods = getter.getExpenses.groupedBy(
  'method',
  expenses
);
export const expensesByTypes = getter.getExpenses.groupedBy('type', expenses);

export const monthlyInvestment = utils.sum.expensesAmount(
  getter.getExpenses.byKey(
    'category',
    message.payments.category.investment,
    expenses
  )
);
export const expensesAmount =
  utils.sum.expensesAmount(expenses) - monthlyInvestment;
export const expensesBalance =
  incomeAmount - utils.sum.expensesAmount(expenses);

// INVESTMENTS -----------------------------------------------------------------
export const transactions = dataTransactions;

export const privatePension = transactions.privatePension;
export const privatePensionInjectionAmount =
  getter.getTransactions.injection(privatePension);
export const privatePensionProfitsAmount =
  getter.getTransactions.profits(privatePension);

export const cdi = transactions.cdi;
export const privateCredit = transactions.privateCredit;
export const fixedRate = transactions.fixedRate;
export const realInterest = transactions.realInterest;
export const incomeFixed = [
  ...cdi,
  ...privateCredit,
  ...fixedRate,
  ...realInterest,
];
export const incomeFixedInjectionAmount =
  getter.getTransactions.injection(incomeFixed);
export const incomeFixedProfitsAmount =
  getter.getTransactions.profits(incomeFixed);

export const multiAsset = transactions.multiAsset;
export const hybridFundsInjectionAmount =
  getter.getTransactions.injection(multiAsset);
export const hybridFundsProfitsAmount =
  getter.getTransactions.profits(multiAsset);

export const stocks = transactions.stocks;
export const international = transactions.international;
export const foreignExchange = transactions.foreignExchange;
export const incomeVariable = [...stocks, ...international, ...foreignExchange];
export const incomeVariableInjectionAmount =
  getter.getTransactions.injection(incomeVariable);
export const incomeVariableProfitsAmount =
  getter.getTransactions.profits(incomeVariable);

export const protective = transactions.protective;
export const protectiveInjectionAmount =
  getter.getTransactions.injection(protective);
export const protectiveProfitsAmount =
  getter.getTransactions.profits(protective);

export const cryptocurrencies = transactions.cryptoCurrencies;
export const cryptocurrenciesInjectionAmount =
  getter.getTransactions.injection(cryptocurrencies);
export const cryptocurrenciesProfitsAmount =
  getter.getTransactions.profits(cryptocurrencies);

// TODO: [getter] adicionar getter para receber investimentos por categorias
// TODO: [getter] adicionar getter para receber investimentos por perfil
// TODO: [getter] adicionar getter para receber investimentos por risco
// TODO: [getter] adicionar getter para receber investimentos por operador

export const lifeInsurance = transactions.lifeInsurance;
export const lifeInsuranceInjection = lifeInsurance.injection.flatMap(
  (obj) => obj.value
);
export const lifeInsuranceComposition = lifeInsurance.composition.map(
  (obj) => obj.value
);

// CLASSROOM -------------------------------------------------------------------

// COMPONENT: BARCHART DATA [BCD_] ---------------------------------------------
export const bcd_companyExpenses = [
  {
    value: utils.sum.expensesAmount(companyAccounting),
    label: message.global.company.accounting,
  },
  {
    value: utils.sum.expensesAmount(companyTaxes),
    label: message.global.company.taxes,
  },
];

export const bcd_expensesEssential = [
  { value: expensesEssential, label: message.income.cash.essential },
  { value: incomeUsable, label: message.income.cash.usable },
];

export const bcd_financialReserve = [
  { value: reserveEmergency, label: message.income.reserve.emergency },
  { value: reserveVacation, label: message.income.reserve.vacation },
  { value: reserveExtra, label: message.income.reserve.extra },
  { value: reserveInvestments, label: message.income.reserve.investments },
];
export const bcd_emergencyPerformed = [
  {
    value: utils.calc.percent(emergencyAccomplished, emergencyTarget),
    label: message.global.investment.performed,
    color: 'spring',
  },
];

export const bcd_monthlyExpensesSummary = [
  { value: expensesEssential, label: message.income.cash.essential },
  { value: companyObligations, label: message.global.company.obligation },
  { value: reserveAmount, label: message.income.reserve.financial },
];
export const bcd_incomeBalance = [
  { value: monthlyObligation, label: message.global.amount.monthly.expenses },
  { value: monthlyBalance, label: message.global.balance },
];

export const bcd_monthlyExpenses = [
  {
    label: message.global.amount.monthly.expenses,
    value: utils.calc.percent(expensesAmount, incomeAmount),
    color: 'red',
  },
  {
    label: message.global.investment.monthly,
    value: utils.calc.percent(monthlyInvestment, incomeAmount),
    color: 'gold',
  },
];
// TODO: [model/data] adicionar getter para investimentos e subtrair de despesas

export const bcd_incomeFixed = [
  {
    profits: getter.getTransactions.profits(cdi),
    name: message.investments.tag.cdi,
  },
  {
    profits: getter.getTransactions.profits(privateCredit),
    name: message.investments.tag.private.credit,
  },
  {
    profits: getter.getTransactions.profits(fixedRate),
    name: message.investments.tag.fixed.rate,
  },
  {
    profits: getter.getTransactions.profits(realInterest),
    name: message.investments.tag.real.interest.rate,
  },
];
export const bcd_incomeVariable = [
  {
    profits: getter.getTransactions.profits(stocks),
    name: message.investments.tag.stocks,
  },
  {
    profits: getter.getTransactions.profits(international),
    name: message.investments.tag.international,
  },
  {
    profits: getter.getTransactions.profits(foreignExchange),
    name: message.investments.tag.foreign.exchange,
  },
];

export const bcd_lifeInsurance = lifeInsurance.composition.map((obj, index) => {
  let amount = utils.sum.values(lifeInsuranceComposition);
  return {
    value: utils.calc.percent(obj.value, amount),
    label: `${obj.label} - ${formatter.format.moneyBRL(obj.value)}`,
    color: utils.colors[index],
  };
});

// COMPONENT: TABLE DATA [TBD_] ------------------------------------------------
export const tbd_headerExpenses = [
  message.global.date,
  message.global.description,
  message.global.category,
  message.global.tag,
  message.global.method,
  message.global.payment,
  message.global.bank,
  `${message.global.value} (${message.global.sign.brl})`,
];

export const tbd_headerInvestments = [
  message.global.asset,
  message.global.operator,
  message.global.profile,
  message.global.risk,
  message.global.share.number,
  `${message.global.injection} (${message.global.sign.brl})`,
  `${message.global.profits} (${message.global.sign.brl})`,
  `${message.global.performance} (${message.global.sign.percentage})`,
];

// GRAPHIC: GRAPHIC BARS DATA [GBD_] -------------------------------------------
export const gbd_habitation = getter.getExpenses.byKey(
  'category',
  message.payments.category.habitation,
  expenses
);
export const gbd_food = getter.getExpenses.byKey(
  'category',
  message.payments.category.food,
  expenses
);
export const gbd_home = getter.getExpenses.byKey(
  'category',
  message.payments.category.home,
  expenses
);
export const gbd_culture = getter.getExpenses.byKey(
  'category',
  message.payments.category.culture,
  expenses
);
export const gbd_lifestyle = getter.getExpenses.byKey(
  'category',
  message.payments.category.lifestyle,
  expenses
);
export const gbd_clothing = getter.getExpenses.byKey(
  'category',
  message.payments.category.clothing,
  expenses
);
export const gbd_transportation = getter.getExpenses.byKey(
  'category',
  message.payments.category.transportation,
  expenses
);
export const gbd_professional = getter.getExpenses.byKey(
  'category',
  message.payments.category.professional,
  expenses
);
export const gbd_subscription = getter.getExpenses.byKey(
  'category',
  message.payments.category.subscription,
  expenses
);
export const gbd_uncategorized = getter.getExpenses.byKey(
  'category',
  message.payments.category.uncategorized,
  expenses
);
export const gbd_coffee = getter.getExpenses.byKey(
  'category',
  message.payments.category.coffee,
  expenses
);
export const gbd_investment = getter.getExpenses.byKey(
  'category',
  message.payments.category.investment,
  expenses
);

// GRAPHIC: GRAPHIC COLUMNS DATA [GCD_] ----------------------------------------

// GRAPHIC: GRAPHIC LINE DATA [GLD_] -------------------------------------------
export const gld_economic = {
  title: message.global.indexes.economic,
  yIndexBase: 10,
  xIndex: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  indexes: [
    {
      label: message.global.indexes.label.savings,
      index: [1, 2, 2.5, 3, 4.5],
      color: 'magenta',
    },
    {
      label: message.global.indexes.label.ipca,
      index: [0.5, 1.5, 2, 2.5, 3],
      color: 'blue',
    },
    {
      label: message.global.indexes.label.cdi,
      index: [1.5, 3, 4, 6, 7],
      color: 'lime',
    },
    {
      label: message.income.reserve.investments,
      index: [5, 15, 5, 10, 5],
      color: 'gold',
    },
  ],
};

// RELATED CONTENT -------------------------------------------------------------
export const fis = message.fis;

/* END OF FILE ============================================================== */
