/** ============================================================================
    Page: Variables | Controle de finanças
    Description: Arquivo de variáveis
============================================================================= */

// data-income
// data-expenses
// data-investments

// income
// expenses
// dashboard / investments
// classroom

// messages
// variables
// components
// formatters
// utils
// getters

import { messages as message } from './messages.js';
// import { categories, fis, payments } from './messages.js';
import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './data-investments.js';
// import * as dataExpenses from './data-expenses.js';
// import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// GLOBAL ----------------------------------------------------------------------
export const colors = [
  'spring',
  'blue',
  'gold',
  'magenta',
  'aqua',
  'purple',
  'lime',
  'brown',
  'pink',
  'red',
];

// export const months = [
//   'Jan',
//   'Fev',
//   'Mar',
//   'Abr',
//   'Mai',
//   'Jun',
//   'Jul',
//   'Ago',
//   'Set',
//   'Out',
//   'Nov',
//   'Dez',
// ];

// MENU ------------------------------------------------------------------------
export const menu = ['income', 'expenses', 'investments', 'classroom'];

// DASHBOARD INCOME ------------------------------------------------------------
export const monthlyHour = dataIncome.monthly.hour;
export const monthlyValue = dataIncome.monthly.value;
export const monthlyIncome = monthlyHour * monthlyValue;

export const homeRent = dataIncome.home.rent;
export const homeCondominium = dataIncome.home.condominium;
export const essentialExpenses = homeRent + homeCondominium;

export const incomeUsable = monthlyIncome - essentialExpenses;

export const companyAccounting = dataIncome.company.accounting;
export const companyTaxGPS = dataIncome.company.tax.gps;
export const companyTaxIRF = dataIncome.company.tax.irf;
export const companyTaxISS = dataIncome.company.tax.iss;
export const companyTaxPIS = dataIncome.company.tax.pis;
export const companyTaxesAmount =
  companyTaxGPS + companyTaxISS + companyTaxPIS + companyTaxIRF;
export const companyExpensesAmount = companyAccounting + companyTaxesAmount;

export const reserveEmergency = incomeUsable * 0.08;
export const reserveExtra = incomeUsable / 12;
export const reserveVacation = incomeUsable / 12;
export const reserveInvestments = incomeUsable * 0.1;
export const reserveAmount =
  reserveEmergency + reserveExtra + reserveVacation + reserveInvestments;

export const monthlyExpenses = companyExpensesAmount + reserveAmount;
export const monthlyExpensesAmount = essentialExpenses + monthlyExpenses;
export const monthlyBalance = monthlyIncome - monthlyExpensesAmount;

export const emergencyTarget = essentialExpenses * 6;
export const emergencyAccomplished = reserveEmergency * 2;
export const emergencyBalance = emergencyAccomplished - emergencyTarget;

export const incomeBalance = [
  {
    value: utils.calc.percent(monthlyExpensesAmount, monthlyIncome),
    label: message.monthly.expenses,
    color: 'red',
  },
  {
    value: utils.calc.percent(monthlyBalance, monthlyIncome),
    label: message.balance,
    color: 'aqua',
  },
];

export const monthlyExpensesSummary = [
  {
    value: utils.calc.percent(essentialExpenses, monthlyExpensesAmount),
    label: message.expenses.essential,
    color: colors[1],
  },
  {
    value: utils.calc.percent(companyExpensesAmount, monthlyExpensesAmount),
    label: message.amount.company.expenses,
    color: colors[2],
  },
  {
    value: utils.calc.percent(reserveAmount, monthlyExpensesAmount),
    label: message.reserve.financial,
    color: colors[3],
  },
];

export const companyExpenses = [
  {
    value: utils.calc.percent(companyAccounting, companyExpensesAmount),
    label: message.company.accounting,
    color: colors[1],
  },
  {
    value: utils.calc.percent(companyTaxesAmount, companyExpensesAmount),
    label: message.company.taxes,
    color: colors[2],
  },
];

export const companyTaxes = [
  {
    value: utils.calc.percent(companyTaxGPS, companyTaxesAmount),
    label: message.tax.gps,
    color: colors[1],
  },
  {
    value: utils.calc.percent(companyTaxISS, companyTaxesAmount),
    label: message.tax.iss,
    color: colors[2],
  },
  {
    value: utils.calc.percent(companyTaxPIS, companyTaxesAmount),
    label: message.tax.pis,
    color: colors[3],
  },
  {
    value: utils.calc.percent(companyTaxIRF, companyTaxesAmount),
    label: message.tax.irf,
    color: colors[4],
  },
];

export const financialReserve = [
  {
    value: utils.calc.percent(reserveEmergency, reserveAmount),
    label: message.reserve.emergency,
    color: colors[1],
  },
  {
    value: utils.calc.percent(reserveExtra, reserveAmount),
    label: message.reserve.vacation,
    color: colors[2],
  },
  {
    value: utils.calc.percent(reserveVacation, reserveAmount),
    label: message.reserve.extra,
    color: colors[3],
  },
  {
    value: utils.calc.percent(reserveInvestments, reserveAmount),
    label: message.reserve.investments,
    color: colors[4],
  },
];

export const emergencyPerformed = [
  {
    value: utils.calc.percent(emergencyAccomplished, emergencyTarget),
    label: message.investment.performed,
    color: 'spring',
  },
];

/* END OF FILE ============================================================== */
