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

// INVESTMENTS -----------------------------------------------------------------
export let getTransactions = {
  amount: (data) =>
    data.reduce((acc, item) => {
      return acc + item.profits;
    }, 0),
  injection: (data) => data.map((item) => utils.sum.values(item.injection)),
  profits: (data) => data.map((item) => item.profits),
};

// EXPENSES --------------------------------------------------------------------
export let getExpensesAmount = (expenses) => {
  expenses.reduce((acc, obj) => {
    return acc + obj.value;
  }, 0);
};

export let getExpensesBy = (attribute, expenses) => {
  const headers = Object.values(message.payments[attribute]);
  let result = [];
  headers.forEach((item) => {
    let obj = {};
    let values = expenses
      .filter((expense) => expense[attribute] === item)
      .map((expense) => expense.value);
    obj.label = item;
    obj.value = values;
    result.push(obj);
  });
  return result;
};

/* END OF FILE ============================================================== */
