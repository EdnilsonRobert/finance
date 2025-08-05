/** ============================================================================
    Page: Data | Controle de finanças
    Description: Arquivo de dados de investimentos
============================================================================= */

import { messages as message } from './messages.js';
// import { income as dataIncome } from './fake-income.js';
// import { transactions as dataTransactions } from './fake-investments.js';
// import { costs as dataCosts } from './fake-expenses.js';
// import { expenses as dataExpenses } from './fake-expenses.js';
// import * as component from './components.js';
// import * as graphic from './graphics.js';
// import * as formatter from './formatters.js';
// import * as utils from './utils.js';
// import * as getter from './getters.js';

// model data = {
//   name: nome da ativo
//   category: categoria do ativo
//   tag: marcador do ativo
//   profile: perfil do investidor
//   risk: categoria de risco do ativo
//   operator: instituição financeira
//   shares: array [frações do ativo]
//   injection: array [valor de investimento]
//   profits: valor do rendimento
// }

export const transactions = {
  // PREVIDÊNCIA PRIVADA -------------------------------------------------------
  privatePension: [
    {
      name: message.assets.pension.one,
      category: message.investments.category.private.pension,
      tag: message.investments.tag.private.pension,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.bra,
      shares: [1, 1],
      injection: [800, 800],
      profits: 2000,
    },
    {
      name: message.assets.pension.two,
      category: message.investments.category.private.pension,
      tag: message.investments.tag.private.pension,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.bra,
      shares: [1, 1, 1],
      injection: [800, 800, 800],
      profits: 2100,
    },
  ],

  // RENDA FIXA ----------------------------------------------------------------
  cdi: [
    {
      name: message.assets.cdi.cdb,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.cdi,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.mep,
      shares: [1.23, 1.23, 1.23],
      injection: [100, 150, 200],
      profits: 500,
    },
    {
      name: message.assets.cdi.selic,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.cdi,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.treasure.bonds,
      shares: [1.23, 1.23, 1.23],
      injection: [200, 150, 100],
      profits: 500,
    },
    {
      name: message.assets.cdi.di,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.cdi,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.nbk,
      shares: [1.23, 1.23, 1.23],
      injection: [100, 200, 150],
      profits: 500,
    },
  ],
  privateCredit: [
    {
      name: message.assets.private.credit.debenture,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.private.credit,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.toi,
      shares: [1, 1, 1],
      injection: [40, 40, 40],
      profits: 150,
    },
    {
      name: message.assets.private.credit.crs,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.private.credit,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.toi,
      shares: [1, 1, 1],
      injection: [40, 40, 40],
      profits: 150,
    },
    {
      name: message.assets.private.credit.bonds,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.private.credit,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.toi,
      shares: [1, 2, 2],
      injection: [40, 60, 60],
      profits: 200,
    },
  ],
  fixedRate: [
    {
      name: message.assets.fixed.rate.treasure,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.fixed.rate,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.treasure.bonds,
      shares: [1, 1, 1],
      injection: [50, 50, 50],
      profits: 200,
    },
    {
      name: message.assets.fixed.rate.cdb,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.fixed.rate,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.nbk,
      shares: [1, 1, 1],
      injection: [50, 50, 50],
      profits: 200,
    },
    {
      name: message.assets.fixed.rate.debenture,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.fixed.rate,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.nbk,
      shares: [1, 2, 2],
      injection: [60, 70, 70],
      profits: 300,
    },
  ],
  realInterest: [
    {
      name: message.assets.real.interest.treasure,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.real.interest.rate,
      profile: message.investments.profile.balanced,
      risk: message.investments.risk.medium,
      operator: message.investments.operator.treasure.bonds,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
    {
      name: message.assets.real.interest.debenture,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.real.interest.rate,
      profile: message.investments.profile.balanced,
      risk: message.investments.risk.medium,
      operator: message.investments.operator.toi,
      shares: [1, 1, 2],
      injection: [100, 100, 150],
      profits: 400,
    },
  ],

  // RENDA HÍBRIDA -------------------------------------------------------------
  multiAsset: [
    {
      name: message.assets.multi.asset.multimarket,
      category: message.investments.category.hybrid.funds,
      tag: message.investments.tag.multi.asset,
      profile: message.investments.profile.balanced,
      risk: message.investments.risk.medium,
      operator: message.investments.operator.toi,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
    {
      name: message.assets.multi.asset.funds.long,
      category: message.investments.category.hybrid.funds,
      tag: message.investments.tag.multi.asset,
      profile: message.investments.profile.balanced,
      risk: message.investments.risk.medium,
      operator: message.investments.operator.toi,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
    {
      name: message.assets.multi.asset.funds.quant,
      category: message.investments.category.hybrid.funds,
      tag: message.investments.tag.multi.asset,
      profile: message.investments.profile.balanced,
      risk: message.investments.risk.medium,
      operator: message.investments.operator.toi,
      shares: [1, 1, 1],
      injection: [100, 100, 100],
      profits: 350,
    },
  ],

  // RENDA VARIÁVEL ------------------------------------------------------------
  stocks: [
    {
      name: message.assets.stocks,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.stocks,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.nbk,
      shares: [10, 10, 10],
      injection: [200, 200, 200],
      profits: 650,
    },
  ],
  international: [
    {
      name: message.assets.international.bdr.amz,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.international,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.nbk,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
    {
      name: message.assets.international.bdr.mli,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.international,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.nbk,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
    {
      name: message.assets.international.bdr.nbk,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.international,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.nbk,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
    {
      name: message.assets.international.funds,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.international,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.toi,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
    {
      name: message.assets.international.ivv,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.international,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.toi,
      shares: [5, 5],
      injection: [40, 40],
      profits: 100,
    },
  ],
  foreignExchange: [
    {
      name: message.assets.foreign.exchange.funds,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.foreign.exchange,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.c6b,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
    {
      name: message.assets.foreign.exchange.cdb,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.foreign.exchange,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.c6b,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
    {
      name: message.assets.foreign.exchange.currency,
      category: message.investments.category.income.variable,
      tag: message.investments.tag.foreign.exchange,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.c6b,
      shares: [5, 5],
      injection: [20, 20],
      profits: 50,
    },
  ],

  // PROTEÇÃO ------------------------------------------------------------------
  protective: [
    {
      name: message.assets.protective.gold,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.protective,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.toi,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
    {
      name: message.assets.protective.funds,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.protective,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.toi,
      shares: [2, 2],
      injection: [15, 15],
      profits: 50,
    },
    {
      name: message.assets.protective.products,
      category: message.investments.category.income.fixed,
      tag: message.investments.tag.protective,
      profile: message.investments.profile.conservative,
      risk: message.investments.risk.low,
      operator: message.investments.operator.toi,
      shares: [5, 5],
      injection: [20, 20],
      profits: 50,
    },
  ],

  // CRIPTOMOEDAS --------------------------------------------------------------
  cryptoCurrencies: [
    {
      name: message.assets.cryptocurrency.btc,
      category: message.investments.category.cryptocurrencies,
      tag: message.investments.tag.cryptocurrencies,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.mep,
      shares: [0, 0.12345678],
      injection: [200, 200],
      profits: 500,
    },
    {
      name: message.assets.cryptocurrency.eth,
      category: message.investments.category.cryptocurrencies,
      tag: message.investments.tag.cryptocurrencies,
      profile: message.investments.profile.aggressive,
      risk: message.investments.risk.high,
      operator: message.investments.operator.mep,
      shares: [0, 0.12345678],
      injection: [300, 300],
      profits: 900,
    },
  ],

  // OUTROS INVESTIMENTOS ------------------------------------------------------
  // SEGURO DE VIDA --------------------
  lifeInsurance: {
    asset: message.assets.life.insurance,
    category: message.investments.category.others,
    tag: message.investments.tag.life.insurance,
    coverage: 123456.78,
    injection: {
      y22: [70, 70, 70, 70], // 2022
      y23: [70, 70, 70, 70, 70, 70, 70, 70, 75, 75, 75, 75], // 2023
      y24: [75, 75, 75, 75, 75, 75, 75, 75, 80, 80, 80, 80], // 2024
      y25: [80, 80, 80, 80, 80, 80, 80], // 2025
    },
    composition: {
      insurance: {
        name: message.global.insurance,
        value: 74,
      },
      funeral: {
        name: message.global.funeral.assistance,
        value: 3.5,
      },
      hospital: {
        name: message.global.hospitalization,
        value: 2.5,
      },
    },
  },
};

/* END OF FILE ============================================================== */
