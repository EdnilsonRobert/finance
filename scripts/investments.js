/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Investments
    Description: Sumário de investimentos da página de investimentos
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
// import { categories, fis, payments } from './messages.js';
// import * as dataExpenses from './fake-expenses.js';
// import * as dataIncome from './fake-income.js';
// import * as dataInvestment from './fake-investments.js';
import * as info from './variables.js';
import * as component from './components.js';
import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// PREVIDÊNCIA PRIVADA ---------------------------------------------------------
let containerPension = document.querySelector('.js-container-pension');
containerPension.append(
  component.place.title(message.investment.type.private.pension, 'cafe')
);

let cardGridPension = component.create.grid();
containerPension.append(cardGridPension);
cardGridPension.append(
  component.card(
    4,
    message.amount.injection.pension,
    'brl',
    formatter.format.money(info.pensionInjectionAmount)
  ),
  component.card(
    4,
    message.amount.profits.pension,
    'brl',
    formatter.format.money(info.pensionProfitsAmount)
  ),
  component.card(
    4,
    message.performance,
    'per',
    utils.calc.performance(
      info.pensionInjectionAmount,
      info.pensionProfitsAmount
    )
  )
);

let moduleAssetPension = component.create.module(
  message.investment.category.private.pension
);
containerPension.append(moduleAssetPension);
moduleAssetPension.append(
  component.barchart(
    message.summary.pension,
    utils.model.data.barchart(info.privatePension)
  )
);
moduleAssetPension.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.privatePension)
  )
);

// RENDA FIXA ------------------------------------------------------------------
let containerIncomeFixed = document.querySelector('.js-container-fixed-income');
containerIncomeFixed.append(
  component.place.title(message.investment.type.income.fixed, 'bar-chart')
);

let cardGridIncomeFixed = component.create.grid();
containerIncomeFixed.append(cardGridIncomeFixed);
cardGridIncomeFixed.append(
  component.card(
    4,
    message.amount.injection.fixed,
    'brl',
    formatter.format.money(info.incomeFixedInjectionAmount)
  ),
  component.card(
    4,
    message.amount.profits.fixed,
    'brl',
    formatter.format.money(info.incomeFixedProfitsAmount)
  ),
  component.card(
    4,
    message.performance,
    'per',
    utils.calc.performance(
      info.incomeFixedInjectionAmount,
      info.incomeFixedProfitsAmount
    )
  )
);
containerIncomeFixed.append(
  component.barchart(message.summary.income.fixed, info.bcd_incomeFixed)
);

let moduleAssetCDI = component.create.module(message.investment.category.cdi);
containerIncomeFixed.append(moduleAssetCDI);
moduleAssetCDI.append(
  component.barchart(message.summary.cdi, utils.model.data.barchart(info.cdi))
);
moduleAssetCDI.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.cdi)
  )
);

let moduleAssetPrivateCR = component.create.module(
  message.investment.category.private.credit
);
containerIncomeFixed.append(moduleAssetPrivateCR);
moduleAssetPrivateCR.append(
  component.barchart(
    message.summary.private.credit,
    utils.model.data.barchart(info.privateCR)
  )
);
moduleAssetPrivateCR.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.privateCR)
  )
);

let moduleAssetFixedRate = component.create.module(
  message.investment.category.fixed.rate
);
containerIncomeFixed.append(moduleAssetFixedRate);
moduleAssetFixedRate.append(
  component.barchart(
    message.summary.fixed.rate,
    utils.model.data.barchart(info.fixedRate)
  )
);
moduleAssetFixedRate.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.fixedRate)
  )
);

let moduleAssetRealInterest = component.create.module(
  message.investment.category.real.interest.rate
);
containerIncomeFixed.append(moduleAssetRealInterest);
moduleAssetRealInterest.append(
  component.barchart(
    message.summary.real.interest,
    utils.model.data.barchart(info.realInterest)
  )
);
moduleAssetRealInterest.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.realInterest)
  )
);

// RENDA HÍBRIDA ---------------------------------------------------------------
let containerIncomeHybrid = document.querySelector(
  '.js-container-hybrid-income'
);
containerIncomeHybrid.append(
  component.place.title(message.investment.type.hybrid.funds, 'pie-chart')
);

let cardGridIncomeHybrid = component.create.grid();
containerIncomeHybrid.append(cardGridIncomeHybrid);
cardGridIncomeHybrid.append(
  component.card(
    4,
    message.amount.injection.hybrid,
    'brl',
    formatter.format.money(info.multiAssetInjectionAmount)
  ),
  component.card(
    4,
    message.amount.profits.hybrid,
    'brl',
    formatter.format.money(info.multiAssetProfitsAmount)
  ),
  component.card(
    4,
    message.performance,
    'per',
    utils.calc.performance(
      info.multiAssetInjectionAmount,
      info.multiAssetProfitsAmount
    )
  )
);

let moduleAssetMultiAsset = component.create.module(
  message.investment.category.multi.asset
);
containerIncomeHybrid.append(moduleAssetMultiAsset);
moduleAssetMultiAsset.append(
  component.barchart(
    message.summary.multi.asset,
    utils.model.data.barchart(info.multiAsset)
  )
);
moduleAssetMultiAsset.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.multiAsset)
  )
);

// RENDA VARIÁVEL --------------------------------------------------------------
let containerIncomeVariable = document.querySelector(
  '.js-container-variable-income'
);
containerIncomeVariable.append(
  component.place.title(message.investment.type.income.variable, 'stats-chart')
);

