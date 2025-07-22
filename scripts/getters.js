/** ============================================================================
    Page: Getters | Controle de finanças
    Description: Arquivo de funções para captura e filtro de dados
============================================================================= */

// import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// INVESTMENTS -----------------------------------------------------------------
export let get = {
  injection: (data) => {
    let result = [];
    data.forEach((item) => (result = result.concat(item.asset.injection)));
    return result;
  },
  profits: (data) => {
    let result = [];
    data.forEach((item) => (result = result.concat(item.asset.profits)));
    return result;
  },
};

/* END OF FILE ============================================================== */
