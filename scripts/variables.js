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
// import { categories, fis, payments } from './messages.js';
// import * as dataExpenses from './fake-expenses.js';
import * as dataIncome from './fake-income.js';
import * as dataInvestment from './fake-investments.js';
// import * as component from './components.js';
// import * as formatter from './formatters.js';
import * as utils from './utils.js';
import * as getter from './getters.js';

// GLOBAL ----------------------------------------------------------------------

// INCOME ----------------------------------------------------------------------
export const monthlyIncome = dataIncome.monthly;

export const reportingYear = monthlyIncome.reporting.year;
export const reportingMonth = monthlyIncome.reporting.month;

export const monthlyHours = monthlyIncome.income.hours;
export const monthlyValue = monthlyIncome.income.value;

export const homeRent = monthlyIncome.expense.home.rent;
export const homeCondominium = monthlyIncome.expense.home.condominium;

export const companyTaxCOF = monthlyIncome.expense.company.tax.cof;
export const companyTaxCSL = monthlyIncome.expense.company.tax.csl;
export const companyTaxGPS = monthlyIncome.expense.company.tax.gps;
export const companyTaxIRF = monthlyIncome.expense.company.tax.irf;
export const companyTaxISS = monthlyIncome.expense.company.tax.iss;
export const companyTaxPIS = monthlyIncome.expense.company.tax.pis;
export const companyAccounting = monthlyIncome.expense.company.accounting;

export const monthlyIncomeAmount = monthlyHours * monthlyValue;

export const essentialExpenses = utils.sum.amount(homeRent, homeCondominium);
export const incomeUsable = monthlyIncomeAmount - essentialExpenses;

export const companyTaxesAmount = utils.sum.amount(
  companyTaxCOF,
  companyTaxCSL,
  companyTaxGPS,
  companyTaxIRF,
  companyTaxISS,
  companyTaxPIS
);
export const companyExpensesAmount = utils.sum.amount(
  companyAccounting,
  companyTaxesAmount
);

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

export const emergencyTarget = essentialExpenses * 6;
export const emergencyAccomplished = reserveEmergency * 2;
export const emergencyBalance = emergencyAccomplished - emergencyTarget;
// TODO: Remodelar emergencyAccomplished com dados mensais

export const monthlyExpensesAmount = utils.sum.amount(
  essentialExpenses,
  companyExpensesAmount,
  reserveAmount
);
export const monthlyBalance = monthlyIncomeAmount - monthlyExpensesAmount;

// INVESTMENTS -----------------------------------------------------------------
export const privatePension = dataInvestment.privatePension;
export const pensionInjectionAmount = utils.sum.values(
  getter.get.injection(privatePension)
);
export const pensionProfitsAmount = utils.sum.values(
  getter.get.profits(privatePension)
);

export const cdi = dataInvestment.cdi;
export const cdiInjectionAmount = utils.sum.values(getter.get.injection(cdi));
export const cdiProfitsAmount = utils.sum.values(getter.get.profits(cdi));

export const privateCR = dataInvestment.privateCredit;
export const privateCRInjectionAmount = utils.sum.values(
  getter.get.injection(privateCR)
);
export const privateCRProfitsAmount = utils.sum.values(
  getter.get.profits(privateCR)
);

export const fixedRate = dataInvestment.fixedRate;
export const fixedRateInjectionAmount = utils.sum.values(
  getter.get.injection(fixedRate)
);
export const fixedRateProfitsAmount = utils.sum.values(
  getter.get.profits(fixedRate)
);

export const realInterest = dataInvestment.realInterest;
export const realInterestInjectionAmount = utils.sum.values(
  getter.get.injection(realInterest)
);
export const realInterestProfitsAmount = utils.sum.values(
  getter.get.profits(realInterest)
);

export const multiAsset = dataInvestment.multiAsset;
export const multiAssetInjectionAmount = utils.sum.values(
  getter.get.injection(multiAsset)
);
export const multiAssetProfitsAmount = utils.sum.values(
  getter.get.profits(multiAsset)
);

export const stocks = dataInvestment.stocks;
export const stocksInjectionAmount = utils.sum.values(
  getter.get.injection(stocks)
);
export const stocksProfitsAmount = utils.sum.values(getter.get.profits(stocks));

export const international = dataInvestment.international;
export const internationalInjectionAmount = utils.sum.values(
  getter.get.injection(international)
);
export const internationalProfitsAmount = utils.sum.values(
  getter.get.profits(international)
);

export const foreignX = dataInvestment.foreignExchange;
export const foreignXInjectionAmount = utils.sum.values(
  getter.get.injection(foreignX)
);
export const foreignXProfitsAmount = utils.sum.values(
  getter.get.profits(foreignX)
);

export const protective = dataInvestment.protective;
export const protectiveInjectionAmount = utils.sum.values(
  getter.get.injection(protective)
);
export const protectiveProfitsAmount = utils.sum.values(
  getter.get.profits(protective)
);

export const crypto = dataInvestment.cryptoCurrencies;
export const cryptoInjectionAmount = utils.sum.values(
  getter.get.injection(crypto)
);
export const cryptoProfitsAmount = utils.sum.values(getter.get.profits(crypto));

