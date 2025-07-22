/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Income
    Description: Página de entradas financeiras
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
import * as info from './variables.js';
import * as component from './components.js';
import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// TOOLBAR ---------------------------------------------------------------------
let toolbarContainer = document.querySelector('.js-toolbar');
toolbarContainer.append(
  component.toolbar.brand(message.global.menu.label.income, 'brand')
);
let navigationContainer = component.create.container('nav', 'navigation');
toolbarContainer.append(navigationContainer);
component.toolbar.menu(navigationContainer, 'menu-link', 1);

// DASHBOARD -------------------------------------------------------------------
let containerMonthlyIncome = document.querySelector('.js-container-income');

// MODULE INCOME -----------------------
containerMonthlyIncome.append(
  component.place.title(message.income.monthly.earnings, 'wallet')
);
let mainGrid = component.create.grid();
containerMonthlyIncome.append(mainGrid);
mainGrid.append(
  component.card(2, info.reportingYear, null, info.reportingMonth),
  component.card(2, message.income.monthly.hour, null, info.monthlyHours),
  component.card(
    2,
    message.income.monthly.value,
    'brl',
    formatter.format.money(info.monthlyValue)
  ),
  component.card(
    2,
    message.income.monthly.income,
    'brl',
    formatter.format.money(info.monthlyIncomeAmount)
  ),
  component.card(
    2,
    message.amount.monthly.expenses,
    'brl',
    formatter.format.money(info.monthlyExpensesAmount),
    null,
    'text-negative'
  ),
  component.card(
    2,
    message.balance,
    'brl',
    formatter.format.money(info.monthlyBalance)
  )
);
containerMonthlyIncome.append(
  component.barchart(message.income.monthly.balance, info.bcd_incomeBalance)
);
// TODO: Adicionar gráfico de linhas para exibir renda ao longo do ano

// BREAKDOWN -------------------------------------------------------------------
let sectionIncomeShare = component.create.container('div', 'container-section');
containerMonthlyIncome.append(sectionIncomeShare);
sectionIncomeShare.append(
  component.place.title(message.income.share, 'pie-chart')
);

// MODULE INCOME SUMMARY ---------------
let summaryGrid = component.create.grid();
sectionIncomeShare.append(summaryGrid);
summaryGrid.append(
  component.card(
    3,
    message.income.expenses.essential,
    'brl',
    formatter.format.money(info.essentialExpenses)
  ),
  component.card(
    3,
    message.amount.company.expenses,
    'brl',
    formatter.format.money(info.companyExpensesAmount)
  ),
  component.card(
    3,
    message.income.reserve.financial,
    'brl',
    formatter.format.money(info.reserveAmount)
  ),
  component.card(
    3,
    message.amount.monthly.expenses,
    'brl',
    formatter.format.money(info.monthlyExpensesAmount)
  )
);
// TODO: Adicionar descrições no footer dos cards
// TODO: Adicionar hint (acima/abaixo de N %) ao cartão Total em despesas
sectionIncomeShare.append(
  component.barchart(
    message.summary.monthly.expenses,
    info.bcd_monthlyExpensesSummary
  )
);

// MODULE COMPANY ----------------------
let moduleCompany = component.create.module(message.company.corporation);
sectionIncomeShare.append(moduleCompany);
let companySummaryGrid = component.create.grid();
moduleCompany.append(companySummaryGrid);
companySummaryGrid.append(
  component.card(
    4,
    message.company.accounting,
    'brl',
    formatter.format.money(info.companyAccounting)
  ),
  component.card(
    4,
    message.company.taxes,
    'brl',
    formatter.format.money(info.companyTaxesAmount)
  ),
  component.card(
    4,
    message.amount.company.expenses,
    'brl',
    formatter.format.money(info.companyExpensesAmount)
  )
);
moduleCompany.append(
  component.barchart(message.amount.company.expenses, info.bcd_companyExpenses)
);

let companyTaxesGrid = component.create.grid();
moduleCompany.append(companyTaxesGrid);
companyTaxesGrid.append(
  component.card(
    2,
    message.company.tax.gps.abbr,
    'brl',
    formatter.format.money(info.companyTaxGPS)
  ),
  component.card(
    2,
    message.company.tax.iss.abbr,
    'brl',
    formatter.format.money(info.companyTaxISS)
  ),
  component.card(
    2,
    message.company.tax.pis.abbr,
    'brl',
    formatter.format.money(info.companyTaxPIS)
  ),
  component.card(
    2,
    message.company.tax.cof.abbr,
    'brl',
    formatter.format.money(info.companyTaxCOF)
  ),
  component.card(
    2,
    message.company.tax.irf.abbr,
    'brl',
    formatter.format.money(info.companyTaxIRF)
  ),
  component.card(
    2,
    message.company.tax.csl.abbr,
    'brl',
    formatter.format.money(info.companyTaxCSL)
  )
);
moduleCompany.append(
  component.barchart(message.company.taxes, info.bcd_companyTaxes)
);

// MODULE RESERVE ----------------------
let moduleReserve = component.create.module(message.income.reserve.financial);
sectionIncomeShare.append(moduleReserve);
let reserveGrid = component.create.grid();
moduleReserve.append(reserveGrid);
reserveGrid.append(
  component.card(
    3,
    message.income.reserve.emergency,
    'brl',
    formatter.format.money(info.reserveEmergency),
    message.income.reserve.description.emergency
  ),
  component.card(
    3,
    message.income.reserve.vacation,
    'brl',
    formatter.format.money(info.reserveVacation),
    message.income.reserve.description.vacation
  ),
  component.card(
    3,
    message.income.reserve.extra,
    'brl',
    formatter.format.money(info.reserveExtra),
    message.income.reserve.description.extra
  ),
  component.card(
    3,
    message.income.reserve.investments,
    'brl',
    formatter.format.money(info.reserveInvestments),
    message.income.reserve.description.investments,
    'text-gold'
  )
);
moduleReserve.append(
  component.barchart(message.summary.reserve.share, info.bcd_financialReserve)
);
// TODO: Adicionar barchart mostrando a divisão essencial/utilizável

// MODULE EMERGENCY --------------------
let moduleEmergency = component.create.module(message.income.emergency.fund);
sectionIncomeShare.append(moduleEmergency);
let emergencyGrid = component.create.grid();
moduleEmergency.append(emergencyGrid);
emergencyGrid.append(
  component.card(
    4,
    message.income.emergency.target,
    'brl',
    formatter.format.money(info.emergencyTarget)
  ),
  component.card(
    4,
    message.income.emergency.accomplished,
    'brl',
    formatter.format.money(info.emergencyAccomplished)
  ),
  component.card(
    4,
    message.balance,
    'brl',
    formatter.format.money(info.emergencyBalance),
    null,
    'text-negative'
  )
);
// TODO: Adicionar cartão Gastos essenciais
// TODO: Adicionar descrições no footer dos cards
moduleEmergency.append(
  component.barchart(
    message.income.investment.performed,
    info.bcd_emergencyPerformed
  )
);

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
