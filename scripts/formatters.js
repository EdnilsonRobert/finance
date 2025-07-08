/** ============================================================================
    Page: Formatters | Controle de finanças
    Description: Arquivo de formatadores de texto
============================================================================= */

import { messages as message } from './messages.js';

export let formatMoney = (value) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .replace(message.global.sign.brl, '')
    .trim();
};

/* END OF FILE ============================================================== */
