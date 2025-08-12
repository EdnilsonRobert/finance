/** ============================================================================
    Page: Data | Controle de finanças
    Description: Arquivo de dados de renda
============================================================================= */

// import { messages as message } from './messages.js';
// import { income as dataIncome } from './fake-income.js';
// import { transactions as dataTransactions } from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

const config = {
  hoursAmount: 160,
  valueHour: 55,
};

export const income = {
  reporting: {
    month: 'Agosto',
    year: 2025,
  },

  hours: config.hoursAmount,
  value: config.valueHour,

  reserve: {
    target: {
      extra: 5000,
      vacation: config.valueHour * 80,
    },
  },
};

/* END OF FILE ============================================================== */
