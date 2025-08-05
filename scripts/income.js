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
// import * as graphic from './graphics.js';
import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// TOOLBAR ---------------------------------------------------------------------
let toolbarContainer = document.querySelector('.js-toolbar');
let navigationContainer = component.create.container('nav', 'navigation');
toolbarContainer.append(
  component.toolbar.brand(message.global.menu.label.income, 'brand'),
  navigationContainer
);
component.toolbar.menu(navigationContainer, 'menu-link', 1);

// DASHBOARD -------------------------------------------------------------------
let containerMonthlyIncome = document.querySelector('.js-container-income');
containerMonthlyIncome.append(
  component.place.title(message.income.monthly.earnings, 'wallet')
);

// MODULE INCOME -----------------------
let mainGrid = component.create.grid();
containerMonthlyIncome.append(mainGrid);
mainGrid.append(
  component.card(2, info.reporting.year, null, info.reporting.month),
  component.card(2, message.income.monthly.hour, null, info.incomeHours),
  component.card(
    2,
    message.income.monthly.value,
    'brl',
    formatter.format.money(info.incomeValue)
  ),
  component.card(
    2,
    message.income.monthly.income,
    'brl',
    formatter.format.money(info.incomeAmount)
  ),
  component.card(
    2,
    message.global.amount.monthly.expenses,
    'brl',
    formatter.format.money(info.monthlyObligation),
    null,
    'text-negative'
  ),
  component.card(
    2,
    message.global.balance,
    'brl',
    formatter.format.money(info.monthlyBalance)
  )
);
containerMonthlyIncome.append(
  component.barchart(message.income.monthly.balance, info.bcd_incomeBalance)
);
// TODO: adicionar gráfico de linhas para exibir renda ao longo do ano

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
    formatter.format.money(info.expensesEssential)
  ),
  component.card(
    3,
    message.global.amount.company.expenses,
    'brl',
    formatter.format.money(info.costsCompanyExpensesAmount)
  ),
  component.card(
    3,
    message.income.reserve.financial,
    'brl',
    formatter.format.money(info.reserveAmount)
  ),
  component.card(
    3,
    message.global.amount.monthly.expenses,
    'brl',
    formatter.format.money(info.monthlyObligation)
  )
);
// TODO: adicionar descrições no footer dos cards
// TODO: adicionar hint (acima/abaixo de N %) ao cartão Total em despesas
sectionIncomeShare.append(
  component.barchart(
    message.global.summary.monthly.expenses,
    info.bcd_monthlyExpensesSummary
  )
);

// MODULE COMPANY ----------------------
let moduleCompany = component.create.module(message.global.company.corporation);
sectionIncomeShare.append(moduleCompany);

let companySummaryGrid = component.create.grid();
moduleCompany.append(companySummaryGrid);
companySummaryGrid.append(
  component.card(
    4,
    message.global.company.accounting,
    'brl',
    formatter.format.money(info.costsCompanyAccounting)
  ),
  component.card(
    4,
    message.global.company.taxes,
    'brl',
    formatter.format.money(info.costsCompanyTaxesAmount)
  ),
  component.card(
    4,
    message.global.amount.company.expenses,
    'brl',
    formatter.format.money(
      utils.sum.amount(
        info.costsCompanyAccounting,
        info.costsCompanyTaxesAmount
      )
    )
  )
);
moduleCompany.append(
  component.barchart(
    message.global.amount.company.expenses,
    info.bcd_companyExpenses
  )
);

let companyTaxesGrid = component.create.grid();
moduleCompany.append(companyTaxesGrid);
companyTaxesGrid.append(
  component.card(
    2,
    message.global.company.tax.gps.abbr,
    'brl',
    formatter.format.money(info.costsCompanyTaxes.gps)
  ),
  component.card(
    2,
    message.global.company.tax.iss.abbr,
    'brl',
    formatter.format.money(info.costsCompanyTaxes.iss)
  ),
  component.card(
    2,
    message.global.company.tax.pis.abbr,
    'brl',
    formatter.format.money(info.costsCompanyTaxes.pis)
  ),
  component.card(
    2,
    message.global.company.tax.cof.abbr,
    'brl',
    formatter.format.money(info.costsCompanyTaxes.cof)
  ),
  component.card(
    2,
    message.global.company.tax.irf.abbr,
    'brl',
    formatter.format.money(info.costsCompanyTaxes.irf)
  ),
  component.card(
    2,
    message.global.company.tax.csl.abbr,
    'brl',
    formatter.format.money(info.costsCompanyTaxes.csl)
  )
);
moduleCompany.append(
  component.barchart(message.global.company.taxes, info.bcd_companyTaxes)
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
  component.barchart(message.income.cash.usable, info.bcd_expensesEssential),
  component.barchart(
    message.global.summary.reserve.share,
    info.bcd_financialReserve
  )
);

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
    message.global.balance,
    'brl',
    formatter.format.money(info.emergencyBalance),
    null,
    'text-negative'
  )
);
// TODO: adicionar cartão gastos essenciais
// TODO: adicionar descrições no footer dos cards
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
