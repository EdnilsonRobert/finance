/** ============================================================================
    Page: Messages | Controle de finanças
    Description: Arquivo de variáveis de mensagens
============================================================================= */

// model messages = {
//   global {},
//   income {},
//   expenses {},
//   investments {},
//   payments {},
//   classroom {},
//   fis {},
//   assets {},
// };

export const messages = {
  // GLOBAL --------------------------------------------------------------------
  global: {
    amount: {
      company: {
        expenses: 'Total de obrigações de empresa',
      },
      injection: {
        crypto: 'Total investido em criptomoedas',
        fixed: 'Total investido em renda fixa',
        hybrid: 'Total investido em renda híbrida',
        pension: 'Total investido em previdência privada',
        protective: 'Total investido em ativos de proteção',
        variable: 'Total investido em renda variável',
      },
      installments: 'Parcelas pagas',
      life: {
        insurance: {
          coverage: 'Valor da cobertura',
          injection: 'Total investido',
        },
      },
      monthly: {
        expenses: 'Total em despesas',
      },
      profits: {
        crypto: 'Total de rendimentos em criptomoedas',
        fixed: 'Total de rendimentos em renda fixa',
        hybrid: 'Total de rendimentos em renda híbrida',
        pension: 'Total de rendimentos em previdência privada',
        protective: 'Total de rendimentos em ativos de proteção',
        variable: 'Total de rendimentos em renda variável',
      },
    },
    asset: 'Ativo',
    balance: 'Saldo',
    bank: 'Banco',
    category: 'Categoria',
    company: {
      accounting: 'Contabilidade',
      corporation: 'Empresa',
      expenses: {
        accounting: 'Mensalidade da Conube',
        obligations: 'Contabilidade e impostos',
        others: 'Gastos não contabilizados como obrigações',
        taxes: 'Soma de taxas e impostos',
      },
      obligation: 'Obrigações da empresa',
      other: {
        expenses: 'Outras despesas',
      },
      tax: {
        cof: {
          abbr: 'COFINS',
          desc: 'COFINS [Contribuição para Financiamento da Seguridade Social]',
        },
        csl: {
          abbr: 'CSLL',
          desc: 'CSLL [Contribuição Social sobre Lucro Líquido]',
        },
        das: {
          abbr: 'DAS',
          desc: 'DAS [Documento de Arrecadação Fiscal do Simples Nacional]',
        },
        gps: {
          abbr: 'GPS',
          desc: 'GPS (INSS e IRRF) [Guia de Previdência Social]',
        },
        irf: {
          abbr: 'IRPJ',
          desc: 'IRPJ [Imposto de Renda para Pessoas Jurídicas]',
        },
        iss: {
          abbr: 'ISS',
          desc: 'ISS [Imposto sobre Serviços de Qualquer Natureza]',
        },
        pis: {
          abbr: 'PIS',
          desc: 'PIS [Programa de Integração Social]',
        },
      },
      taxes: 'Taxas e impostos',
    },
    dashboard: 'Dashboard',
    date: 'Data',
    description: 'Descrição',
    financial: {
      institution: {
        account: 'Conta corrente',
        agency: 'Agência',
        code: 'Banco',
      },
      institutions: 'Instituições financeiras',
    },
    graphics: 'Gráficos',
    injection: 'Investimento',
    installment: {
      value: 'Valor da parcela mensal',
    },
    investment: {
      expectation: 'Abaixo da espectativa de investimentos:',
      monthly: 'Investimento mensal',
      performed: 'Investimento realizado',
      success: 'Sucesso! Meta alcançada',
    },
    investments: {
      calculator: 'Calculadora de investimentos',
      target: 'Reserva destinada a investimentos',
    },
    items: {
      none: 'Nenhum item',
      plural: 'itens',
      singular: 'item',
    },
    menu: {
      label: {
        classroom: 'Sala de aula',
        expenses: 'Controle de gastos',
        income: 'Controle de renda',
        investments: 'Controle de investimentos',
      },
    },
    method: 'Método',
    monthly: {
      balance: 'Balanço mensal',
      income: 'Renda mensal',
    },
    operator: 'Operador',
    payment: 'Pagamento',
    performance: 'Desempenho',
    profile: 'Perfil',
    profits: 'Rendimento',
    project: {
      name: 'Controle Financeiro',
    },
    risk: 'Risco',
    share: {
      number: 'Quantidade',
    },
    sign: {
      brl: 'R$',
      percentage: '%',
    },
    statement: 'Demonstração de gastos',
    summary: {
      cdi: 'Distribuição de ativos em CDI',
      company: {
        obligations: 'Resumo de obrigações de empresa',
      },
      cryptocurrencies: 'Distribuição de criptomoedas',
      expenses: {
        category: 'Distribuição de despesas por categorias',
        fi: 'Distribuição de despesas por instituições financeiras',
        method: 'Distribuição de despesas por métodos de pagamento',
        type: 'Distribuição de despesas por tipos de pagamento',
      },
      fixed: {
        rate: 'Distribuição de ativos prefixados',
      },
      foreign: {
        exchange: 'Distribuição de ativos cambiais',
      },
      income: {
        fixed: 'Distribuição de ativos em renda fixa',
        variable: 'Distribuição de ativos em renda variável',
      },
      insurance: 'Composição do seguro',
      international: 'Distribuição de ativos internacionais',
      monthly: {
        expenses: 'Resumo de despesas mensais',
      },
      multi: {
        asset: 'Distribuição de ativos em multimercado',
      },
      payment: {
        category: 'Distribuição de gastos por categoria',
      },
      private: {
        credit: 'Distribuição de ativos em crédito privado',
        pension: 'Distribuição de ativos em previdência privada',
      },
      protective: 'Distribuição de ativos em proteção',
      real: {
        interest: 'Distribuição de ativos em juro real',
      },
      reserve: {
        share: 'Composição de reserva financeira',
      },
      stocks: 'Distribuição de ativos em ações brasileiras',
    },
    tag: 'Marcador',
    value: 'Valor',
  },

  // INCOME --------------------------------------------------------------------
  income: {
    cash: {
      essential: 'Despesas essenciais',
      usable: 'Saldo utilizável',
    },
    earnings: 'Proventos',
    emergency: {
      accomplished: 'Desempenho atual',
      description: {
        accomplished: 'Total acumulado para fundo de emergência',
        balance: {
          negative: 'Objetivo para alcançar a meta',
          positive: 'Meta alcançada e superada em...',
        },
        essential: 'Despesa básica de moradia',
        target: 'Estimativa para seis meses de despesas essenciais',
      },
      fund: 'Fundo de emergência',
      target: 'Meta para fundo de emergência',
    },
    reporting: {
      hour: 'Horas trabalhadas',
      value: 'Valor/hora',
    },
    reserve: {
      description: {
        emergency: '8% do saldo utilizável',
        extra: '1/12 da meta de 13\u00B0 salário',
        investments: '10% do utilizável',
        vacation: '1/12 da meta de férias',
      },
      emergency: 'Emergência',
      extra: '13\u00B0 salário',
      financial: 'Reserva financeira',
      investments: 'Investimentos',
      vacation: 'Férias',
    },
    share: 'Distribuição de renda',
  },

  // EXPENSES ------------------------------------------------------------------
  expenses: {},

  // INVESTMENTS ---------------------------------------------------------------
  investments: {
    category: {
      cryptocurrencies: 'Criptomoedas',
      hybrid: {
        funds: 'Renda híbrida',
      },
      income: {
        fixed: 'Renda fixa',
        variable: 'Renda variável',
      },
      others: 'Outros investimentos',
      private: {
        pension: 'Previdência privada',
      },
      protective: 'Proteção',
    },
    operator: {
      bra: 'Bradesco',
      c6b: 'C6 Bank',
      mep: 'Mercado Pago',
      nbk: 'Nubank',
      toi: 'Toro Investimentos',
      treasure: {
        bonds: 'Tesouro Direto',
      },
    },
    profile: {
      aggressive: 'Arrojado',
      balanced: 'Moderado',
      conservative: 'Conservador',
    },
    risk: {
      high: 'Risco alto',
      low: 'Risco baixo',
      medium: 'Risco médio',
    },
    share: {
      description: {
        //     cdi: '27% da parcela para investimentos',
        cryptocurrencies: '10% da meta de investimentos',
        //     fixedRate: '1% da parcela para investimentos',
        //     foreignExchange: '2% da parcela para investimentos',
        //     international: '8% da parcela para investimentos',
        //     multiAsset: '18% da parcela para investimentos',
        portfolio: '50% da meta de investimentos',
        //     privateCredit: '8% da parcela para investimentos',
        privatePension: '40% da meta de investimentos',
        //     protective: '2% da parcela para investimentos',
        //     realInterestRate: '13% da parcela para investimentos',
        //     stocks: '12% da parcela para investimentos',
      },
      label: {
        cryptocurrencies: 'Criptomoedas',
        life: {
          insurance: {
            funeral: {
              assistance: 'Assistência funeral',
            },
            hospitalization: 'Hospitalização',
            insurance: 'Seguro',
          },
        },
        portfolio: 'Carteira de investimentos',
        privatePension: 'Previdência Privada',
      },
    },
    tag: {
      cdi: 'CDI',
      cryptocurrencies: 'Criptomoedas',
      fixed: {
        rate: 'Prefixado',
      },
      foreign: {
        exchange: 'Cambial',
      },
      international: 'Internacional',
      life: {
        insurance: 'Seguro de vida',
      },
      multi: {
        asset: 'Multimercado',
      },
      private: {
        credit: 'Crédito privado',
        pension: 'Previdência privada',
      },
      protective: 'Proteção',
      real: {
        interest: {
          rate: 'Juro real',
        },
      },
      stocks: 'Ações brasileiras',
    },
  },

  // PAYMENTS ------------------------------------------------------------------
  payments: {
    category: {
      habitation: 'Moradia',
      food: 'Alimentação',
      home: 'Casa',
      culture: 'Lazer e cultura',
      lifestyle: 'Estilo de vida',
      clothing: 'Vestuário',
      transportation: 'Transporte',
      professional: 'Profissional',
      subscription: 'Assinaturas',
      uncategorized: 'Sem categoria',
      coffee: 'Café',
      investment: 'Investimentos',
    },
    fi: {
      bra: 'Bradesco',
      c6b: 'C6 Bank',
      mep: 'Mercado Pago',
      nbk: 'Nubank',
    },
    method: {
      credit: 'Cartão de crédito',
      debit: 'Cartão de débito',
      pix: 'Pix',
      bill: 'Boleto bancário',
      auto: 'Débito automático',
      cash: 'Em dinheiro',
    },
    type: {
      recurrent: 'Pagamentos recorrentes',
      local: 'Pagamentos locais',
      online: 'Pagamentos online',
      uncategorized: 'Não definido',
    },
    tag: {
      habitation: {
        rent: 'Aluguel',
        condominium: 'Condomínio',
        billcustomer: 'Energia elétrica',
        internet: 'Vivo Fibra',
      },
      food: {
        butchershop: 'Açougue',
        market: 'Supermercado',
        convenience: 'Loja de conveniência',
        marketstreet: 'Feira',
        local: 'Consumo local',
        delivery: 'Delivery',
        online: 'Compra online',
      },
      home: {
        articles: 'Artigos em geral',
        furniture: 'Mobília',
        health: 'Saúde',
      },
      culture: {
        education: 'Educação',
        books: 'Livros',
        cine: 'Cinema',
        tickets: 'Ingressos',
        games: 'Jogos',
        food: 'Alimentação',
        transportation: 'Transporte',
        travel: 'Viagem',
      },
      lifestyle: {
        hobby: 'Hobby',
        jiujitsu: 'Jiu-Jitsu',
        religion: 'Religião',
      },
      clothing: {
        clothes: 'Roupas',
        cosmetics: 'Perfumaria',
        barber: 'Barbearia',
      },
      transportation: {
        public: 'Transporte público',
        app99: '99 App',
        uber: 'Uber',
      },
      professional: {
        accounting: 'Contabilidade',
        taxes: 'Impostos e taxas',
        costs: 'Custos e despesas',
        books: 'Livros',
        courses: 'Cursos',
      },
      subscription: {
        service: 'Serviços online',
        music: 'Stream de música',
        video: 'Stream de vídeos',
        mobile: 'Telefonia móvel',
      },
      uncategorized: {
        allowance: 'Mesada',
        c6: 'Tarifa bancária C6',
        gifts: 'Presentes',
        unknown: 'Desconhecido',
      },
      coffee: {
        caps: 'Cápsulas de café',
        package: 'Pó de café',
        utils: 'Utensílios',
      },
      investment: {
        pension: 'Previdência privada',
        assets: 'Ativos financeiros',
        cryptocurrencies: 'Criptomoedas',
        insurance: 'Seguro de vida',
      },
    },
  },

  // CLASSROOM -----------------------------------------------------------------
  // classroom: {},

  // FIs -----------------------------------------------------------------------
  fis: [
    {
      name: 'Bradesco',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
    {
      name: 'C6 Bank',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
    {
      name: 'Mercado Pago',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
    {
      name: 'Méliuz',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
    {
      name: 'Nubank',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
    {
      name: 'PicPay',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
    {
      name: 'Toro Investimentos',
      fiCode: '123',
      agency: '4567',
      account: '123456-9',
    },
  ],

  // ASSETS --------------------------------------------------------------------
  assets: {
    cdi: {
      cdb: 'CDB (Certificados de Depósito Bancário) com liquidez diária',
      di: 'Fundos DI',
      selic: 'Tesouro Selic (título do Tesouro Nacional)',
    },
    cryptocurrency: {
      btc: 'BTC [Bitcoin]',
      eth: 'ETH [Etherium]',
    },
    fixed: {
      rate: {
        cdb: 'CDB prefixado',
        debenture: 'Debêntures prefixadas',
        treasure: 'Tesouro Prefixado',
      },
    },
    foreign: {
      exchange: {
        cdb: 'CDBs atrelados ao dólar',
        currency: 'Compra direta de moeda estrangeira',
        funds: 'Fundos cambiais',
      },
    },
    international: {
      bdr: {
        amz: 'Ações estrangeiras via BDR - Amazon [amzo34]',
        mli: 'Ações estrangeiras via BDR - Mercado Livre [meli34]',
        nbk: 'Ações estrangeiras via BDR - Nubank [nubr33]',
      },
      funds: 'Fundos de investimento internacionais',
      ivv: 'IVVB11 (ETF que segue o S&P 500)',
    },
    life: {
      insurance: 'Seguro de vida Bradesco',
    },
    multi: {
      asset: {
        funds: {
          long: 'Fundos long & short',
          quant: 'Fundos quantitativos',
        },
        multimarket: 'Fundos multimercado macro',
      },
    },
    pension: {
      one: 'Asset 01 [Previdência privada]',
      two: 'Asset 02 [Previdência privada]',
    },
    private: {
      credit: {
        bonds: 'Letras Financeiras emitidas por bancos',
        crs: 'CRIs/CRAs (Certificados de Recebíveis Imobiliários / do Agronegócio)',
        debenture: 'Debêntures',
      },
    },
    protective: {
      funds: 'Fundos conservadores com foco em capital protegido',
      gold: 'Ouro (via ETF GOLD11)',
      products: 'Produtos estruturados com barreiras de proteção',
    },
    real: {
      interest: {
        debenture: 'Debêntures incentivadas atreladas ao IPCA',
        treasure: 'Tesouro IPCA+',
      },
    },
    stocks: 'Ações brasileiras na B3 - B3 [b3sa3]',
  },
};

/* END OF FILE ============================================================== */
