/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Dashboard
    Description: Dashboard principal da página de investimentos
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
let toolbarContainer = document.querySelector('.js-toolbar');
let navigationContainer = component.create.container('nav', 'navigation');
toolbarContainer.append(
  component.toolbar.brand(message.global.menu.label.investments, 'brand'),
  navigationContainer
);
component.toolbar.menu(navigationContainer, 'menu-link', 2);

// INVESTMENTS DASHBOARD -------------------------------------------------------
let containerDashboard = document.querySelector('.js-container-investments');
containerDashboard.append(
  component.place.title(message.global.dashboard, 'grid')
);
containerDashboard.append(component.create.module('Container para dashboards'));

/* END OF FILE ============================================================== */
