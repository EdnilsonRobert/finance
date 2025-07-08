/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Home
    Description: Página inicial do projeto
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
import * as info from './variables.js';
import * as component from './components.js';

let toolbarContainer = document.querySelector('.js-toolbar');
let navigationContainer = document.querySelector('.js-navigation');

toolbarContainer.append(
  component.toolbar.brand(message.global.project.name, 'brand')
);

info.menu.forEach((item, index) => {
  navigationContainer.append(
    component.toolbar.menu(item, 'button-square', index)
  );
});

/* END OF FILE ============================================================== */
