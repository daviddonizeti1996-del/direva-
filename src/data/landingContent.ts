export const BRAND = {
  name: 'DIREVA DIGITAL',
  slogan: 'Tráfego Pago | Estratégia | Performance.',
  whatsappNumber: '5519993256915',
  whatsappDisplay: '+55 19 99325-6915',
  whatsappBaseUrl: 'https://wa.me/5519993256915',
  initialWhatsappMessage:
    'Olá, DIREVA DIGITAL! Tenho interesse em conhecer os serviços de gestão de tráfego pago e presença no Google.',
  instagramUrl: 'https://www.instagram.com/',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: 'users' | 'compass' | 'activity' | 'target';
}

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'poucos-clientes',
    title: 'Poucos novos clientes',
    description:
      'Depender apenas de indicações ou alcance orgânico limita a previsibilidade e impede o crescimento contínuo do seu negócio.',
    iconName: 'users',
  },
  {
    id: 'sem-planejamento',
    title: 'Divulgação sem planejamento',
    description:
      'Impulsionar publicações ou manter perfis desatualizados sem estratégia consome recursos e afasta oportunidades reais.',
    iconName: 'compass',
  },
  {
    id: 'sem-acompanhamento',
    title: 'Anúncios sem acompanhamento',
    description:
      'Campanhas abandonadas no automático perdem relevância, encarecem o custo por contato e desperdiçam orçamento.',
    iconName: 'activity',
  },
  {
    id: 'publico-errado',
    title: 'Dificuldade em alcançar o público certo',
    description:
      'Sem segmentação estratégica e presença estruturada nas buscas locais, sua empresa deixa de aparecer para quem já quer contratar.',
    iconName: 'target',
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  objectivePreset: string;
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'meta-ads',
    number: '01',
    title: 'META ADS',
    subtitle: 'Facebook e Instagram Ads',
    description:
      'Campanhas estruturadas para posicionar sua marca diante do público ideal no feed, stories e reels, gerando conversas qualificadas no WhatsApp e demanda recorrente.',
    deliverables: [
      'Segmentação geográfica e comportamental precisa',
      'Direcionamento estratégico de criativos e copys',
      'Campanhas focadas em mensagens, cadastros e alcance local',
    ],
    objectivePreset: 'Gerar leads no WhatsApp',
    featured: true,
  },
  {
    id: 'google-ads',
    number: '02',
    title: 'GOOGLE ADS',
    subtitle: 'Intenção de busca ativa',
    description:
      'Campanhas para alcançar pessoas que já estão procurando exatamente pelos serviços ou produtos da sua empresa no momento da decisão.',
    deliverables: [
      'Pesquisa e seleção de palavras-chave comerciais',
      'Negativação contínua de termos sem intenção',
      'Anúncios estruturados para busca local e regional',
    ],
    objectivePreset: 'Atrair mais clientes',
  },
  {
    id: 'gestao-trafego',
    number: '03',
    title: 'GESTÃO DE TRÁFEGO PAGO',
    subtitle: 'Planejamento, configuração, monitoramento e otimização',
    description:
      'Operação completa das suas contas de anúncios com acompanhamento constante de métricas, testes contínuos e alocação inteligente da verba.',
    deliverables: [
      'Configuração técnica de contas, pixel e eventos',
      'Monitoramento contínuo de desempenho e verba',
      'Otimização orientada a oportunidades comerciais',
    ],
    objectivePreset: 'Estruturar campanhas do zero',
  },
  {
    id: 'google-meu-negocio',
    number: '04',
    title: 'GOOGLE MEU NEGÓCIO',
    subtitle: 'Perfil da Empresa no Google',
    description:
      'Colocamos sua empresa em evidência nas pesquisas locais do Google, fortalecendo sua presença digital e facilitando que novos clientes encontrem seu negócio.',
    deliverables: [
      'Criação e configuração do Perfil da Empresa no Google.',
      'Otimização de informações comerciais.',
      'Cadastro e organização de produtos e serviços.',
      'Gestão de fotos e publicações.',
      'Estratégia de avaliações e reputação.',
      'Otimização para pesquisas locais.',
      'Atualização e gerenciamento do perfil.',
    ],
    objectivePreset: 'Quero melhorar minha presença no Google.',
    featured: true,
  },
];

