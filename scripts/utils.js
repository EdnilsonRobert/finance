/** ============================================================================
    Page: Utils | Controle de finanças
    Description: Arquivo de funções utilitárias
============================================================================= */

// import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
import * as component from './components.js';
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

export let calc = {
  percent: (value, amount) => (value / amount) * 100,
  performance: (value1, value2) => {
    let diff = value2 - value1;
    let result = (diff / value1) * 100;
    return !Number.isNaN(result) ? formatter.format.floatNumber(result, 3) : 0;
  },
};

export let sum = {
  amount: (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  },
  values: (data) => data.reduce((acc, value) => acc + value),
};

export let model = {
  data: {
    barchart: (data, labels = null) => {
      let result = [];
      let assetProfitsAmount = sum.values(getter.get.profits(data));
      data.forEach((item, index) => {
        let obj = {
          value: calc.percent(item.asset.profits, assetProfitsAmount),
          label: labels !== null ? labels[index] : item.asset.name,
          color: colors[index],
        };
        result.push(obj);
      });
      return result;
    },
    table: {
      expenses: (data) => {
        let tableBody = component.create.container('tbody', 'table-body');
        data.forEach((item) => {
          let tableBodyRow = component.create.container('tr', 'table-row');
          tableBody.append(tableBodyRow);
          for (let i in item) {
            if (i === 'label') {
              tableBodyRow.append(
                component.place.text('td', item[i], 'table-cell')
              );
            } else if (i === 'value') {
              let cell = component.create.container('td', 'table-cell');
              tableBodyRow.append(cell);
              let text = component.create.container('p', 'cell-jc');
              cell.append(text);
              text.append(
                component.place.text(
                  'span',
                  formatter.format.money(item[i]),
                  'text-negative'
                ),
                component.place.icon('arrow-forward', 'text-negative')
              );
            } else {
              tableBodyRow.append(
                component.place.text('td', item[i], 'table-cell cell-ac')
              );
            }
          }
        });
        return tableBody;
      },
      investments: (data, floatDigits = null) => {
        let tableBody = component.create.container('tbody', 'table-body');
        data.forEach((item) => {
          let tableBodyRow = component.create.container('tr', 'table-row');
          tableBody.append(tableBodyRow);
          for (let i in item.asset) {
            switch (i) {
              case 'name':
                tableBodyRow.append(
                  component.place.text('td', item.asset.name, 'table-cell')
                );
                break;
              case 'shares':
                tableBodyRow.append(
                  component.place.text(
                    'td',
                    formatter.format.floatNumber(
                      sum.values(item.asset.shares),
                      floatDigits
                    ),
                    'table-cell cell-ac'
                  )
                );
                break;
              case 'injection':
                tableBodyRow.append(
                  component.place.text(
                    'td',
                    formatter.format.money(sum.values(item.asset.injection)),
                    `table-cell cell-fm`
                  )
                );
                break;
              case 'profits':
                tableBodyRow.append(
                  component.place.text(
                    'td',
                    formatter.format.money(item.asset.profits),
                    `table-cell cell-fm`
                  )
                );
                break;
              default:
                tableBodyRow.append(
                  component.place.text(
                    'td',
                    item.asset[i],
                    'table-cell cell-ac'
                  )
                );
                break;
            }
          }

          let performance = calc.performance(
            sum.values(item.asset.injection),
            item.asset.profits
          );
          let cell = component.create.container('td', 'table-cell');
          tableBodyRow.append(cell);
          let text = component.create.container('p', 'cell-jc');
          cell.append(text);
          text.append(
            component.place.text(
              'span',
              performance,
              performance < 0 ? `text-negative` : 'text-positive'
            ),
            component.place.icon(
              performance < 0 ? 'arrow-down' : 'arrow-up',
              performance < 0 ? `text-negative` : 'text-positive'
            )
          );
        });

        return tableBody;
      },
    },
  },
};

// INCOME ----------------------------------------------------------------------

// INVESTMENTS -----------------------------------------------------------------

// EXPENSES --------------------------------------------------------------------

// CLASSROOM -------------------------------------------------------------------

/* END OF FILE ============================================================== */
