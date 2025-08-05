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
};

export let sum = {
  amount: (...args) => args.reduce((acc, arg) => acc + arg),
  values: (data) => data.reduce((acc, value) => acc + value),
};

export const modelData = {
  graphicColumns: (data) => {
    return data.map((item) => ({
      label: item.label,
      value: item.value.reduce((acc, curr) => acc + curr),
    }));
  },
};

// INCOME ----------------------------------------------------------------------
// INVESTMENTS -----------------------------------------------------------------
export const modelBarchartInvestmentsCategories = (header, data) => {
  let amount = getter.getTransactions.amount(data);
  let result = [];
  header.forEach((tag, index) => {
    let values = data
      .filter((obj) => obj.tag === tag)
      .map((obj) => obj.profits);
    result.push({
      label: tag,
      value: calc.percent(sum.values(values), amount),
      color: colors[index],
    });
  });
  return result;
};

export const modelBarchartInvestmentsAssets = (data, colorscheme = null) => {
  let assetProfitsAmount = sum.values(getter.getTransactions.profits(data));
  let color = colorscheme ? colorscheme : colors;
  return data.map((item, index) => ({
    value: calc.percent(item.profits, assetProfitsAmount),
    label: item.name,
    color: color[index],
  }));
};

export const modelTableInvestments = (data, hasDecimal = null) => {
  let tableBody = component.create.container('tbody', 'table-body');
  data.forEach((item) => {
    let shares = !hasDecimal
      ? sum.values(item.shares)
      : formatter.format.floatNumber(sum.values(item.shares), hasDecimal);
    let performance = calc.performance(
      sum.values(item.injection),
      item.profits
    );
    let performanceText = performance < 0 ? `text-negative` : 'text-positive';
    let performanceIcon = performance < 0 ? 'arrow-down' : 'arrow-up';

    let tableBodyRow = component.create.container('tr');
    tableBody.append(tableBodyRow);

    let cellPerformance = component.create.container('td', 'table-cell');
    let textPerformance = component.create.container('p', 'flex-right');
    cellPerformance.append(textPerformance);
    textPerformance.append(
      component.place.text('span', performance, performanceText),
      component.place.icon(performanceIcon, performanceText)
    );

    tableBodyRow.append(
      component.place.text('td', item.name, 'table-cell'),
      component.place.text('td', item.operator, 'table-cell text-center'),
      component.place.text('td', item.profile, 'table-cell text-center'),
      component.place.text('td', item.risk, 'table-cell text-center'),
      component.place.text('td', shares, 'table-cell text-center'),
      component.place.text(
        'td',
        formatter.format.money(sum.values(item.injection)),
        `table-cell cell-money`
      ),
      component.place.text(
        'td',
        formatter.format.money(item.profits),
        `table-cell cell-money`
      ),
      cellPerformance
    );
  });
  return tableBody;
};

// EXPENSES --------------------------------------------------------------------
export const modelTableExpenses = (data) => {
  let tableBody = component.create.container('tbody', 'table-body');
  data.forEach((item) => {
    let tableBodyRow = component.create.container('tr');
    tableBody.append(tableBodyRow);

    let cellValue = component.create.container('td', 'table-cell');
    let textValue = component.create.container('p', 'flex-right');
    cellValue.append(textValue);
    textValue.append(
      component.place.text(
        'span',
        formatter.format.money(item.value),
        'text-negative'
      ),
      component.place.icon('arrow-forward', 'text-negative')
    );
    // TODO: [table] adicionar cashback (icon = arrow-back)

    tableBodyRow.append(
      component.place.text('td', item.date, 'table-cell text-center'),
      component.place.text('td', item.label, 'table-cell'),
      component.place.text('td', item.category, 'table-cell text-center'),
      component.place.text('td', item.tag, 'table-cell text-center'),
      component.place.text('td', item.method, 'table-cell text-center'),
      component.place.text('td', item.type, 'table-cell text-center'),
      component.place.text('td', item.fi, 'table-cell text-center'),
      cellValue
    );
  });
  return tableBody;
};

// CLASSROOM -------------------------------------------------------------------

/* END OF FILE ============================================================== */
