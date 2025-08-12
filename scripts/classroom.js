/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Classroom
    Description: Glossário de investimentos
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
// import * as info from './variables.js';
import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// TOOLBAR ---------------------------------------------------------------------
let containerToolbar = document.querySelector('.js-toolbar');
let containerNavigation = component.create.container('nav', 'navigation');
containerToolbar.append(
  component.toolbar.brand(message.global.menu.label.classroom, 'brand'),
  containerNavigation
);
component.toolbar.menu(containerNavigation, 'menu-link', 4);

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
