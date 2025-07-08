/** ============================================================================
    Page: Getters | Controle de finanças
    Description: Arquivo de funções para captura e filtro de dados
============================================================================= */

// import { messages as message } from './messages.js';
// import { categories, payments } from './messages.js';
// import * as info from './variables.js';
// import * as utils from './utils.js';

// GLOBAL ----------------------------------------------------------------------
// export let sum = {
//   values: (data) => {
//     let valuesCollection = [];
//     data.forEach((item) => (valuesCollection = valuesCollection.concat(item)));
//     let result = utils.sum.values(valuesCollection);
//     return result;
//   },
//   length: (data) => {
//     let valuesCollection = [];
//     data.forEach((item) => (valuesCollection = valuesCollection.concat(item)));
//     let result = valuesCollection.length;
//     return result;
//   },
// };

// EXPENSES --------------------------------------------------------------------
// export let fetchDataBy = (parameter, key) =>
//   info.expensesData.filter((data) => data[parameter] === key);

// export let fetchDataByType = (parameter, key) => {
//   const expenses = info.expensesData;
//   const msg = message.global[parameter];
//   const result = expenses.filter((data) => data[parameter] === msg[key]);
//   return result;
// };

// export let getAllExpenses = (data) => {
//   let result = 0;
//   data.forEach((item) => {
//     if (item.value) result += item.value;
//   });
//   return result;
// };

// export let getAllInvestments = () => {
//   let result = 0;
//   const values = fetchDataBy('category', categories.investment);
//   values.forEach((item) => (result += item.value));
//   return result;
// };

// export let getDataBy = (parameter, data) => {
//   const result = [];
//   for (let key in data) {
//     const dataFetch = fetchDataBy(parameter, data[key]);
//     const value = getAllExpenses(dataFetch);
//     const obj = {
//       value: value,
//       label: data[key],
//     };
//     result.push(obj);
//   }
//   return result;
// };

// export let getDataByPayment = (pay) =>
//   info.expensesData.filter((data) => data.payment === payments[pay]);

// export let getDataByType = (type) => {
//   const result = [];
//   for (let key in message.global[type]) {
//     const data = fetchDataByType(type, key);
//     const value = getAllExpenses(data);
//     const label = message.global[type];
//     const obj = {
//       value: value,
//       label: label[key],
//     };
//     result.push(obj);
//   }
//   return result;
// };

/* END OF FILE ============================================================== */
