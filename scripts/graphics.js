/** ============================================================================
    Page: Graphics | Controle de finanças
    Description: Arquivo de criação de gráficos
============================================================================= */

// import { messages as message } from './messages.js';
// import * as info from './variables.js';
import * as component from './components.js';
// import * as graphic from './graphics.js';
import * as formatter from './formatters.js';
import { messages } from './messages.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// GRAPHIC COLUMNS -------------------------------------------------------------
export const columns = (title, data, colspan = 4, height = 12) => {
  const dataAmount = data.reduce((acc, item) => acc + item.value, 0);
  const dataValues = data.map((item) => item.value);
  const max = Math.max(...dataValues);

  let graphicContainer = component.create.container(
    'div',
    `graphic-columns col-${colspan}`
  );
  if (colspan) graphicContainer.classList.add();
  let graphicGrid = component.create.container(
    'div',
    'grid graphic-columns-grid'
  );
  graphicContainer.append(
    component.place.text('p', title, 'overline'),
    graphicGrid
  );

  data.forEach((item) => {
    let highlight;
    if (item.label === messages.payments.category.investment) {
      highlight = 'gold';
    } else if (item.label === messages.payments.category.coffee) {
      highlight = 'brown';
    } else {
      highlight = 'spring';
    }
    // TODO: [columns] adiconar personalização de cores a itens do gráfico

    let column = component.create.container('div', 'graphic-grid-item');
    graphicGrid.append(column);

    let itemValue = component.place.text(
      'p',
      formatter.format.moneyBRL(item.value),
      `graphic-item-value text-${highlight}`
    );

    let itemBar = component.create.container(
      'div',
      `graphic-item-bar ${highlight}`
    );
    itemBar.style.height =
      item.value === max ? `${height}rem` : `${height * (item.value / max)}rem`;

    let itemLabel = component.create.container('div', 'graphic-item-caption');
    itemLabel.append(
      component.place.text('p', item.label, 'graphic-item-label'),
      component.place.text(
        'p',
        `${formatter.format.floatNumber(
          utils.calc.percent(item.value, dataAmount),
          2
        )} %`,
        'caption'
      )
    );

    column.append(itemValue, itemBar, itemLabel);
  });

  return graphicContainer;
  // TODO: [columns] adicionar linhas de guia horizontais e índices na lateral
};

/* END OF FILE ============================================================== */
