/** ============================================================================
    Page: Formatters | Controle de finanças
    Description: Arquivo de formatadores de texto
============================================================================= */

import { messages as message } from './messages.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

export let format = {
  floatNumber: (value, digits) => parseFloat(value).toFixed(digits),
  items: (value) =>
    value === 0
      ? message.global.items.none
      : value === 1
      ? `${value} ${message.global.items.singular}`
      : `${value} ${message.global.items.plural}`,
  money: (value) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
      .format(value)
      .replace(message.global.sign.brl, '')
      .trim();
  },
  moneyBRL: (value) => `${message.global.sign.brl} ${format.money(value)}`,
  paddingZero: (n) => (n < 10 ? `0${n}` : n),
};

/* END OF FILE ============================================================== */
