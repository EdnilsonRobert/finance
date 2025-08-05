/** ============================================================================
    Project: Controle de Finanças
    ----------------------------------------------------------------------------
    File: Investments
    Description: Breakdown da página de investimentos
    Author: EdnilsonRobert
============================================================================= */

import { messages as message } from './messages.js';
import * as info from './variables.js';
import * as component from './components.js';
// import * as graphic from './graphics.js';
import * as formatter from './formatters.js';
import * as utils from './utils.js';
// import * as getter from './getters.js';

// PREVIDÊNCIA PRIVADA ---------------------------------------------------------
let containerPension = document.querySelector('.js-container-pension');
containerPension.append(
  component.place.title(message.investments.category.private.pension, 'cafe')
);

let cardGridPension = component.create.grid();
containerPension.append(cardGridPension);
cardGridPension.append(
  component.card(
    4,
    message.global.amount.injection.pension,
    'brl',
    formatter.format.money(info.privatePensionInjectionAmount)
  ),
  component.card(
    4,
    message.global.amount.profits.pension,
    'brl',
    formatter.format.money(info.privatePensionProfitsAmount)
  ),
  component.card(
    4,
    message.global.performance,
    'per',
    utils.calc.performance(
      info.privatePensionInjectionAmount,
      info.privatePensionProfitsAmount
    )
  )
);

let moduleAssetPension = component.create.module(
  message.investments.tag.private.pension
);
containerPension.append(moduleAssetPension);
moduleAssetPension.append(
  component.barchart(
    message.global.summary.pension,
    utils.modelBarchartInvestmentsAssets(info.privatePension)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.privatePension),
    'table-investments'
  )
);

// RENDA FIXA ------------------------------------------------------------------
let containerIncomeFixed = document.querySelector('.js-container-fixed-income');
containerIncomeFixed.append(
  component.place.title(message.investments.category.income.fixed, 'bar-chart')
);

let cardGridIncomeFixed = component.create.grid();
containerIncomeFixed.append(cardGridIncomeFixed);
cardGridIncomeFixed.append(
  component.card(
    4,
    message.global.amount.injection.fixed,
    'brl',
    formatter.format.money(info.incomeFixedInjectionAmount)
  ),
  component.card(
    4,
    message.global.amount.profits.fixed,
    'brl',
    formatter.format.money(info.incomeFixedProfitsAmount)
  ),
  component.card(
    4,
    message.global.performance,
    'per',
    utils.calc.performance(
      info.incomeFixedInjectionAmount,
      info.incomeFixedProfitsAmount
    )
  )
);
containerIncomeFixed.append(
  component.barchart(
    message.global.summary.income.fixed,
    utils.modelBarchartInvestmentsCategories(
      info.bcd_incomeFixedHeaders,
      info.incomeFixed
    )
  )
);

let moduleAssetCDI = component.create.module(message.investments.tag.cdi);
containerIncomeFixed.append(moduleAssetCDI);
moduleAssetCDI.append(
  component.barchart(
    message.global.summary.cdi,
    utils.modelBarchartInvestmentsAssets(info.cdi)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.cdi),
    'table-investments'
  )
);

let moduleAssetPrivateCredit = component.create.module(
  message.investments.tag.private.credit
);
containerIncomeFixed.append(moduleAssetPrivateCredit);
moduleAssetPrivateCredit.append(
  component.barchart(
    message.global.summary.private.credit,
    utils.modelBarchartInvestmentsAssets(info.privateCredit)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.privateCredit),
    'table-investments'
  )
);

let moduleAssetFixedRate = component.create.module(
  message.investments.tag.fixed.rate
);
containerIncomeFixed.append(moduleAssetFixedRate);
moduleAssetFixedRate.append(
  component.barchart(
    message.global.summary.fixed.rate,
    utils.modelBarchartInvestmentsAssets(info.fixedRate)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.fixedRate),
    'table-investments'
  )
);

let moduleAssetRealInterest = component.create.module(
  message.investments.tag.real.interest.rate
);
containerIncomeFixed.append(moduleAssetRealInterest);
moduleAssetRealInterest.append(
  component.barchart(
    message.global.summary.real.interest,
    utils.modelBarchartInvestmentsAssets(info.realInterest)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.realInterest),
    'table-investments'
  )
);

// RENDA HÍBRIDA ---------------------------------------------------------------
let containerIncomeHybrid = document.querySelector(
  '.js-container-hybrid-income'
);
containerIncomeHybrid.append(
  component.place.title(message.investments.category.hybrid.funds, 'pie-chart')
);

let cardGridIncomeHybrid = component.create.grid();
containerIncomeHybrid.append(cardGridIncomeHybrid);
cardGridIncomeHybrid.append(
  component.card(
    4,
    message.global.amount.injection.hybrid,
    'brl',
    formatter.format.money(info.hybridFundsInjectionAmount)
  ),
  component.card(
    4,
    message.global.amount.profits.hybrid,
    'brl',
    formatter.format.money(info.hybridFundsProfitsAmount)
  ),
  component.card(
    4,
    message.global.performance,
    'per',
    utils.calc.performance(
      info.hybridFundsInjectionAmount,
      info.hybridFundsProfitsAmount
    )
  )
);

let moduleAssetMultiAsset = component.create.module(
  message.investments.tag.multi.asset
);
containerIncomeHybrid.append(moduleAssetMultiAsset);
moduleAssetMultiAsset.append(
  component.barchart(
    message.global.summary.multi.asset,
    utils.modelBarchartInvestmentsAssets(info.multiAsset)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.multiAsset),
    'table-investments'
  )
);

// RENDA VARIÁVEL --------------------------------------------------------------
let containerIncomeVariable = document.querySelector(
  '.js-container-variable-income'
);
containerIncomeVariable.append(
  component.place.title(
    message.investments.category.income.variable,
    'stats-chart'
  )
);