let cardGridIncomeVariable = component.create.grid();
containerIncomeVariable.append(cardGridIncomeVariable);
cardGridIncomeVariable.append(
  component.card(
    4,
    message.amount.injection.variable,
    'brl',
    formatter.format.money(info.incomeVariableInjectionAmount)
  ),
  component.card(
    4,
    message.amount.profits.variable,
    'brl',
    formatter.format.money(info.incomeVariableProfitsAmount)
  ),
  component.card(
    4,
    message.performance,
    'per',
    utils.calc.performance(
      info.incomeVariableInjectionAmount,
      info.incomeVariableProfitsAmount
    )
  )
);
containerIncomeVariable.append(
  component.barchart(message.summary.income.variable, info.bcd_incomeVariable)
);

let moduleAssetStocks = component.create.module(
  message.investment.category.stocks
);
containerIncomeVariable.append(moduleAssetStocks);
moduleAssetStocks.append(
  component.barchart(
    message.summary.stocks,
    utils.model.data.barchart(info.stocks)
  )
);
moduleAssetStocks.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.stocks)
  )
);

let moduleAssetInternational = component.create.module(
  message.investment.category.international
);
containerIncomeVariable.append(moduleAssetInternational);
moduleAssetInternational.append(
  component.barchart(
    message.summary.international,
    utils.model.data.barchart(info.international)
  )
);
moduleAssetInternational.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.international)
  )
);

let moduleAssetForeignX = component.create.module(
  message.investment.category.foreign.exchange
);
containerIncomeVariable.append(moduleAssetForeignX);
moduleAssetForeignX.append(
  component.barchart(
    message.summary.foreign.exchange,
    utils.model.data.barchart(info.foreignX)
  )
);
moduleAssetForeignX.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.foreignX)
  )
);

// PROTEÇÃO --------------------------------------------------------------------
let containerProtective = document.querySelector('.js-container-protection');
containerProtective.append(
  component.place.title(message.investment.type.protective, 'umbrella')
);

let cardGridProtective = component.create.grid();
containerProtective.append(cardGridProtective);
cardGridProtective.append(
  component.card(
    4,
    message.amount.injection.protective,
    'brl',
    formatter.format.money(info.protectiveInjectionAmount)
  ),
  component.card(
    4,
    message.amount.profits.protective,
    'brl',
    formatter.format.money(info.protectiveProfitsAmount)
  ),
  component.card(
    4,
    message.performance,
    'per',
    utils.calc.performance(
      info.protectiveInjectionAmount,
      info.protectiveProfitsAmount
    )
  )
);

let moduleAssetProtective = component.create.module(
  message.investment.category.protective
);
containerProtective.append(moduleAssetProtective);
moduleAssetProtective.append(
  component.barchart(
    message.summary.protective,
    utils.model.data.barchart(info.protective)
  )
);
moduleAssetProtective.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.protective)
  )
);

// CRIPTOMOEDAS ----------------------------------------------------------------
let containerCrypto = document.querySelector('.js-container-crypto');
containerCrypto.append(
  component.place.title(
    message.investment.type.cryptocurrencies,
    'logo-bitcoin'
  )
);

let cardGridCrypto = component.create.grid();
containerCrypto.append(cardGridCrypto);
cardGridCrypto.append(
  component.card(
    4,
    message.amount.injection.crypto,
    'brl',
    formatter.format.money(info.cryptoInjectionAmount)
  ),
  component.card(
    4,
    message.amount.profits.crypto,
    'brl',
    formatter.format.money(info.cryptoProfitsAmount)
  ),
  component.card(
    4,
    message.performance,
    'per',
    utils.calc.performance(info.cryptoInjectionAmount, info.cryptoProfitsAmount)
  )
);

let moduleAssetCrypto = component.create.module(
  message.investment.category.crytocurrencies
);
containerCrypto.append(moduleAssetCrypto);
moduleAssetCrypto.append(
  component.barchart(
    message.summary.cryptocurrencies,
    utils.model.data.barchart(info.crypto)
  )
);
moduleAssetCrypto.append(
  component.table(
    info.tbd_headerInvestments,
    utils.model.data.table.investments(info.crypto, 8)
  )
);

// OTHER INVESTMENTS -----------------------------------------------------------
// LIFE INSURANCE ----------------------
let containerOtherInvestments = document.querySelector('.js-container-others');
containerOtherInvestments.append(
  component.place.title(message.investment.type.others, 'wallet')
);
let moduleAssetLifeInsurance = component.create.module(
  info.lifeInsurance.asset
);
containerOtherInvestments.append(moduleAssetLifeInsurance);

let cardGridLifeInsurance = component.create.grid();
moduleAssetLifeInsurance.append(cardGridLifeInsurance);
cardGridLifeInsurance.append(
  component.card(
    3,
    message.amount.life.insurance.coverage,
    'brl',
    formatter.format.money(info.lifeInsurance.coverage)
  ),
  component.card(
    3,
    message.amount.installments,
    null,
    info.lifeInsuranceInstallments
  ),
  component.card(
    3,
    message.installment.value,
    'brl',
    formatter.format.money(info.lifeInsuranceInstallment)
  ),
  component.card(
    3,
    message.amount.life.insurance.injection,
    'brl',
    formatter.format.money(info.lifeInsuranceInjectionAmount)
  )
);

moduleAssetLifeInsurance.append(
  component.barchart(message.summary.insurance, info.bcd_lifeInsurance)
);

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
