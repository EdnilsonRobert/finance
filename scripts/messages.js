/** ============================================================================
    Page: Messages | Controle de finanças
    Description: Arquivo de variáveis de mensagens
============================================================================= */

export const messages = {
  income: {
    // cash: {
    //   essential: 'Essencial',
    //   usable: 'Utilizável',
    // },
    emergency: {
      accomplished: 'Alcançada',
      fund: 'Fundo de emergência',
      target: 'Meta',
    },
    expenses: {
      essential: 'Despesas essenciais',
    },
    investment: {
      performed: 'Investimento realizado',
    },
    monthly: {
      balance: 'Balanço mensal',
      earnings: 'Proventos',
      hour: 'Horas trabalhadas',
      income: 'Renda mensal',
      value: 'Valor/hora',
    },
    reserve: {
      description: {
        emergency: '8% do utilizável',
        extra: '1/12 do utilizável',
        investments: '10% do utilizável',
        vacation: '1/12 do utilizável',
      },
      emergency: 'Emergência',
      extra: '13\u00B0 salário',
      financial: 'Reserva financeira',
      investments: 'Investimentos',
      vacation: 'Férias',
    },
    share: 'Distribuição de renda',
  },

  investment: {
    category: {
      cdi: 'CDI',
      crytocurrencies: 'Criptomoedas',
      fixed: {
        rate: 'Prefixado',
      },
      foreign: {
        exchange: 'Cambial',
      },
      international: 'Internacional',
      // life: {
      //   insurance: 'Seguro de vida',
      // },
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
    type: {
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
  },

  expenses: {
    category: {
      habitation: 'Moradia',
      services: 'Serviços online',
      personal: 'Gastos pessoais',
      food: 'Alimentação',
      coffee: 'Café',
      home: 'Casa',
      health: 'Saúde',
      education: 'Educação',
      lifestyle: 'Estilo de vida',
      culture: 'Lazer e cultura',
      transportation: 'Transporte',
      clothing: 'Vestuário',
      religion: 'Religião',
      company: 'Empresa',
      professional: 'Profissional',
      uncategorized: 'Sem categoria',
      investment: 'Investimentos',
    },
    payment: {
      fi: {
        bra: 'Bradesco',
        c6b: 'C6 Bank',
        mep: 'Mercado Pago',
        nbk: 'Nubank',
      },
      method: {
        auto: 'Débito automático',
        bill: 'Boleto bancário',
        cash: 'Em dinheiro',
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        pix: 'Pix',
      },
      type: {
        cost: 'Custo de vida',
        local: 'Compras locais',
        online: 'Compras online',
        subscription: 'Assinaturas',
        uncategorized: 'Não definido',
        investment: 'Investimentos',
      },
    },
    tag: {
      habitation: {
        billcustomer: 'Contas de consumo',
        condominium: 'Condomínio',
        internet: 'Vivo Fibra',
        rent: 'Aluguel',
      },
      services: {
        subscription: 'Assinatura',
      },
      personal: {
        phone: 'Vivo Easy',
      },
      food: {
        butchershop: 'Açougue',
        convenience: 'Loja de conveniência',
        delivery: 'Delivery',
        ifood: 'iFood',
        local: 'Consumo local',
        market: 'Supermercado',
        marketstreet: 'Feira',
        online: 'Compra online',
      },
      coffee: {
        caps: 'Cápsulas',
        powder: 'Pós de café',
        utils: 'Utensílios',
      },
      home: {
        articles: 'Artigos em geral',
        furniture: 'Mobília',
      },
      health: {
        pharmacy: 'Farmácia',
      },
      education: {
        fiap: 'FIAP',
      },
      lifestyle: {
        barber: 'Barbearia',
        hobby: 'Hobby',
        jiujitsu: 'Jiu-Jitsu',
        massage: 'Massagem',
      },
      culture: {
        book: 'Livros',
        cine: 'Cinema',
        food: 'Alimentação',
        game: 'Jogos',
        music: 'Música',
        ticket: 'Ingressos',
        transportation: 'Transporte',
        travel: 'Viagem',
      },
      transportation: {
        app99: '99 App',
        public: 'Transporte público',
        uber: 'Uber',
      },
      clothing: {
        clothes: 'Roupas',
        cosmetics: 'Perfumaria',
      },
      religion: {
        kofu: 'Kofu',
        service: 'Assinaturas online',
      },
      company: {
        accounting: 'Contabilidade',
        taxes: 'Impostos e taxas',
        costs: 'Custos e despesas',
      },
      professional: {
        book: 'Livros',
        course: 'Cursos',
      },
      uncategorized: {
        allowance: 'Mesada',
        c6: 'Tarifa bancária C6',
        gift: 'Presentes',
        unknown: 'Desconhecido',
      },
      investment: {
        pension: 'Previdência privada',
        fixed: 'Renda fixa',
        variable: 'Renda variável',
        insurance: 'Seguros',
        crypto: 'Criptomoedas',
      },
    },
  },

  // classroom: {},

  amount: {
    company: {
      expenses: 'Gastos de empresa',
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
  funeral: {
    assistance: 'Assistência funeral',
  },
  hospitalization: 'Hospitalização',
  injection: 'Investimento',
  installment: {
    value: 'Valor da parcela mensal',
  },
  insurance: 'Seguro',
  mode: 'Modo',
  payment: 'Pagamento',
  performance: 'Desempenho',
  profile: 'Perfil',
  profits: 'Rendimento',
  operator: 'Operador',
  risk: 'Risco',
  share: {
    number: 'Quantidade',
  },
  statement: 'Demonstração de gastos',
  summary: {
    cdi: 'Distribuição de ativos em CDI',
    cryptocurrencies: 'Distribuição de criptomoedas',
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
    pension: 'Distribuição de ativos em previdência privada',
    private: {
      credit: 'Distribuição de ativos em crédito privado',
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

  global: {
    menu: {
      label: {
        classroom: 'Sala de aula',
        expenses: 'Controle de gastos',
        income: 'Controle de renda',
        investments: 'Controle de investimentos',
      },
    },
    project: {
      name: 'Controle Financeiro',
    },
    sign: {
      brl: 'R$',
      percentage: '%',
    },
  },

  fi: [
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
