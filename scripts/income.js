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
import * as graphic from './graphics.js';
import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// TOOLBAR ---------------------------------------------------------------------
let containerToolbar = document.querySelector('.js-toolbar');
let containerNavigation = component.create.container('nav', 'navigation');
containerToolbar.append(
  component.toolbar.brand(message.global.menu.label.income, 'brand'),
  containerNavigation
);
component.toolbar.menu(containerNavigation, 'menu-link', 1);

// DASHBOARD -------------------------------------------------------------------
let containerIncome = document.querySelector('.js-container-income');
containerIncome.append(
  component.place.title(message.income.earnings, 'wallet')
);

// MODULE INCOME -----------------------
let gridIncome = component.create.grid();
containerIncome.append(gridIncome);
gridIncome.append(
  component.card(2, info.reporting.year, null, info.reporting.month),
  component.card(2, message.income.reporting.hour, null, info.incomeHours),
  component.card(
    2,
    message.income.reporting.value,
    'brl',
    formatter.format.money(info.incomeValue)
  ),
  component.card(
    2,
    message.global.monthly.income,
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
    formatter.format.money(info.monthlyBalance),
    null,
    info.monthlyBalance >= 0 ? 'text-positive' : 'text-negative'
  )
);
containerIncome.append(
  graphic.barchart(
    message.global.monthly.balance,
    utils.modelData.barchartEXpenses(info.bcd_incomeBalance, ['red', 'spring'])
  )
);
// TODO: [graphic] adicionar gráfico de linhas para exibir renda ao longo do ano

// BREAKDOWN -------------------------------------------------------------------
let sectionBreakdown = component.create.container('div', 'container-section');
containerIncome.append(sectionBreakdown);
sectionBreakdown.append(
  component.place.title(message.income.share, 'pie-chart')
);

// INCOME SUMMARY ----------------------
let gridSummaryIncome = component.create.grid();
sectionBreakdown.append(gridSummaryIncome);
gridSummaryIncome.append(
  component.card(
    3,
    message.income.cash.essential,
    'brl',
    formatter.format.money(info.expensesEssential)
  ),
  component.card(
    3,
    message.global.company.obligation,
    'brl',
    formatter.format.money(info.companyObligations)
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
  // TODO: [card] adicionar descrições no footer dos cards
  // TODO: [card] adicionar hint (acima/abaixo de N %) ao cartão Total em despesas
);
sectionBreakdown.append(
  graphic.barchart(
    message.global.summary.monthly.expenses,
    utils.modelData.barchartEXpenses(info.bcd_monthlyExpensesSummary)
  )
);

// MODULE COMPANY ----------------------
let moduleCompany = component.create.module(message.global.company.corporation);
sectionBreakdown.append(moduleCompany);

let gridSummaryCompany = component.create.grid();
moduleCompany.append(gridSummaryCompany);
gridSummaryCompany.append(
  component.card(
    3,
    message.global.company.accounting,
    'brl',
    formatter.format.money(utils.sum.expensesAmount(info.companyAccounting)),
    message.global.company.expenses.accounting
  ),
  component.card(
    3,
    message.global.company.taxes,
    'brl',
    formatter.format.money(utils.sum.expensesAmount(info.companyTaxes)),
    message.global.company.expenses.taxes
  ),
  component.card(
    3,
    message.global.amount.company.expenses,
    'brl',
    formatter.format.money(info.companyObligations),
    message.global.company.expenses.obligations
  ),
  component.card(
    3,
    message.global.company.other.expenses,
    'brl',
    formatter.format.money(info.companyOtherExpenses),
    message.global.company.expenses.others
  )
);
moduleCompany.append(
  graphic.barchart(
    message.global.summary.company.obligations,
    utils.modelData.barchartEXpenses(info.bcd_companyExpenses)
  )
);

let gridCompanyTaxes = component.create.grid();
moduleCompany.append(gridCompanyTaxes);
info.companyTaxes.forEach((tax) => {
  gridCompanyTaxes.append(
    component.card(2, tax.label, 'brl', formatter.format.money(tax.value))
  );
});
moduleCompany.append(
  graphic.barchart(
    message.global.company.taxes,
    utils.modelData.barchartEXpenses(info.companyTaxes)
  )
);

// MODULE RESERVE ----------------------
let moduleReserve = component.create.module(message.income.reserve.financial);
sectionBreakdown.append(moduleReserve);

moduleReserve.append(
  graphic.barchart(
    message.global.monthly.balance,
    utils.modelData.barchartEXpenses(info.bcd_expensesEssential, [
      'red',
      'spring',
    ])
  )
);

let gridReserve = component.create.grid();
moduleReserve.append(gridReserve);
gridReserve.append(
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
    `${
      message.income.reserve.description.vacation
    }: ${formatter.format.moneyBRL(info.incomeTarget.vacation)}`
  ),
  component.card(
    3,
    message.income.reserve.extra,
    'brl',
    formatter.format.money(info.reserveExtra),
    `${message.income.reserve.description.extra}: ${formatter.format.moneyBRL(
      info.incomeTarget.extra
    )}`
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
  graphic.barchart(
    message.global.summary.reserve.share,
    utils.modelData.barchartEXpenses(info.bcd_financialReserve)
  )
);

let gridEmergency = component.create.grid();
moduleReserve.append(gridEmergency);
gridEmergency.append(
  component.card(
    3,
    message.income.cash.essential,
    'brl',
    formatter.format.money(info.expensesEssential),
    message.income.emergency.description.essential,
    'text-negative'
  ),
  component.card(
    3,
    message.income.emergency.target,
    'brl',
    formatter.format.money(info.emergencyTarget),
    message.income.emergency.description.target
  ),
  component.card(
    3,
    message.income.emergency.accomplished,
    'brl',
    formatter.format.money(info.emergencyAccomplished),
    message.income.emergency.description.accomplished
  ),
  component.card(
    3,
    message.global.balance,
    'brl',
    formatter.format.money(Math.abs(info.emergencyBalance)),
    info.emergencyBalance > 0
      ? message.income.emergency.description.balance.negative
      : message.income.emergency.description.balance.positive,
    info.emergencyBalance > 0 ? 'text-negative' : 'text-positive'
  )
);
moduleReserve.append(
  graphic.barchart(message.income.emergency.fund, info.bcd_emergencyPerformed)
);

// INVESTMENTS CALCULATOR --------------
let moduleCalculator = component.create.module(
  message.global.investments.calculator
);
sectionBreakdown.append(moduleCalculator);

let gridCalculator = component.create.grid();
moduleCalculator.append(gridCalculator);
gridCalculator.append(
  component.card(
    3,
    message.global.investments.target,
    'brl',
    formatter.format.money(info.reserveInvestments),
    message.global.investments.target,
    'text-gold'
  ),
  component.card(
    3,
    message.investments.share.label.privatePension,
    'brl',
    formatter.format.money(
      info.reserveInvestments * utils.indexes.investments.privatePension
    ),
    message.investments.share.description.privatePension
  ),
  component.card(
    3,
    message.investments.share.label.portfolio,
    'brl',
    formatter.format.money(
      info.reserveInvestments * utils.indexes.investments.portfolio
    ),
    message.investments.share.description.portfolio
  ),
  component.card(
    3,
    message.investments.share.label.cryptocurrencies,
    'brl',
    formatter.format.money(
      info.reserveInvestments * utils.indexes.investments.cryptocurrencies
    ),
    message.investments.share.description.cryptocurrencies
  )
);

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
