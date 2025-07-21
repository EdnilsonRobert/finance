/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Home
    Description: Página inicial do projeto
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
import * as component from './components.js';

let toolbarContainer = document.querySelector('.js-toolbar');
toolbarContainer.append(
  component.toolbar.brand(message.global.project.name, 'brand')
);

let navigationContainer = document.querySelector('.js-navigation');
component.toolbar.menu(navigationContainer, 'button-square');

/* END OF FILE ============================================================== */
