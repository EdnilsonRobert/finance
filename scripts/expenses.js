/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Expenses
    Description: Pàgina de controle de gastos
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
import * as info from './variables.js';
import * as component from './components.js';
// import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// TOOLBAR ---------------------------------------------------------------------
let toolbarContainer = document.querySelector('.js-toolbar');
toolbarContainer.append(
  component.toolbar.brand(message.global.menu.label.expenses, 'brand')
);
let navigationContainer = component.create.container('nav', 'navigation');
toolbarContainer.append(navigationContainer);
component.toolbar.menu(navigationContainer, 'menu-link', 3);

// DASHBOARD -------------------------------------------------------------------
let containerDashboard = document.querySelector('.js-container-expenses');
containerDashboard.append(component.place.title(message.dashboard, 'grid'));
containerDashboard.append(component.create.module('Container para dashboards'));
// .js-container-expenses
// GENERAL STATEMENTS ------------------
// PAYMENT SUMMARY ---------------------

// GRAPHICS --------------------------------------------------------------------
// .js-container-graphics
// MAIN GRAPHICS -----------------------
// DETAIL GRAPHICS ---------------------

// SUMMARY ---------------------------------------------------------------------
let containerSummary = document.querySelector('.js-container-summary');
containerSummary.append(component.place.title(message.statement, 'receipt'));
containerSummary.append(
  component.table(
    info.tbd_headerExpenses,
    utils.model.data.table.expenses(info.expenses)
  )
);

// PROJECTION ------------------------------------------------------------------
// .js-container-projection

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
