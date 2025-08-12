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

// BARCHART --------------------------------------------------------------------
export let barchart = (title, data, ruler = null) => {
  let barchart = component.create.container('div', 'barchart');
  let barchartRuler = component.create.container('div', 'graphic-ruler');
  if (ruler) barchartRuler.classList.add(ruler);
  barchart.append(component.place.text('p', title, 'overline'), barchartRuler);
  data.forEach((item) => {
    let rulerItem = component.create.container(
      'span',
      `graphic-ruler-item ${item.color}`
    );
    rulerItem.style.width = `${item.value.toFixed(2)}%`;
    barchartRuler.append(rulerItem);
  });
  captions(barchart, data);
  return barchart;
};

// GRAPHIC CAPTIONS ------------------------------------------------------------
export let captions = (target, data) => {
  let container = component.create.container('div', 'graphic-captions');
  target.append(container);
  data.forEach((item) => {
    let caption = component.create.container('p', 'graphic-caption caption');
    let captionBullet = component.place.text(
      'span',
      '',
      `graphic-caption-bullet ${item.color}`
    );
    caption.append(
      captionBullet,
      component.place.text('span', `${item.value.toFixed(2)} % - ${item.label}`)
    );
    container.append(caption);
  });
};

// GRAPHIC BARS ----------------------------------------------------------------
export let bars = (data, color = 'spring') => {
  let dataAmount = data.reduce((acc, curr) => acc + curr.value, 0);

  let graphicContainer = component.create.container('div', 'graphic-bars');
  let graphicTitle = component.place.text('p', '', 'graphic-bars-title');
  graphicContainer.append(graphicTitle);
  graphicTitle.append(
    component.place.text('span', data[0].category, 'text-faded'),
    component.place.text(
      'span',
      formatter.format.moneyBRL(dataAmount),
      `text-${color}`
    )
  );

  data.forEach((item) => {
    let graphicRow = component.create.container('div', 'graphic-bars-row');
    graphicContainer.append(graphicRow);
    let graphicRuler = component.create.container('div', 'graphic-ruler');
    let rulerBar = component.create.container(
      'div',
      `graphic-ruler-item ${color}`
    );
    rulerBar.style.width = `${formatter.format.floatNumber(
      utils.calc.percent(item.value, dataAmount),
      2
    )}%`;
    graphicRuler.append(rulerBar);

    let rowCaption = component.place.text('p', '', 'graphic-bar-caption');
    rowCaption.append(
      component.place.text(
        'span',
        `${item.label} (${formatter.format.floatNumber(
          utils.calc.percent(item.value, dataAmount),
          2
        )}) %`,
        'caption'
      ),
      component.place.text(
        'span',
        formatter.format.moneyBRL(item.value),
        'caption'
      )
    );

    graphicRow.append(graphicRuler, rowCaption);
  });

  return graphicContainer;
  // TODO: [bars] modelar gráfico de barras horizontais
  // TODO: [bars] adicionar personalização de cor ao gráfico
};

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
        formatter.format.items(item.items),
        'graphic-item-label'
      ),
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

// GRAPHIC LINES ---------------------------------------------------------------
export const lines = (data, height = 18) => {
  let graphicLine = component.create.container('div', 'graphic-lines');
  let graphicContainer = component.create.container(
    'div',
    'graphic-lines-container'
  );
  graphicLine.append(
    component.place.text('p', data.title, 'overline'),
    graphicContainer
  );

  let yIndex = component.create.container('div', 'graphic-index-y');
  let xIndex = component.create.container('div', 'graphic-index-x');
  let lineGrid = component.create.container('div', 'graphic-line-grid');
  graphicContainer.append(yIndex, xIndex, lineGrid);

  let yIndexValues = data.indexes.flatMap((obj) => obj.index);
  let yIndexMin =
    Math.floor(Math.min(...yIndexValues) / data.yIndexBase) * data.yIndexBase;
  let yIndexMax =
    Math.ceil(Math.max(...yIndexValues) / data.yIndexBase) * data.yIndexBase;
  let yIndexReference = yIndexMax;
  let yIndexStep = (yIndexMax - yIndexMin) / 4;
  for (let i = 1; i <= 5; i++) {
    yIndex.append(component.place.text('p', yIndexMax, 'graphic-index-y-item'));
    yIndexMax -= yIndexStep;
  }

  xIndex.style.gridTemplateColumns = `repeat(${data.xIndex.length}, 1fr)`;
  data.xIndex.forEach((item) => {
    xIndex.append(component.place.text('p', item, 'graphic-line-x-item'));
  });

  let captions = component.create.container('div', 'graphic-captions');
  graphicContainer.append(captions);

  let svgGraphic = component.svg.createSVG(`${height}rem`, 'graphic-line-svg');
  lineGrid.append(svgGraphic);
  component.svg.drawRulerH(svgGraphic);
  component.svg.drawRulerV(svgGraphic, data.xIndex.length);

  component.svg.drawLines(svgGraphic, data.indexes, yIndexReference);
  component.svg.placeDots(svgGraphic, data.indexes, yIndexReference);

  data.indexes.forEach((obj) => {
    let caption = component.create.container('p', 'graphic-caption caption');
    let captionBullet = component.place.text(
      'span',
      '',
      `graphic-caption-bullet ${obj.color}`
    );
    caption.append(captionBullet, component.place.text('span', obj.label));
    captions.append(caption);
  });

  return graphicLine;
  // TODO: [lines]: Turn on/off para linhas do gráfico
};

/* END OF FILE ============================================================== */
