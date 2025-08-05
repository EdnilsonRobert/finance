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
import { costs as dataCosts } from './fake-expenses.js';
import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
import * as utils from './utils.js';
import * as getter from './getters.js';

// GLOBAL ----------------------------------------------------------------------
export const reporting = dataIncome.reporting;

// INCOME ----------------------------------------------------------------------
export const incomeHours = dataIncome.hours;
export const incomeValue = dataIncome.value;
export const incomeAmount = incomeHours * incomeValue;

// INVESTMENTS -----------------------------------------------------------------
export const transactions = dataTransactions;

export const privatePension = transactions.privatePension;
export const cdi = transactions.cdi;
export const privateCredit = transactions.privateCredit;
export const fixedRate = transactions.fixedRate;
export const realInterest = transactions.realInterest;
export const multiAsset = transactions.multiAsset;
export const stocks = transactions.stocks;
export const international = transactions.international;
export const foreignExchange = transactions.foreignExchange;
export const protective = transactions.protective;
export const cryptocurrencies = transactions.cryptoCurrencies;

export const incomeFixed = [
  ...cdi,
  ...privateCredit,
  ...fixedRate,
  ...realInterest,
];
export const incomeVariable = [...stocks, ...international, ...foreignExchange];

export const privatePensionInjectionAmount = utils.sum.values(
  getter.getTransactions.injection(privatePension)
);
export const incomeFixedInjectionAmount = utils.sum.amount(
  utils.sum.values(getter.getTransactions.injection(cdi)),
  utils.sum.values(getter.getTransactions.injection(privateCredit)),
  utils.sum.values(getter.getTransactions.injection(fixedRate)),
  utils.sum.values(getter.getTransactions.injection(realInterest))
);
export const hybridFundsInjectionAmount = utils.sum.values(
  getter.getTransactions.injection(multiAsset)
);
export const incomeVariableInjectionAmount = utils.sum.amount(
  utils.sum.values(getter.getTransactions.injection(stocks)),
  utils.sum.values(getter.getTransactions.injection(international)),
  utils.sum.values(getter.getTransactions.injection(foreignExchange))
);
export const protectiveInjectionAmount = utils.sum.values(
  getter.getTransactions.injection(protective)
);
export const cryptocurrenciesInjectionAmount = utils.sum.values(
  getter.getTransactions.injection(cryptocurrencies)
);

export const privatePensionProfitsAmount = utils.sum.values(
  getter.getTransactions.profits(privatePension)
);
export const incomeFixedProfitsAmount = utils.sum.amount(
  utils.sum.values(getter.getTransactions.profits(cdi)),
  utils.sum.values(getter.getTransactions.profits(privateCredit)),
  utils.sum.values(getter.getTransactions.profits(fixedRate)),
  utils.sum.values(getter.getTransactions.profits(realInterest))
);
export const hybridFundsProfitsAmount = utils.sum.values(
  getter.getTransactions.profits(multiAsset)
);
export const incomeVariableProfitsAmount = utils.sum.amount(
  utils.sum.values(getter.getTransactions.profits(stocks)),
  utils.sum.values(getter.getTransactions.profits(international)),
  utils.sum.values(getter.getTransactions.profits(foreignExchange))
);
export const protectiveProfitsAmount = utils.sum.values(
  getter.getTransactions.profits(protective)
);
export const cryptocurrenciesProfitsAmount = utils.sum.values(
  getter.getTransactions.profits(cryptocurrencies)
);

// TODO: adicionar getter para receber investimentos por categorias
// TODO: adicionar getter para receber investimentos por perfil
// TODO: adicionar getter para receber investimentos por risco
// TODO: adicionar getter para receber investimentos por operador

