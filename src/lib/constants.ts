export const SITE = {
  name: "POLINEXT",
  tagline: "IDEIAS QUE CONECTAM O AMANHÃ",
  description:
    "A POLINEXT transforma ideias em experiências e soluções digitais por meio de tecnologia, design, IA e estratégia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "contato@polinext.com.br",
  phone: "+55 (11) 99999-9999",
  areas: ["Tecnologia", "Desenvolvimento", "Design", "IA", "Marketing"],
} as const;

export const NAV_LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/insights", label: "Insights" },
  { href: "/contato", label: "Contato" },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Descoberta", description: "Entendemos seu negócio, objetivos e desafios." },
  { step: 2, title: "Estratégia", description: "Definimos a melhor abordagem e prioridades." },
  { step: 3, title: "Design", description: "Criamos interfaces e experiências memoráveis." },
  { step: 4, title: "Desenvolvimento", description: "Construímos com qualidade e performance." },
  { step: 5, title: "Testes", description: "Validamos funcionalidade, usabilidade e segurança." },
  { step: 6, title: "Lançamento", description: "Publicamos e monitoramos a operação." },
  { step: 7, title: "Evolução", description: "Melhoramos continuamente com base em dados." },
] as const;

export const DIFFERENTIALS = [
  {
    title: "Tecnologia + Design",
    description: "Unimos engenharia sólida com design centrado no usuário.",
  },
  {
    title: "Comunicação transparente",
    description: "Você acompanha cada etapa do projeto com clareza.",
  },
  {
    title: "Arquitetura escalável",
    description: "Soluções preparadas para crescer com seu negócio.",
  },
  {
    title: "Foco em experiência",
    description: "Cada detalhe pensado para gerar valor real.",
  },
  {
    title: "IA responsável",
    description: "Automação inteligente com ética e propósito.",
  },
] as const;

export const SERVICE_OPTIONS = [
  { value: "desenvolvimento-web", label: "Desenvolvimento Web" },
  { value: "aplicativos", label: "Aplicativos" },
  { value: "design", label: "Design" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "inteligencia-artificial", label: "Inteligência Artificial" },
  { value: "solucoes-tecnologicas", label: "Soluções Tecnológicas" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "ate-10k", label: "Até R$ 10.000" },
  { value: "10k-30k", label: "R$ 10.000 – R$ 30.000" },
  { value: "30k-50k", label: "R$ 30.000 – R$ 50.000" },
  { value: "50k-plus", label: "Acima de R$ 50.000" },
  { value: "nao-sei", label: "Ainda não sei" },
] as const;