let cardGridIncomeVariable = component.create.grid();
containerIncomeVariable.append(cardGridIncomeVariable);
cardGridIncomeVariable.append(
  component.card(
    4,
    message.global.amount.injection.variable,
    'brl',
    formatter.format.money(info.incomeVariableInjectionAmount)
  ),
  component.card(
    4,
    message.global.amount.profits.variable,
    'brl',
    formatter.format.money(info.incomeVariableProfitsAmount)
  ),
  component.card(
    4,
    message.global.performance,
    'per',
    utils.calc.performance(
      info.incomeVariableInjectionAmount,
      info.incomeVariableProfitsAmount
    )
  )
);
containerIncomeVariable.append(
  component.barchart(
    message.global.summary.income.fixed,
    utils.modelBarchartInvestmentsCategories(
      info.bcd_incomeVariableHeaders,
      info.incomeVariable
    )
  )
);

let moduleAssetStocks = component.create.module(message.investments.tag.stocks);
containerIncomeVariable.append(moduleAssetStocks);
moduleAssetStocks.append(
  component.barchart(
    message.global.summary.stocks,
    utils.modelBarchartInvestmentsAssets(info.stocks)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.stocks),
    'table-investments'
  )
);

let moduleAssetInternational = component.create.module(
  message.investments.tag.international
);
containerIncomeVariable.append(moduleAssetInternational);
moduleAssetInternational.append(
  component.barchart(
    message.global.summary.international,
    utils.modelBarchartInvestmentsAssets(info.international)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.international),
    'table-investments'
  )
);

let moduleAssetForeignX = component.create.module(
  message.investments.tag.foreign.exchange
);
containerIncomeVariable.append(moduleAssetForeignX);
moduleAssetForeignX.append(
  component.barchart(
    message.global.summary.foreign.exchange,
    utils.modelBarchartInvestmentsAssets(info.foreignExchange)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.foreignExchange),
    'table-investments'
  )
);

// PROTEÇÃO --------------------------------------------------------------------
let containerProtective = document.querySelector('.js-container-protection');
containerProtective.append(
  component.place.title(message.investments.tag.protective, 'umbrella')
);

let cardGridProtective = component.create.grid();
containerProtective.append(cardGridProtective);
cardGridProtective.append(
  component.card(
    4,
    message.global.amount.injection.protective,
    'brl',
    formatter.format.money(info.protectiveInjectionAmount)
  ),
  component.card(
    4,
    message.global.amount.profits.protective,
    'brl',
    formatter.format.money(info.protectiveProfitsAmount)
  ),
  component.card(
    4,
    message.global.performance,
    'per',
    utils.calc.performance(
      info.protectiveInjectionAmount,
      info.protectiveProfitsAmount
    )
  )
);

let moduleAssetProtective = component.create.module(
  message.investments.tag.protective
);
containerProtective.append(moduleAssetProtective);
moduleAssetProtective.append(
  component.barchart(
    message.global.summary.protective,
    utils.modelBarchartInvestmentsAssets(info.protective)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.protective),
    'table-investments'
  )
);

// CRIPTOMOEDAS ----------------------------------------------------------------
let containerCrypto = document.querySelector('.js-container-crypto');
containerCrypto.append(
  component.place.title(
    message.investments.category.cryptocurrencies,
    'logo-bitcoin'
  )
);

let cardGridCrypto = component.create.grid();
containerCrypto.append(cardGridCrypto);
cardGridCrypto.append(
  component.card(
    4,
    message.global.amount.injection.crypto,
    'brl',
    formatter.format.money(info.cryptocurrenciesInjectionAmount)
  ),
  component.card(
    4,
    message.global.amount.profits.crypto,
    'brl',
    formatter.format.money(info.cryptocurrenciesProfitsAmount)
  ),
  component.card(
    4,
    message.global.performance,
    'per',
    utils.calc.performance(
      info.cryptocurrenciesInjectionAmount,
      info.cryptocurrenciesProfitsAmount
    )
  )
);

let moduleAssetCrypto = component.create.module(
  message.investments.tag.cryptocurrencies
);
containerCrypto.append(moduleAssetCrypto);
moduleAssetCrypto.append(
  component.barchart(
    message.global.summary.cryptocurrencies,
    utils.modelBarchartInvestmentsAssets(info.cryptocurrencies)
  ),
  component.table(
    info.tbd_headerInvestments,
    utils.modelTableInvestments(info.cryptocurrencies, 8),
    'table-investments'
  )
);

// OTHER INVESTMENTS -----------------------------------------------------------
// LIFE INSURANCE ----------------------
let containerOtherInvestments = document.querySelector('.js-container-others');
containerOtherInvestments.append(
  component.place.title(message.investments.category.others, 'wallet')
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
    message.global.amount.life.insurance.coverage,
    'brl',
    formatter.format.money(info.lifeInsurance.coverage)
  ),
  component.card(
    3,
    message.global.amount.installments,
    null,
    info.lifeInsuranceInstallments
  ),
  component.card(
    3,
    message.global.installment.value,
    'brl',
    formatter.format.money(info.lifeInsuranceInstallment)
  ),
  component.card(
    3,
    message.global.amount.life.insurance.injection,
    'brl',
    formatter.format.money(info.lifeInsuranceInjectionAmount)
  )
);
moduleAssetLifeInsurance.append(
  component.barchart(message.global.summary.insurance, info.bcd_lifeInsurance)
);

// RELATED CONTENT -------------------------------------------------------------
// FINANCIAL INSTITUTIONS --------------
let containerAccounts = document.querySelector('.js-container-related');
component.fiAccounts(containerAccounts);

/* END OF FILE ============================================================== */