export const incomeFixedInjectionAmount = utils.sum.amount(
  cdiInjectionAmount,
  privateCRInjectionAmount,
  fixedRateInjectionAmount,
  realInterestInjectionAmount
);
export const incomeFixedProfitsAmount = utils.sum.amount(
  cdiProfitsAmount,
  privateCRProfitsAmount,
  fixedRateProfitsAmount,
  realInterestProfitsAmount
);

export const incomeVariableInjectionAmount = utils.sum.amount(
  stocksInjectionAmount,
  internationalInjectionAmount,
  foreignXInjectionAmount
);
export const incomeVariableProfitsAmount = utils.sum.amount(
  stocksProfitsAmount,
  internationalProfitsAmount,
  foreignXProfitsAmount
);

export const lifeInsurance = dataInvestment.lifeInsurance;
export let lifeInsuranceInstallments = 0;
lifeInsurance.injection.forEach((item) => {
  lifeInsuranceInstallments += item.length;
});
export const lifeInsuranceInstallment = utils.sum.amount(
  lifeInsurance.composition.insurance.value,
  lifeInsurance.composition.funeral.value,
  lifeInsurance.composition.hospital.value
);
export let lifeInsuranceInjectionAmount = 0;
lifeInsurance.injection.forEach((item) => {
  lifeInsuranceInjectionAmount += utils.sum.values(item);
});

// EXPENSES --------------------------------------------------------------------
// CLASSROOM -------------------------------------------------------------------

// COMPONENT: BARCHART DATA [BCD_] ---------------------------------------------
// INCOME ------------------------------
export const bcd_incomeBalance = [
  {
    value: utils.calc.percent(monthlyExpensesAmount, monthlyIncomeAmount),
    label: message.amount.monthly.expenses,
    color: 'red',
  },
  {
    value: utils.calc.percent(monthlyBalance, monthlyIncomeAmount),
    label: message.balance,
    color: 'aqua',
  },
];

export const bcd_monthlyExpensesSummary = [
  {
    value: utils.calc.percent(essentialExpenses, monthlyExpensesAmount),
    label: message.income.expenses.essential,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(companyExpensesAmount, monthlyExpensesAmount),
    label: message.amount.company.expenses,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(reserveAmount, monthlyExpensesAmount),
    label: message.income.reserve.financial,
    color: utils.colors[2],
  },
];

export const bcd_companyExpenses = [
  {
    value: utils.calc.percent(companyAccounting, companyExpensesAmount),
    label: message.company.accounting,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(companyTaxesAmount, companyExpensesAmount),
    label: message.company.taxes,
    color: utils.colors[1],
  },
];

export const bcd_companyTaxes = [
  {
    value: utils.calc.percent(companyTaxGPS, companyTaxesAmount),
    label: message.company.tax.gps.abbr,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(companyTaxISS, companyTaxesAmount),
    label: message.company.tax.iss.abbr,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(companyTaxPIS, companyTaxesAmount),
    label: message.company.tax.pis.abbr,
    color: utils.colors[2],
  },
  {
    value: utils.calc.percent(companyTaxCOF, companyTaxesAmount),
    label: message.company.tax.cof.abbr,
    color: utils.colors[3],
  },
  {
    value: utils.calc.percent(companyTaxIRF, companyTaxesAmount),
    label: message.company.tax.irf.abbr,
    color: utils.colors[4],
  },
  {
    value: utils.calc.percent(companyTaxCSL, companyTaxesAmount),
    label: message.company.tax.csl.abbr,
    color: utils.colors[5],
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

// INVESTMENTS -------------------------
export const bcd_incomeFixed = [
  {
    value: utils.calc.percent(cdiProfitsAmount, incomeFixedProfitsAmount),
    label: message.investment.category.cdi,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(privateCRProfitsAmount, incomeFixedProfitsAmount),
    label: message.investment.category.private.credit,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(fixedRateProfitsAmount, incomeFixedProfitsAmount),
    label: message.investment.category.fixed.rate,
    color: utils.colors[2],
  },
  {
    value: utils.calc.percent(
      realInterestProfitsAmount,
      incomeFixedProfitsAmount
    ),
    label: message.investment.category.real.interest.rate,
    color: utils.colors[3],
  },
];

export const bcd_incomeVariable = [
  {
    value: utils.calc.percent(stocksProfitsAmount, incomeVariableProfitsAmount),
    label: message.investment.category.stocks,
    color: utils.colors[0],
  },
  {
    value: utils.calc.percent(
      internationalProfitsAmount,
      incomeVariableProfitsAmount
    ),
    label: message.investment.category.international,
    color: utils.colors[1],
  },
  {
    value: utils.calc.percent(
      foreignXProfitsAmount,
      incomeVariableProfitsAmount
    ),
    label: message.investment.category.foreign.exchange,
    color: utils.colors[2],
  },
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

// COMPONENT: TABLE DATA [TBD_] ------------------------------------------------
export const tbd_headerInvestments = [
  message.asset,
  message.operator,
  message.profile,
  message.risk,
  message.share.number,
  message.injection,
  message.profits,
  message.performance,
];

// COMPONENT: GRAPHIC LINE DATA [GLD_] -----------------------------------------
// COMPONENT: GRAPHIC BAR VERTICAL DATA [GVD_] ---------------------------------
// COMPONENT: GRAPHIC BAR HORIZONTAL DATA [GHD_] -------------------------------

// RELATED CONTENT -------------------------------------------------------------
export const fis = message.fis;

/* END OF FILE ============================================================== */
