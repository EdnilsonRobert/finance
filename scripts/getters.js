/** ============================================================================
    Page: Getters | Controle de finanças
    Description: Arquivo de funções para captura e filtro de dados
============================================================================= */

import { messages as message } from './messages.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// GLOBAL ----------------------------------------------------------------------

// INCOME ----------------------------------------------------------------------

// EXPENSES --------------------------------------------------------------------
export let getExpenses = {
  byKey: (attribute, key, expenses) => {
    return expenses.filter((obj) => obj[attribute] === key);
  },
  groupedBy: (attribute, expenses) => {
    const headers = Object.values(message.payments[attribute]);
    let result = [];
    headers.forEach((item) => {
      let values = expenses
        .filter((obj) => obj[attribute] === item)
        .map((obj) => obj.value);
      result.push({
        label: item,
        value: values,
      });
    });
    return result;
  },
};

// INVESTMENTS -----------------------------------------------------------------
export let getTransactions = {
  byKey: (attribute, key, transactions) => {
    return transactions.filter((transaction) => transaction[attribute] === key);
  },
  injection: (data) => {
    let transaction = data.map((obj) => utils.sum.values(obj.injection));
    return utils.sum.values(transaction);
  },
  profits: (data) => {
    let transaction = data.map((obj) => obj.profits);
    return utils.sum.values(transaction);
  },
};

/* END OF FILE ============================================================== */
