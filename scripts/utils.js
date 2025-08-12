/** ============================================================================
    Page: Utils | Controle de finanças
    Description: Arquivo de funções utilitárias
============================================================================= */

// import { messages as message } from './messages.js';
// import * as info from './variables.js';
import * as component from './components.js';
// import * as graphic from './graphics.js';
import * as formatter from './formatters.js';
// import * as utils from './utils.js';
import * as getter from './getters.js';

// GLOBAL ----------------------------------------------------------------------
export const colors = [
  'blue',
  'gold',
  'magenta',
  'aqua',
  'purple',
  'lime',
  'brown',
  'pink',
  'spring',
  'red',
];
// TODO: [ui] alterar color palette

export let calc = {
  percent: (value, amount) => (value / amount) * 100,
  performance: (value1, value2) => {
    let diff = value2 - value1;
    let result = (diff / value1) * 100;
    return !Number.isNaN(result) ? formatter.format.floatNumber(result, 3) : 0;
  },
  yAxis: (value, amount) => (1 - value / amount) * 100,
  // yAxis: (value, amount) => {
  //   let result = (value / amount) * 100;
  //   return !Number.isNaN(result) ? Number(formatter.formatFloat3(result)) : 0;
  // },
};

export let sum = {
  // GLOBAL ----------------------------
  amount: (...args) => args.reduce((acc, arg) => acc + arg),
  values: (data) => data.reduce((acc, value) => acc + value),

  // EXPENSES --------------------------
  expensesAmount: (expenses) =>
    expenses.reduce((acc, obj) => {
      return acc + obj.value;
    }, 0),

  // INVESTMENTS -----------------------
  investmentsAmount: (data) =>
    data.reduce((acc, obj) => {
      return acc + obj.profits;
    }, 0),
};

export let modelData = {
  barchartEXpenses: (data, colorscheme = null) => {
    let dataAmount = sum.expensesAmount(data);
    let color = colorscheme ? colorscheme : colors;
    return data.map((obj, index) => ({
      value: calc.percent(obj.value, dataAmount),
      label: obj.label,
      color: color[index],
    }));
  },

  barchartInvestments: (data, colorscheme = null) => {
    let profitsAmount = getter.getTransactions.profits(data);
    let color = colorscheme ? colorscheme : colors;
    return data.map((obj, index) => ({
      value: calc.percent(obj.profits, profitsAmount),
      label: obj.name,
      color: color[index],
    }));
  },

  graphicColumns: (data) => {
    return data.map((obj) => ({
      label: obj.label,
      value: obj.value.reduce((acc, curr) => acc + curr),
      items: obj.value.length,
    }));
  },

  table: (data, model = 'EXP' || 'INV', hasDecimal = null) => {
    let tableBody = component.create.container('tbody', 'table-body');
    data.forEach((obj) => {
      let tableBodyRow = component.create.container('tr');
      tableBody.append(tableBodyRow);

      if (model === 'EXP') {
        let cellValue = component.create.container('td', 'table-cell');
        let textValue = component.create.container('p', 'flex-right');
        cellValue.append(textValue);
        textValue.append(
          component.place.text(
            'span',
            formatter.format.money(obj.value),
            'text-negative'
          ),
          component.place.icon('arrow-forward', 'text-negative')
        );
        // TODO: [table] adicionar cashback (icon = arrow-back)

        tableBodyRow.append(
          component.place.text('td', obj.date, 'table-cell text-center'),
          component.place.text('td', obj.label, 'table-cell'),
          component.place.text('td', obj.category, 'table-cell text-center'),
          component.place.text('td', obj.tag, 'table-cell text-center'),
          component.place.text('td', obj.method, 'table-cell text-center'),
          component.place.text('td', obj.type, 'table-cell text-center'),
          component.place.text('td', obj.fi, 'table-cell text-center'),
          cellValue
        );
      }
      if (model === 'INV') {
        let shares = !hasDecimal
          ? sum.values(obj.shares)
          : formatter.format.floatNumber(sum.values(obj.shares), hasDecimal);
        let performance = calc.performance(
          sum.values(obj.injection),
          obj.profits
        );
        let performanceText =
          performance < 0 ? `text-negative` : 'text-positive';
        let performanceIcon = performance < 0 ? 'arrow-down' : 'arrow-up';

        let cellPerformance = component.create.container('td', 'table-cell');
        let textPerformance = component.create.container('p', 'flex-right');
        cellPerformance.append(textPerformance);
        textPerformance.append(
          component.place.text('span', performance, performanceText),
          component.place.icon(performanceIcon, performanceText)
        );

        tableBodyRow.append(
          component.place.text('td', obj.name, 'table-cell'),
          component.place.text('td', obj.operator, 'table-cell text-center'),
          component.place.text('td', obj.profile, 'table-cell text-center'),
          component.place.text('td', obj.risk, 'table-cell text-center'),
          component.place.text('td', shares, 'table-cell text-center'),
          component.place.text(
            'td',
            formatter.format.money(sum.values(obj.injection)),
            `table-cell cell-money`
          ),
          component.place.text(
            'td',
            formatter.format.money(obj.profits),
            `table-cell cell-money`
          ),
          cellPerformance
        );
      }
    });
    return tableBody;
  },
};

// INCOME ----------------------------------------------------------------------

// EXPENSES --------------------------------------------------------------------

// INVESTMENTS -----------------------------------------------------------------
export const indexes = {
  investments: {
    cryptocurrencies: 0.1,
    portfolio: 0.5,
    privatePension: 0.4,
    share: {
      cdi: 0.27,
      fixedRate: 0.1,
      foreignExchange: 0.02,
      international: 0.08,
      multiAsset: 0.18,
      privateCredit: 0.08,
      protective: 0.02,
      realInterestRate: 0.13,
      stocks: 0.12,
    },
  },
};

// CLASSROOM -------------------------------------------------------------------

/* END OF FILE ============================================================== */
