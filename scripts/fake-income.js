/** ============================================================================
    Page: Data | Controle de finanças
    Description: Arquivo de dados de renda
============================================================================= */

export const monthly = {
  expense: {
    company: {
      accounting: 250,
      tax: {
        cof: 100, // COFINS - contribuição para financiamento da seguridade social
        csl: 100, // CSLL trimestral - contribuição social sobre lucro líquido
        // das: 300, // DAS - documento de arrecadação fiscal do simples nacional
        gps: 700, // GPS - INSS e IRRF - guia de previdência social
        irf: 300, // IRPJ trimestral - imposto de renda para pessoas jurídicas
        iss: 300, // ISS - imposto sobre serviços de qualquer natureza
        pis: 100, // PIS - programa de integração social
      },
    },
    home: {
      rent: 1500,
      condominium: 500,
    },
  },
  income: {
    hours: 160,
    value: 50,
  },
  reporting: {
    month: 'Julho',
    year: 2025,
  },
};
// TODO: [08-07-2025] Remodelar dados para exibir histórico mensal

// export const hardware = {
//   computer: 5000,
//   smartphone: 2000,
// };
// TODO: [08-07-2025] Adicionar depreciação aos custos da empresa

/* END OF FILE ============================================================== */