export const lifeInsurance = transactions.lifeInsurance;
const lifeInsuranceInjection = [
  ...lifeInsurance.injection.y22,
  ...lifeInsurance.injection.y23,
  ...lifeInsurance.injection.y24,
  ...lifeInsurance.injection.y25,
];
// TODO: [data] adicionar iteração para injection do seguro de vida
export const lifeInsuranceInstallments = lifeInsuranceInjection.length;
export const lifeInsuranceInstallment = utils.sum.amount(
  lifeInsurance.composition.insurance.value,
  lifeInsurance.composition.funeral.value,
  lifeInsurance.composition.hospital.value
);
export const lifeInsuranceInjectionAmount = lifeInsuranceInjection.reduce(
  (acc, item) => acc + item
);
// TODO: criar getters para life insurance

// EXPENSES --------------------------------------------------------------------
export const costs = dataCosts;
export const expenses = dataExpenses;

export const costsCompanyAccounting = costs.company.accounting;
export const costsCompanyTaxes = costs.company.tax;
export const costsCompanyTaxesAmount = utils.sum.values(
  Object.values(costs.company.tax)
);
export const costsCompanyExpensesAmount = utils.sum.amount(
  costsCompanyAccounting,
  costsCompanyTaxesAmount
);

export const expensesEssential = utils.sum.values(Object.values(costs.home));
export const incomeUsable = incomeAmount - expensesEssential;
export const reserveEmergency = incomeUsable * 0.08;
export const reserveExtra = incomeUsable / 12;
export const reserveVacation = incomeUsable / 12;
export const reserveInvestments = incomeUsable * 0.1;
export const reserveAmount = utils.sum.amount(
  reserveEmergency,
  reserveExtra,
  reserveVacation,
  reserveInvestments
);

export const emergencyTarget = expensesEssential * 6;
export const emergencyAccomplished = reserveEmergency * 2;
export const emergencyBalance = emergencyAccomplished - emergencyTarget;
// TODO: remodelar emergencyAccomplished com dados mensais

export const monthlyObligation = utils.sum.amount(
  expensesEssential,
  costsCompanyExpensesAmount,
  reserveAmount
);
export const monthlyBalance = incomeAmount - monthlyObligation;
// TODO: remodelar soma de reserveAmount em monthlyObligation

// -------------------------------------

export const expensesByCategories = getter.getExpensesBy('category', expenses);
export const expensesByFIs = getter.getExpensesBy('fi', expenses);
export const expensesByMethods = getter.getExpensesBy('method', expenses);
export const expensesByTypes = getter.getExpensesBy('type', expenses);

// export const expensesAmount = getter.getExpenses.amount(expenses);

// variável [arr] com soma de despesas filtradas por categoria
// variável [arr] com soma de despesas filtradas por método de pagamento
// variável [arr] com soma de despesas filtradas por tipo de gasto
// variável [arr] com soma de despesas filtradas por instituição financeira
// variável com soma de todas as despesas
// -> utils

// CALCs -----------------------------------------------------------------------
// INCOME-------------------------------
// INVESTMENTS--------------------------
// EXPENSES-----------------------------

// CLASSROOM -------------------------------------------------------------------

// COMPONENT: BARCHART DATA [BCD_] ---------------------------------------------

// COMPONENT: BARCHART DATA [BCD_] ---------------------------------------------
export const bcd_incomeBalance = [
  {
    value: utils.calc.percent(monthlyObligation, incomeAmount),
    label: message.global.amount.monthly.expenses,
    color: 'red',
  },
  {
    value: utils.calc.percent(monthlyBalance, incomeAmount),
    label: message.global.balance,
    color: 'spring',
  },
];

export const bcd_monthlyExpensesSummary = [
  {
    value: utils.calc.percent(expensesEssential, monthlyObligation),
    label: message.income.expenses.essential,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(costsCompanyExpensesAmount, monthlyObligation),
    label: message.global.amount.company.expenses,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(reserveAmount, monthlyObligation),
    label: message.income.reserve.financial,
    color: utils.colors[2],
  },
];

export const bcd_companyExpenses = [
  {
    value: utils.calc.percent(
      costsCompanyAccounting,
      costsCompanyExpensesAmount
    ),
    label: message.global.company.accounting,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(
      costsCompanyTaxesAmount,
      costsCompanyExpensesAmount
    ),
    label: message.global.company.taxes,
    color: utils.colors[1],
  },
];

