/** ============================================================================
    Page: Formatters | Controle de finanças
    Description: Arquivo de formatadores de texto
============================================================================= */

import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

export let format = {
  floatNumber: (value, digits) => parseFloat(value).toFixed(digits),
  money: (value) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
      .format(value)
      .replace(message.global.sign.brl, '')
      .trim();
  },
};

/* END OF FILE ============================================================== */
