/** ============================================================================
    Page: Components | Controle de finanças
    Description: Arquivo de criadores de componentes HTML
============================================================================= */

import { messages as message } from './messages.js';
import * as info from './variables.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// ELEMENTOS BÁSICOS -----------------------------------------------------------
export let create = {
  container: (tag, styles = null) => {
    let container = document.createElement(tag);
    if (styles)
      styles.split(' ').forEach((style) => container.classList.add(style));
    return container;
  },
  grid: (styles = 'grid-cards') => {
    let grid = document.createElement('div');
    grid.classList.add('grid', styles);
    return grid;
  },
  module: (title) => {
    let container = document.createElement('article');
    container.classList.add('module');
    container.append(place.text('h3', title, 'overline'));
    return container;
  },
  section: (title, icon) => {
    let container = document.createElement('div');
    container.classList.add('container-section');
    container.append(place.title(title, icon));
    return container;
  },
};

export let place = {
  icon: (icon, styles = null) => {
    let ionicon = document.createElement('ion-icon');
    ionicon.classList.add('ion-icon');
    if (styles) ionicon.classList.add(styles);
    ionicon.setAttribute('name', icon);
    return ionicon;
  },
  text: (tag, str, styles = null) => {
    let text = document.createElement(tag);
    text.textContent = str;
    if (styles) styles.split(' ').forEach((style) => text.classList.add(style));
    return text;
  },
  title: (str, icon) => {
    let headline = document.createElement('h2');
    headline.classList.add('headline-2', 'has-icon');
    let ion = document.createElement('ion-icon');
    ion.classList.add('ion-icon');
    ion.setAttribute('name', icon);
    headline.append(ion, place.text('span', str));
    return headline;
  },
};

export let svg = {
  load: (file, target) => {
    fetch(`./resources/images/${file}.svg`)
      .then((response) => response.text())
      .then((svg) => target.insertAdjacentHTML('afterbegin', svg))
      .catch((error) => console.log(error));
  },

  // DRAW SVG --------------------------
  createSVG: (height, name) => {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add(name);
    svg.setAttribute('height', height);
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    return svg;
  },
  drawRulerH: (target) => {
    for (let i = 1; i <= 3; i++) {
      let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', 0);
      line.setAttribute('x2', '100%');
      line.setAttribute('y1', `${25 * i}%`);
      line.setAttribute('y2', `${25 * i}%`);
      line.setAttribute('stroke', 'var(--ui-color-5)');
      line.setAttribute('stroke-width', 1);
      line.setAttribute('stroke-linecap', 'butt');
      target.append(line);
    }
  },
  drawRulerV: (target, length) => {
    let step = 100 / length;
    let paddingLeft = step / 2;
    for (let i = 0; i < length; i++) {
      let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', `${paddingLeft + step * i}%`);
      line.setAttribute('x2', `${paddingLeft + step * i}%`);
      line.setAttribute('y1', 0);
      line.setAttribute('y2', '100%');
      line.setAttribute('stroke', 'var(--ui-color-5)');
      line.setAttribute('stroke-width', 1);
      line.setAttribute('stroke-linecap', 'butt');
      target.append(line);
    }
  },
  drawLines: (target, data, yIndexMax) => {
    data.forEach((obj) => {
      let step = 100 / obj.index.length;
      let paddingLeft = step / 2;
      for (let i = 0; i < obj.index.length - 1; i++) {
        let line = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'line'
        );
        line.setAttribute('x1', `${paddingLeft + step * i}%`);
        line.setAttribute(
          'y1',
          `${utils.calc.yAxis(obj.index[i], yIndexMax)}%`
        );
        line.setAttribute('x2', `${paddingLeft + step * i + step}%`);
        line.setAttribute(
          'y2',
          `${utils.calc.yAxis(obj.index[i + 1], yIndexMax)}%`
        );
        line.setAttribute('stroke', `var(--${obj.color}-8`);
        line.setAttribute('stroke-width', 2);
        line.setAttribute('stroke-linecap', 'butt');
        target.append(line);
      }
    });
  },
  placeDots: (target, data, yIndexMax) => {
    data.forEach((obj) => {
      let step = 100 / obj.index.length;
      let paddingLeft = step / 2;
      for (let i = 0; i < obj.index.length; i++) {
        let dot = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle'
        );
        dot.classList.add('dot');
        dot.setAttribute('cx', `${paddingLeft + step * i}%`);
        dot.setAttribute('cy', `${utils.calc.yAxis(obj.index[i], yIndexMax)}%`);
        dot.setAttribute('r', 4);
        dot.setAttribute('fill', obj.color);
        target.append(dot);
      }
    });
  },
};

