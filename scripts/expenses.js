/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Expenses
    Description: Pàgina de controle de gastos
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
let toolbarContainer = document.querySelector('.js-toolbar');
let navigationContainer = component.create.container('nav', 'navigation');
toolbarContainer.append(
  component.toolbar.brand(message.global.menu.label.expenses, 'brand'),
  navigationContainer
);
component.toolbar.menu(navigationContainer, 'menu-link', 3);

// DASHBOARD -------------------------------------------------------------------
let containerDashboard = document.querySelector('.js-container-expenses');
containerDashboard.append(
  component.place.title(message.global.dashboard, 'grid')
);

// GENERAL STATEMENTS ------------------
containerDashboard.append(component.create.module('Container para dashboards'));

// PAYMENT SUMMARY ---------------------
let dashboardSection = component.create.section(
  message.global.summary.payment.method,
  'pie-chart'
);
containerDashboard.append(dashboardSection);
let sectionCardGrid = component.create.grid();
dashboardSection.append(sectionCardGrid);
info.expensesByMethods.forEach((expense) => {
  sectionCardGrid.append(
    component.card(
      2,
      expense.label,
      'brl',
      formatter.format.money(utils.sum.values(expense.value)),
      formatter.format.items(expense.value.length)
    )
  );
});
let sectionGridGraphic = component.create.grid('grid-graphics');
dashboardSection.append(sectionGridGraphic);
sectionGridGraphic.append(
  graphic.columns(
    message.global.summary.expenses.method,
    utils.modelData.graphicColumns(info.expensesByMethods)
  )
);

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
    message.global.summary.expenses.fi,
    utils.modelData.graphicColumns(info.expensesByFIs),
    2
  ),
  graphic.columns(
    message.global.summary.expenses.type,
    utils.modelData.graphicColumns(info.expensesByTypes),
    2
  ),
  graphic.columns(
    message.global.summary.expenses.category,
    utils.modelData.graphicColumns(info.expensesByCategories)
  )
);

// DETAIL GRAPHICS ---------------------
// .js-container-graphics

// SUMMARY ---------------------------------------------------------------------
let containerSummary = document.querySelector('.js-container-summary');
containerSummary.append(
  component.place.title(message.global.statement, 'receipt'),
  component.table(
    info.tbd_headerExpenses,
    utils.modelTableExpenses(info.expenses)
  )
);

// PROJECTION ------------------------------------------------------------------
// let containerProjection = document.querySelector('.js-container-projection');
// .js-container-projection

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