export interface LocalPresenceHighlight {
  title: string;
  description: string;
  iconName: 'map-pin' | 'star' | 'briefcase' | 'layers';
}

export const LOCAL_PRESENCE_HIGHLIGHTS: LocalPresenceHighlight[] = [
  {
    title: 'Visibilidade no momento da busca',
    description:
      'Quando um cliente potencial pesquisa por um produto ou serviço na sua região, um Perfil da Empresa bem estruturado coloca seu negócio no mapa de decisão.',
    iconName: 'map-pin',
  },
  {
    title: 'Informações claras e confiáveis',
    description:
      'Horários atualizados, categorias corretas, catálogo de serviços e canais de contato organizados eliminam dúvidas e facilitam o primeiro contato.',
    iconName: 'briefcase',
  },
  {
    title: 'Reputação e prova de cuidado',
    description:
      'Fotos reais, publicações recorrentes e estratégia de avaliações fortalecem a percepção de profissionalismo antes mesmo da primeira conversa.',
    iconName: 'star',
  },
  {
    title: 'Sinergia com o tráfego pago',
    description:
      'Unimos anúncios pagos à presença orgânica local para que sua empresa seja encontrada tanto pelas campanhas quanto pelas pesquisas diretas no Google.',
    iconName: 'layers',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Analisamos o momento atual da sua empresa, sua presença nas buscas locais do Google, seu público, sua região de atuação e os gargalos comerciais.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Desenhamos a arquitetura ideal entre campanhas de mídia paga (Meta Ads e Google Ads) e otimização do Perfil da Empresa no Google.',
  },
  {
    number: '03',
    title: 'Execução',
    description:
      'Estruturamos tecnicamente as contas de anúncio, rastreamento, segmentações e a organização completa das informações comerciais da sua empresa.',
  },
  {
    number: '04',
    title: 'Otimização',
    description:
      'Acompanhamos métricas, atualizamos o perfil e ajustamos campanhas continuamente para manter sua empresa visível e competitiva.',
  },
];

export interface DifferentialItem {
  title: string;
  description: string;
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: 'Estratégia personalizada',
    description:
      'Combinamos tráfego pago e presença digital local conforme o momento, a região, a margem e o objetivo comercial de cada empresa.',
  },
  {
    title: 'Acompanhamento das campanhas',
    description:
      'Nada de subir anúncios ou configurar um perfil e esquecer. Realizamos monitoramento contínuo para sustentar relevância e performance.',
  },
  {
    title: 'Comunicação transparente',
    description:
      'Você sabe exatamente o que está sendo feito, onde a verba está sendo aplicada e quais são os próximos passos da estratégia.',
  },
  {
    title: 'Foco nos objetivos comerciais',
    description:
      'Direcionamos anúncios pagos e otimizações no Google para gerar ligações, mensagens no WhatsApp, agendamentos e oportunidades reais.',
  },
  {
    title: 'Análise de métricas',
    description:
      'Decisões baseadas nos dados reais das plataformas de anúncio e de buscas locais para ajustar rotas com agilidade e clareza.',
  },
];

export const TARGET_AUDIENCES: string[] = [
  'Comerciantes',
  'Empresas locais',
  'Clínicas',
  'Prestadores de serviços',
  'Pequenas e médias empresas',
  'Empreendedores',
];

export const SEGMENT_OPTIONS: string[] = [
  'Clínica / Saúde / Estética',
  'Comércio local / Loja física',
  'Prestação de serviços',
  'E-commerce / Varejo',
  'Consultoria / Escritório profissional',
  'Alimentação / Gastronomia',
  'Imobiliário / Construção',
  'Outro segmento',
];

export const OBJECTIVE_OPTIONS: string[] = [
  'Atrair mais clientes',
  'Gerar leads no WhatsApp',
  'Quero melhorar minha presença no Google.',
  'Aumentar agendamentos / vendas',
  'Fortalecer presença local',
  'Estruturar campanhas do zero',
];

export const BUDGET_OPTIONS: string[] = [
  'Ainda estou avaliando',
  'Até R$ 1.500 / mês',
  'De R$ 1.500 a R$ 3.000 / mês',
  'De R$ 3.000 a R$ 6.000 / mês',
  'Acima de R$ 6.000 / mês',
];
