/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Expenses
    Description: Página de controle de gastos
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
  component.toolbar.brand(message.global.menu.label.expenses, 'brand'),
  containerNavigation
);
component.toolbar.menu(containerNavigation, 'menu-link', 2);

// DASHBOARD -------------------------------------------------------------------
let containerExpenses = document.querySelector('.js-container-expenses');
containerExpenses.append(
  component.place.title(message.global.dashboard, 'grid')
);

// =============================================================================
// module: proventos
// grid: data, horas trabalhadas, valor/hora, renda, despesas, saldo
// barchart: despesas, saldo
// module: distribuição de renda
// barchart: despesas essenciais, gastos de empresa, reserva financeira
// module: saldo
// grid: total em receita, total em gastos, total em investimmentos, saldo
// barchart: total em gastos, total em investimentos
// =============================================================================

// GENERAL STATEMENTS ------------------
let gridEXpenses = component.create.grid();
containerExpenses.append(gridEXpenses);
gridEXpenses.append(
  component.card(
    3,
    message.global.monthly.income,
    'brl',
    formatter.format.money(info.incomeAmount),
    'AINDA SEM RÓTULO'
    // TODO: [card] alterar rótulo de cartão
  ),
  component.card(
    3,
    message.global.amount.monthly.expenses,
    'brl',
    formatter.format.money(info.expensesAmount),
    'AINDA SEM RÓTULO',
    // TODO: [card] alterar rótulo de cartão
    'text-negative'
  ),
  component.card(
    3,
    message.global.investment.monthly,
    'brl',
    formatter.format.money(info.monthlyInvestment),
    info.monthlyInvestment <= info.reserveInvestments
      ? `${message.global.investment.expectation} ${formatter.format.moneyBRL(
          info.reserveInvestments
        )}`
      : message.global.investment.success,
    'text-gold'
    // TODO: [model/data] filtrar investimentos que serão mostrados (remover seguro de vida)
  ),
  component.card(
    3,
    message.global.balance,
    'brl',
    formatter.format.money(info.expensesBalance),
    'AINDA SEM RÓTULO',
    // TODO: [card] alterar rótulo de cartão
    info.expensesBalance < 0 ? 'text-negative' : 'text-positive'
  )
  // TODO: [card] corrigir rótulos de cartões e mover strings para messages
);
containerExpenses.append(
  graphic.barchart(message.global.monthly.balance, info.bcd_monthlyExpenses)
);
// TODO: [graphic]: adicionar graphic line (receitas, gastos e investimentos)

// GRAPHICS --------------------------------------------------------------------
let containerGraphics = document.querySelector('.js-container-graphics');
containerGraphics.append(
  component.place.title(message.global.graphics, 'stats-chart')
);

// MAIN GRAPHICS -----------------------
let gridGraphics = component.create.grid('grid-graphics');
containerGraphics.append(gridGraphics);
gridGraphics.append(
  graphic.columns(
    message.global.summary.expenses.method,
    utils.modelData.graphicColumns(info.expensesByMethods)
  ),
  graphic.columns(
    message.global.summary.expenses.fi,
    utils.modelData.graphicColumns(info.expensesByFIs),
    2
  ),
  graphic.columns(
    message.global.summary.expenses.type,
    utils.modelData.graphicColumns(info.expensesByTypes),
    2
  )
);

// PAYMENT CATEGORIES SUMMARY ----------
let sectionSummary = component.create.section(
  message.global.summary.payment.category,
  'pie-chart'
);
containerGraphics.append(sectionSummary);

let gridGraphicCategories = component.create.grid('grid-graphics');
sectionSummary.append(gridGraphicCategories);
gridGraphicCategories.append(
  graphic.columns(
    message.global.summary.expenses.category,
    utils.modelData.graphicColumns(info.expensesByCategories)
  ),
  graphic.bars(info.gbd_habitation),
  graphic.bars(info.gbd_food),
  graphic.bars(info.gbd_home),
  graphic.bars(info.gbd_culture),
  graphic.bars(info.gbd_lifestyle),
  graphic.bars(info.gbd_clothing),
  graphic.bars(info.gbd_transportation),
  graphic.bars(info.gbd_professional),
  graphic.bars(info.gbd_subscription),
  graphic.bars(info.gbd_uncategorized),
  graphic.bars(info.gbd_coffee, 'brown'),
  graphic.bars(info.gbd_investment, 'gold')
);

// SUMMARY ---------------------------------------------------------------------
let containerSummary = document.querySelector('.js-container-summary');
containerSummary.append(
  component.place.title(message.global.statement, 'receipt'),
  component.table(
    info.tbd_headerExpenses,
    utils.modelData.table(info.expenses, 'EXP')
  )
);

/*
// PROJECTION ------------------------------------------------------------------
// let containerProjection = document.querySelector('.js-container-projection');
// .js-container-projection
// module: projeção de gastos em cartão de crédito para o próximo mês
*/

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
