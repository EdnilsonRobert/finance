/** ============================================================================
    Page: Components | Controle de finanças
    Description: Arquivo de criadores de componentes HTML
============================================================================= */

import { messages as message } from './messages.js';
// import { categories, tags } from './messages.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// ELEMENTOS BÁSICOS -----------------------------------------------------------
export let create = {
  cardGrid: () => {
    let grid = document.createElement('div');
    grid.classList.add('grid', 'grid-cards');
    return grid;
  },
  graphicCaptions: () => {
    let container = document.createElement('div');
    container.classList.add('graphic-captions');
    return container;
  },
  module: (title) => {
    let container = document.createElement('article');
    container.classList.add('module');
    container.append(place.text('h3', title, 'overline'));
    return container;
  },
  section: (title) => {
    let container = document.createElement('div');
    container.classList.add('section');
    container.append(place.text('h2', title, 'headline-2'));
    return container;
  },
};

export let place = {
  text: (tag, str, styles) => {
    let text = document.createElement(tag);
    text.textContent = str;
    if (styles) styles.split(' ').forEach((style) => text.classList.add(style));
    return text;
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
  let barchart = document.createElement('div');
  barchart.classList.add('barchart');

  barchart.append(place.text('p', title, 'overline'));

  let barchartRuler = document.createElement('div');
  barchartRuler.classList.add('barchart-ruler');

  let barchartCaptions = create.graphicCaptions();

  barchart.append(barchartRuler, barchartCaptions);

  data.forEach((item) => {
    let rulerItem = document.createElement('span');
    rulerItem.classList.add('barchart-ruler-item', item.color);
    rulerItem.style.width = `${item.value.toFixed(2)}%`;
    barchartRuler.append(rulerItem);

    barchartCaptions.append(captions(item.value, item.label, item.color));
  });

  return barchart;
};

export let captions = (value, label, color) => {
  let caption = document.createElement('p');
  caption.classList.add('graphic-caption');

  let captionBullet = document.createElement('span');
  captionBullet.classList.add('graphic-caption-bullet', color);

  caption.append(captionBullet);
  caption.append(
    place.text(
      'span',
      `${value.toFixed(2)} % - ${label}`,
      'graphic-caption-label'
    )
  );

  return caption;
};

export let card = (span, title, sign, value, footer, color) => {
  let card = document.createElement('div');
  card.classList.add('card', `col-${span}`);

  let cardHeader = document.createElement('div');
  let cardContent = document.createElement('div');

  cardHeader.classList.add('card-header');
  cardContent.classList.add('card-content');

  card.append(cardHeader, cardContent);

  cardHeader.append(place.text('p', title, 'card-title'));
  if (sign === 'brl') sign = message.global.sign.brl;
  if (sign === 'per') sign = message.global.sign.percentage;
  if (sign !== null) cardHeader.append(place.text('p', sign, 'card-sign'));

  let cardValue = document.createElement('p');
  cardValue.classList.add('card-value');
  if (value < 0) {
    cardValue.append(place.text('span', value, 'text-negative'));
  } else {
    cardValue.textContent = value;
  }
  cardContent.append(cardValue);

  if (footer) {
    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    // if (footer.includes('badge')) {
    //   let cardBadge = document.createElement('div');
    //   cardBadge.classList.add('card-badge');
    //   cardBadge.append(place.text('p', footer.substring(6), 'badge'));
    //   cardFooter.append(cardBadge);
    // } else {
    //   cardFooter.append(place.text('p', footer, 'caption'));
    // }
    cardFooter.append(place.text('p', footer, 'caption text-right'));
    card.append(cardFooter);
  }

  if (color) cardValue.classList.add(color);

  return card;
};

export let toolbar = {
  brand: (label, icon) => {
    let brand = document.createElement('div');
    brand.classList.add('toolbar-brand');
    svg.load(icon, brand);
    brand.append(place.text('h1', label, 'toolbar-title text-display'));
    return brand;
  },
  menu: (item, styles, index, active = null) => {
    let link = document.createElement('a');
    if (styles) styles.split(' ').forEach((style) => link.classList.add(style));
    if (active !== null && active === index + 1)
      link.classList.add('link-active');
    link.href = `./${item}.html`;
    svg.load(`figure-${item}`, link);
    link.append(
      place.text('span', message.global.menu.label[item], 'link-label')
    );
    return link;
  },
};

/* END OF FILE ============================================================== */