// COMPONENTES -----------------------------------------------------------------
export let card = (span, title, sign = null, value, footer, color) => {
  let card = create.container('div', `card col-${span}`);
  let cardHeader = create.container('div', 'card-header');
  let cardContent = create.container('div', 'card-content');
  card.append(cardHeader, cardContent);

  cardHeader.append(place.text('p', title, 'card-title'));
  let indicator = '';
  if (sign === 'brl') indicator = message.global.sign.brl;
  if (sign === 'per') indicator = message.global.sign.percentage;
  if (sign !== null) cardHeader.append(place.text('p', indicator, 'card-sign'));

  let cardValue = place.text('p', '', 'card-value');
  if (sign === 'per') {
    if (value < 0) {
      cardValue.append(place.text('span', value, 'text-negative'));
      cardValue.append(place.icon('arrow-down', 'text-negative'));
    } else {
      cardValue.append(place.text('span', value));
      cardValue.append(place.icon('arrow-up'));
    }
  } else {
    cardValue.append(place.text('span', value));
  }
  cardContent.append(cardValue);

  if (footer) {
    let cardFooter = create.container('div', 'card-footer');
    cardFooter.append(place.text('p', footer, 'caption text-right'));
    card.append(cardFooter);
  }

  if (color) cardValue.classList.add(color);

  return card;
};

export let table = (header, data, styles = null) => {
  let table = create.container('table', 'table');
  if (styles) table.classList.add(styles);

  let tableHeader = create.container('thead');
  table.append(tableHeader);
  let tableHeaderRow = create.container('tr');
  tableHeader.append(tableHeaderRow);
  header.forEach((item) => {
    tableHeaderRow.append(place.text('th', item, 'table-header-cell'));
  });

  let tableBody = data;
  table.append(tableBody);

  return table;
  // TODO: [table] adicionar campo de busca para filtrar pesquisa
  // TODO: [table] adicionar ordenação de itens de cada coluna
};

export let toolbar = {
  brand: (label, icon) => {
    let brand = create.container('div', 'toolbar-brand');
    svg.load(icon, brand);
    brand.append(place.text('h1', label, 'toolbar-title text-display'));
    return brand;
  },
  menu: (target, styles, active = null) => {
    let list = ['income', 'expenses', 'investments', 'classroom'];
    list.forEach((item, index) => {
      let link = document.createElement('a');
      if (styles)
        styles.split(' ').forEach((style) => link.classList.add(style));
      if (active !== null && active === index + 1)
        link.classList.add('link-active');
      link.href = `./${item}.html`;
      svg.load(`figure-${item}`, link);
      link.append(
        place.text('span', message.global.menu.label[item], 'link-label')
      );
      target.append(link);
    });
  },
};

// CONTEÚDO RELACIONADO --------------------------------------------------------
// INSTITUIÇÕES FINANCEIRAS ------------
export const fiAccounts = (target) => {
  let cardGridAccounts = create.container('div', 'grid grid-accounts');
  info.fis.forEach((item) => {
    let card = create.container('div', 'card-account');
    cardGridAccounts.append(card);
    card.append(
      place.text('p', item.name, 'card-account-header'),
      place.text(
        'p',
        `${message.global.financial.institution.code}: ${item.fiCode}`,
        'card-account-text'
      ),
      place.text(
        'p',
        `${message.global.financial.institution.agency}: ${item.agency}`,
        'card-account-text'
      ),
      place.text(
        'p',
        `${message.global.financial.institution.account}: ${item.account}`,
        'card-account-text'
      )
    );
  });

  target.append(
    place.title(message.global.financial.institutions, 'server'),
    cardGridAccounts
  );
};

/* END OF FILE ============================================================== */