export const bcd_companyTaxes = [
  {
    value: utils.calc.percent(costs.company.tax.gps, costsCompanyTaxesAmount),
    label: message.global.company.tax.gps.abbr,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(costs.company.tax.iss, costsCompanyTaxesAmount),
    label: message.global.company.tax.iss.abbr,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(costs.company.tax.pis, costsCompanyTaxesAmount),
    label: message.global.company.tax.pis.abbr,
    color: utils.colors[2],
  },
  {
    value: utils.calc.percent(costs.company.tax.cof, costsCompanyTaxesAmount),
    label: message.global.company.tax.cof.abbr,
    color: utils.colors[3],
  },
  {
    value: utils.calc.percent(costs.company.tax.irf, costsCompanyTaxesAmount),
    label: message.global.company.tax.irf.abbr,
    color: utils.colors[4],
  },
  {
    value: utils.calc.percent(costs.company.tax.csl, costsCompanyTaxesAmount),
    label: message.global.company.tax.csl.abbr,
    color: utils.colors[5],
  },
];

export const bcd_expensesEssential = [
  {
    value: utils.calc.percent(expensesEssential, incomeAmount),
    label: message.income.expenses.essential,
    color: 'red',
  },
  {
    value: utils.calc.percent(incomeUsable, incomeAmount),
    label: message.income.cash.usable,
    color: 'spring',
  },
];

export const bcd_financialReserve = [
  {
    value: utils.calc.percent(reserveEmergency, reserveAmount),
    label: message.income.reserve.emergency,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(reserveExtra, reserveAmount),
    label: message.income.reserve.vacation,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(reserveVacation, reserveAmount),
    label: message.income.reserve.extra,
    color: utils.colors[2],
  },
  {
    value: utils.calc.percent(reserveInvestments, reserveAmount),
    label: message.income.reserve.investments,
    color: utils.colors[3],
  },
];

export const bcd_emergencyPerformed = [
  {
    value: utils.calc.percent(emergencyAccomplished, emergencyTarget),
    label: message.income.investment.performed,
    color: 'spring',
  },
];

export const bcd_incomeFixedHeaders = [
  message.investments.tag.cdi,
  message.investments.tag.private.credit,
  message.investments.tag.fixed.rate,
  message.investments.tag.real.interest.rate,
];

export const bcd_incomeVariableHeaders = [
  message.investments.tag.stocks,
  message.investments.tag.international,
  message.investments.tag.foreign.exchange,
];

export const bcd_lifeInsurance = [
  {
    value: utils.calc.percent(
      lifeInsurance.composition.insurance.value,
      lifeInsuranceInstallment
    ),
    label: lifeInsurance.composition.insurance.name,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(
      lifeInsurance.composition.funeral.value,
      lifeInsuranceInstallment
    ),
    label: lifeInsurance.composition.funeral.name,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(
      lifeInsurance.composition.hospital.value,
      lifeInsuranceInstallment
    ),
    label: lifeInsurance.composition.hospital.name,
    color: utils.colors[2],
  },
];
// TODO: [barchart] remodelar barchartdata do seguro de vida

// COMPONENT: TABLE DATA [TBD_] ------------------------------------------------
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

export const tbd_headerExpenses = [
  message.global.date,
  message.global.description,
  message.global.category,
  message.global.tag,
  message.global.mode,
  message.global.payment,
  message.global.bank,
  `${message.global.value} (${message.global.sign.brl})`,
];

// GRAPHIC: GRAPHIC BARS DATA [GBD_] -------------------------------------------

// GRAPHIC: GRAPHIC COLUMNS DATA [GCD_] ----------------------------------------

// GRAPHIC: GRAPHIC LINE DATA [GLD_] -------------------------------------------

// RELATED CONTENT -------------------------------------------------------------
export const fis = message.fis;

/* END OF FILE ============================================================== */
