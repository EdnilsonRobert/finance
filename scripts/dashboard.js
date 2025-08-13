/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Dashboard
    Description: Dashboard principal da página de investimentos
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
import * as info from './variables.js';
import * as component from './components.js';
import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// TOOLBAR ---------------------------------------------------------------------
let containerToolbar = document.querySelector('.js-toolbar');
let containerNavigation = component.create.container('nav', 'navigation');
containerToolbar.append(
  component.toolbar.brand(message.global.menu.label.investments, 'brand'),
  containerNavigation
);
component.toolbar.menu(containerNavigation, 'menu-link', 3);

// INVESTMENTS DASHBOARD -------------------------------------------------------
let containerDashboard = document.querySelector('.js-container-investments');
containerDashboard.append(
  component.place.title(message.global.dashboard, 'grid')
);

containerDashboard.append(graphic.lines(info.gld_economic));

/* END OF FILE ============================================================== */
