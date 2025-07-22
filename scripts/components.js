/** ============================================================================
    Page: Components | Controle de finanças
    Description: Arquivo de criadores de componentes HTML
============================================================================= */

import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
import * as info from './variables.js';
// import * as component from './components.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
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
};

// COMPONENTES -----------------------------------------------------------------
export let barchart = (title, data) => {
  let barchart = create.container('div', 'barchart');
  let barchartRuler = create.container('div', 'barchart-ruler');
  barchart.append(place.text('p', title, 'overline'), barchartRuler);
  data.forEach((item) => {
    let rulerItem = create.container(
      'span',
      `barchart-ruler-item ${item.color}`
    );
    rulerItem.style.width = `${item.value.toFixed(2)}%`;
    barchartRuler.append(rulerItem);
  });

  captions(barchart, data);

  return barchart;
};

export let captions = (target, data) => {
  let container = create.container('div', 'graphic-captions');
  target.append(container);

  data.forEach((item) => {
    let caption = create.container('p', 'graphic-caption');
    let captionBullet = document.createElement('span');
    captionBullet.classList.add('graphic-caption-bullet', item.color);
    caption.append(
      captionBullet,
      place.text(
        'span',
        `${item.value.toFixed(2)} % - ${item.label}`,
        'graphic-caption-label'
      )
    );
    container.append(caption);
  });
};

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
    cardValue.classList.add('value-jc');
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

  // if (footer) {}

  if (color) cardValue.classList.add(color);

  return card;
};

export let table = (header, data, styles = null) => {
  let table = create.container('table', 'table');
  if (styles) table.classList.add(styles);

  let tableHeader = create.container('thead', 'table-header');
  table.append(tableHeader);
  let tableHeaderRow = create.container('tr', 'table-header-row');
  tableHeader.append(tableHeaderRow);
  header.forEach((item) => {
    tableHeaderRow.append(place.text('th', item, 'table-header-cell'));
  });

  // if (footer) {}

  let tableBody = data;
  table.append(tableBody);

  return table;
};

export let toolbar = {
  brand: (label, icon) => {
    let brand = create.container('div', 'toolbar-brand');
    svg.load(icon, brand);
    brand.append(place.text('h1', label, 'toolbar-title text-display'));
    return brand;
  },
  menu: (target, styles, active = null) => {
    let list = ['income', 'investments', 'expenses', 'classroom'];
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
        `${message.financial.institution.code}: ${item.fiCode}`,
        'card-account-text'
      ),
      place.text(
        'p',
        `${message.financial.institution.agency}: ${item.agency}`,
        'card-account-text'
      ),
      place.text(
        'p',
        `${message.financial.institution.account}: ${item.account}`,
        'card-account-text'
      )
    );
  });

  target.append(
    place.title(message.financial.institutions, 'server'),
    cardGridAccounts
  );
};

/* END OF FILE ============================================================== */
