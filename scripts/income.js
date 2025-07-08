/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Income
    Description: Página de entradas financeiras
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
import * as info from './variables.js';
import * as component from './components.js';
import * as formatter from './formatters.js';

// TOOLBAR ---------------------------------------------------------------------
let toolbarContainer = document.querySelector('.js-toolbar');
toolbarContainer.append(
  component.toolbar.brand(message.global.menu.label.income, 'brand')
);

let navigationContainer = document.createElement('nav');
navigationContainer.classList.add('navigation');
info.menu.forEach((item, index) => {
  navigationContainer.append(
    component.toolbar.menu(item, 'menu-link', index, 1)
  );
});
toolbarContainer.append(navigationContainer);

// DASHBOARD -------------------------------------------------------------------
let incomeContainer = document.querySelector('.js-container-income');

let sectionIncomeEarnings = component.create.section(message.income.earnings);
let sectionIncomeShare = component.create.section(message.income.share);

incomeContainer.append(sectionIncomeEarnings, sectionIncomeShare);

let moduleIncome = component.create.module(message.monthly.income);
let moduleIncomeSummary = component.create.module(
  message.summary.monthly.expenses
);
let moduleCompany = component.create.module(message.company.corporation);
let moduleReserve = component.create.module(message.reserve.financial);
let moduleEmergency = component.create.module(message.emergency.fund);

sectionIncomeEarnings.append(moduleIncome);

sectionIncomeShare.append(
  moduleIncomeSummary,
  moduleCompany,
  moduleReserve,
  moduleEmergency
);

// MODULE INCOME -----------------------
let mainGrid = component.create.cardGrid();
moduleIncome.append(mainGrid);

mainGrid.append(
  component.card(2, 'Agosto', null, '05'),
  component.card(2, message.monthly.hour, null, info.monthlyHour),
  component.card(
    2,
    message.monthly.value,
    'brl',
    formatter.formatMoney(info.monthlyValue)
  ),
  component.card(
    2,
    message.monthly.income,
    'brl',
    formatter.formatMoney(info.monthlyIncome)
  ),
  component.card(
    2,
    message.monthly.expenses,
    'brl',
    formatter.formatMoney(info.monthlyExpensesAmount),
    null,
    'text-negative'
  ),
  component.card(
    2,
    message.balance,
    'brl',
    formatter.formatMoney(info.monthlyBalance)
  )
);

moduleIncome.append(
  component.barchart(message.monthly.balance, info.incomeBalance)
);

// MODULE INCOME SUMMARY ---------------
let summaryGrid = component.create.cardGrid();
moduleIncomeSummary.append(summaryGrid);

summaryGrid.append(
  component.card(
    3,
    message.expenses.essential,
    'brl',
    formatter.formatMoney(info.essentialExpenses)
  ),
  component.card(
    3,
    message.amount.company.expenses,
    'brl',
    formatter.formatMoney(info.companyExpensesAmount)
  ),
  component.card(
    3,
    message.reserve.financial,
    'brl',
    formatter.formatMoney(info.reserveAmount)
  ),
  component.card(
    3,
    message.amount.expenses,
    'brl',
    formatter.formatMoney(info.monthlyExpensesAmount)
  )
);

moduleIncomeSummary.append(
  component.barchart(message.monthly.expenses, info.monthlyExpensesSummary)
);

// MODULE COMPANY ----------------------
let companySummaryGrid = component.create.cardGrid();
moduleCompany.append(companySummaryGrid);

companySummaryGrid.append(
  component.card(
    4,
    message.company.accounting,
    'brl',
    formatter.formatMoney(info.companyAccounting)
  ),
  component.card(
    4,
    message.company.taxes,
    'brl',
    formatter.formatMoney(info.companyTaxesAmount)
  ),
  component.card(
    4,
    message.amount.expenses,
    'brl',
    formatter.formatMoney(info.companyExpensesAmount)
  )
);

moduleCompany.append(
  component.barchart(message.amount.company.expenses, info.companyExpenses)
);

let companyTaxesGrid = component.create.cardGrid();
moduleCompany.append(companyTaxesGrid);

companyTaxesGrid.append(
  component.card(
    3,
    message.tax.gps,
    'brl',
    formatter.formatMoney(info.companyTaxGPS)
  ),
  component.card(
    3,
    message.tax.iss,
    'brl',
    formatter.formatMoney(info.companyTaxISS)
  ),
  component.card(
    3,
    message.tax.pis,
    'brl',
    formatter.formatMoney(info.companyTaxPIS)
  ),
  component.card(
    3,
    message.tax.irf,
    'brl',
    formatter.formatMoney(info.companyTaxIRF)
  )
);

moduleCompany.append(
  component.barchart(message.company.taxes, info.companyTaxes)
);

// MODULE RESERVE ----------------------
let reserveGrid = component.create.cardGrid();
moduleReserve.append(reserveGrid);

reserveGrid.append(
  component.card(
    3,
    message.reserve.emergency,
    'brl',
    formatter.formatMoney(info.reserveEmergency),
    message.reserve.description.emergency
  ),
  component.card(
    3,
    message.reserve.vacation,
    'brl',
    formatter.formatMoney(info.reserveVacation),
    message.reserve.description.vacation
  ),
  component.card(
    3,
    message.reserve.extra,
    'brl',
    formatter.formatMoney(info.reserveExtra),
    message.reserve.description.extra
  ),
  component.card(
    3,
    message.reserve.investments,
    'brl',
    formatter.formatMoney(info.reserveInvestments),
    message.reserve.description.investments
  )
);

moduleReserve.append(
  component.barchart(message.summary.reserve.share, info.financialReserve)
);

// MODULE EMERGENCY --------------------
let emergencyGrid = component.create.cardGrid();
moduleEmergency.append(emergencyGrid);

emergencyGrid.append(
  component.card(
    4,
    message.emergency.target,
    'brl',
    formatter.formatMoney(info.emergencyTarget)
  ),
  component.card(
    4,
    message.emergency.accomplished,
    'brl',
    formatter.formatMoney(info.emergencyAccomplished)
  ),
  component.card(
    4,
    message.balance,
    'brl',
    formatter.formatMoney(info.emergencyBalance),
    null,
    'text-negative'
  )
);

moduleEmergency.append(
  component.barchart(message.investment.performed, info.emergencyPerformed)
);

/* END OF FILE ============================================================== */
