/** ============================================================================
    Page: Data | Controle de finanças
    Description: Arquivo de dados de investimentos
============================================================================= */

import { messages as message } from './messages.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
// import * as info from './variables.js';
// import * as component from './components.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// PREVIDÊNCIA PRIVADA ---------------------------------------------------------
export const privatePension = [
  {
    asset: {
      name: message.assets.pension.one,
      operator: message.investment.operator.bra,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 1],
      injection: [800, 800],
      profits: 2000,
    },
  },
  {
    asset: {
      name: message.assets.pension.two,
      operator: message.investment.operator.bra,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 1, 1],
      injection: [800, 800, 800],
      profits: 2100,
    },
  },
];

// RENDA FIXA ------------------------------------------------------------------
export const cdi = [
  {
    asset: {
      name: message.assets.cdi.cdb,
      operator: message.investment.operator.mep,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1.23, 1.23, 1.23],
      injection: [100, 150, 200],
      profits: 500,
    },
  },
  {
    asset: {
      name: message.assets.cdi.selic,
      operator: message.investment.operator.treasure.bonds,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1.23, 1.23, 1.23],
      injection: [200, 150, 100],
      profits: 500,
    },
  },
  {
    asset: {
      name: message.assets.cdi.di,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1.23, 1.23, 1.23],
      injection: [100, 200, 150],
      profits: 500,
    },
  },
];

export const privateCredit = [
  {
    asset: {
      name: message.assets.private.credit.debenture,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 1, 1],
      injection: [40, 40, 40],
      profits: 150,
    },
  },
  {
    asset: {
      name: message.assets.private.credit.crs,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 1, 1],
      injection: [40, 40, 40],
      profits: 150,
    },
  },
  {
    asset: {
      name: message.assets.private.credit.bonds,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 2, 2],
      injection: [40, 60, 60],
      profits: 200,
    },
  },
];

export const fixedRate = [
  {
    asset: {
      name: message.assets.fixed.rate.treasure,
      operator: message.investment.operator.treasure.bonds,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 1, 1],
      injection: [50, 50, 50],
      profits: 200,
    },
  },
  {
    asset: {
      name: message.assets.fixed.rate.cdb,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 1, 1],
      injection: [50, 50, 50],
      profits: 200,
    },
  },
  {
    asset: {
      name: message.assets.fixed.rate.debenture,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [1, 2, 2],
      injection: [60, 70, 70],
      profits: 300,
    },
  },
];

export const realInterest = [
  {
    asset: {
      name: message.assets.real.interest.treasure,
      operator: message.investment.operator.treasure.bonds,
      profile: message.investment.profile.balanced,
      risk: message.investment.risk.medium,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
  },
  {
    asset: {
      name: message.assets.real.interest.debenture,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.balanced,
      risk: message.investment.risk.medium,
      shares: [1, 1, 2],
      injection: [100, 100, 150],
      profits: 400,
    },
  },
];

// RENDA HÍBRIDA ---------------------------------------------------------------
export const multiAsset = [
  {
    asset: {
      name: message.assets.multi.asset.multimarket,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.balanced,
      risk: message.investment.risk.medium,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
  },
  {
    asset: {
      name: message.assets.multi.asset.funds.long,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.balanced,
      risk: message.investment.risk.medium,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
  },
  {
    asset: {
      name: message.assets.multi.asset.funds.quant,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.balanced,
      risk: message.investment.risk.medium,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
  },
];

// RENDA VARIÁVEL --------------------------------------------------------------
export const stocks = [
  {
    asset: {
      name: message.assets.stocks,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [10, 10, 10],
      injection: [200, 200, 200],
      profits: 650,
    },
  },
];

export const international = [
  {
    asset: {
      name: message.assets.international.bdr.amz,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
  },
  {
    asset: {
      name: message.assets.international.bdr.mli,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
  },
  {
    asset: {
      name: message.assets.international.bdr.nbk,
      operator: message.investment.operator.nbk,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
  },
  {
    asset: {
      name: message.assets.international.funds,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
  },
  {
    asset: {
      name: message.assets.international.ivv,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
  },
];

export const foreignExchange = [
  {
    asset: {
      name: message.assets.foreign.exchange.funds,
      operator: message.investment.operator.c6b,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
  },
  {
    asset: {
      name: message.assets.foreign.exchange.cdb,
      operator: message.investment.operator.c6b,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
  },
  {
    asset: {
      name: message.assets.foreign.exchange.currency,
      operator: message.investment.operator.c6b,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [5, 5],
      injection: [20, 20],
      profits: 50,
    },
  },
];

// PROTEÇÃO --------------------------------------------------------------------
export const protective = [
  {
    asset: {
      name: message.assets.protective.gold,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
  },
  {
    asset: {
      name: message.assets.protective.funds,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
  },
  {
    asset: {
      name: message.assets.protective.products,
      operator: message.investment.operator.toi,
      profile: message.investment.profile.conservative,
      risk: message.investment.risk.low,
      shares: [5, 5],
      injection: [20, 20],
      profits: 50,
    },
  },
];

// CRIPTOMOEDAS ----------------------------------------------------------------
export const cryptoCurrencies = [
  {
    asset: {
      name: message.assets.cryptocurrency.btc,
      operator: message.investment.operator.mep,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [0, 0.12345678],
      injection: [200, 200],
      profits: 500,
    },
  },
  {
    asset: {
      name: message.assets.cryptocurrency.eth,
      operator: message.investment.operator.mep,
      profile: message.investment.profile.aggressive,
      risk: message.investment.risk.high,
      shares: [0, 0.12345678],
      injection: [300, 300],
      profits: 900,
    },
  },
];

// OUTROS INVESTIMENTOS --------------------------------------------------------
// SEGURO DE VIDA ----------------------
export const lifeInsurance = {
  asset: message.assets.life.insurance,
  coverage: 123456.78,
  injection: [
    [70, 70, 70, 70], // 2022
    [70, 70, 70, 70, 70, 70, 70, 70, 75, 75, 75, 75], // 2023
    [75, 75, 75, 75, 75, 75, 75, 75, 80, 80, 80, 80], // 2024
    [80, 80, 80, 80, 80, 80, 80], // 2025
  ],
  composition: {
    insurance: {
      name: message.insurance,
      value: 74,
    },
    funeral: {
      name: message.funeral.assistance,
      value: 3.5,
    },
    hospital: {
      name: message.hospitalization,
      value: 2.5,
    },
  },
};

/* END OF FILE ============================================================== */
