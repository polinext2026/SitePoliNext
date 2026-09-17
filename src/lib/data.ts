import { createClient } from "@/lib/supabase/server";
import type { Post, Project, Service, TeamMember } from "@/types/database";

const fallbackServices: Service[] = [
  {
    id: "1",
    title: "Desenvolvimento Web",
    slug: "desenvolvimento-web",
    summary: "Sites, sistemas, integrações, performance e manutenção.",
    content: "Criamos experiências web que combinam performance, segurança e design.",
    icon: "code",
    order: 1,
    status: "published",
    problem: "Sua presença digital não reflete a qualidade do seu negócio.",
    deliverables: ["Site institucional", "Sistema web", "Integrações API"],
    technologies: ["Next.js", "React", "TypeScript"],
    cta_text: "Planejar site/sistema",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Aplicativos",
    slug: "aplicativos",
    summary: "Mobile, prototipação, APIs, publicação e evolução.",
    content: "Desenvolvemos aplicativos mobile nativos e híbridos.",
    icon: "smartphone",
    order: 2,
    status: "published",
    problem: "Seu negócio precisa estar na palma da mão dos clientes.",
    deliverables: ["Prototipação UX", "App iOS/Android", "API backend"],
    technologies: ["React Native", "Flutter"],
    cta_text: "Criar aplicativo",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Design",
    slug: "design",
    summary: "Identidade, UI/UX, interfaces e peças digitais.",
    content: "Design que comunica, converte e diferencia.",
    icon: "palette",
    order: 3,
    status: "published",
    problem: "Sua marca não se destaca ou interfaces confusas afastam usuários.",
    deliverables: ["Identidade visual", "UI/UX design", "Design system"],
    technologies: ["Figma", "Adobe Creative Suite"],
    cta_text: "Criar identidade/interface",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Marketing Digital",
    slug: "marketing-digital",
    summary: "Estratégia, conteúdo, presença e campanhas.",
    content: "Estratégias digitais orientadas a dados.",
    icon: "trending-up",
    order: 4,
    status: "published",
    problem: "Investimento em marketing sem retorno mensurável.",
    deliverables: ["Estratégia digital", "SEO", "Campanhas"],
    technologies: ["Google Analytics", "Meta Ads"],
    cta_text: "Planejar estratégia",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Inteligência Artificial",
    slug: "inteligencia-artificial",
    summary: "Automação, agentes, integrações e fluxos inteligentes.",
    content: "Implementamos soluções de IA que automatizam processos.",
    icon: "brain",
    order: 5,
    status: "published",
    problem: "Processos manuais consomem tempo.",
    deliverables: ["Chatbots inteligentes", "Automação de fluxos"],
    technologies: ["OpenAI", "LangChain", "Python"],
    cta_text: "Explorar solução com IA",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Soluções Tecnológicas",
    slug: "solucoes-tecnologicas",
    summary: "Projetos sob medida e integrações.",
    content: "Projetos customizados que resolvem desafios específicos.",
    icon: "settings",
    order: 6,
    status: "published",
    problem: "Necessidades específicas que soluções prontas não atendem.",
    deliverables: ["Consultoria técnica", "Arquitetura de sistemas"],
    technologies: ["Arquitetura cloud", "Microserviços"],
    cta_text: "Descrever necessidade",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "Plataforma E-commerce",
    slug: "plataforma-ecommerce",
    summary: "Loja virtual completa com gestão de estoque, pagamentos e analytics.",
    content: "Desenvolvemos uma plataforma e-commerce completa.",
    cover: null,
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    status: "published",
    featured: true,
    challenge: "A empresa vendia apenas offline.",
    objectives: "Criar canal de vendas online.",
    strategy: "Arquitetura headless com Next.js.",
    result: "Plataforma lançada com sucesso.",
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "App de Delivery",
    slug: "app-delivery",
    summary: "Aplicativo mobile para pedidos com rastreamento em tempo real.",
    content: "App completo de delivery.",
    cover: null,
    category: "Mobile",
    technologies: ["React Native", "Firebase"],
    status: "published",
    featured: true,
    challenge: "Startup precisava de um MVP funcional.",
    objectives: "Lançar MVP em 8 semanas.",
    strategy: "Desenvolvimento ágil com React Native.",
    result: "MVP entregue no prazo.",
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Identidade Visual Tech",
    slug: "identidade-visual-tech",
    summary: "Rebranding completo para startup de tecnologia.",
    content: "Projeto de identidade visual completo.",
    cover: null,
    category: "Design",
    technologies: ["Figma", "Illustrator"],
    status: "published",
    featured: true,
    challenge: "Identidade visual inconsistente.",
    objectives: "Criar identidade moderna.",
    strategy: "Processo de discovery com workshops.",
    result: "Nova identidade implementada.",
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const fallbackPosts: Post[] = [
  {
    id: "1",
    title: "Como escolher a stack ideal para seu projeto",
    slug: "como-escolher-stack-ideal",
    excerpt: "Guia prático para tomar decisões tecnológicas alinhadas ao seu negócio.",
    content: "A escolha da stack tecnológica é uma das decisões mais importantes...",
    cover: null,
    status: "published",
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Design system: por onde começar",
    slug: "design-system-por-onde-comecar",
    excerpt: "Passo a passo para criar um design system que escala.",
    content: "Um design system bem construído é a base para interfaces consistentes...",
    cover: null,
    status: "published",
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export async function getServices(): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("status", "published")
      .order("order");

    if (error || !data?.length) return fallbackServices;
    return data;
  } catch {
    return fallbackServices;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error || !data) {
      return fallbackServices.find((s) => s.slug === slug) || null;
    }
    return data;
  } catch {
    return fallbackServices.find((s) => s.slug === slug) || null;
  }
}

export async function getProjects(featured?: boolean): Promise<Project[]> {
  try {
    const supabase = await createClient();
    let query = supabase
      .from("projects")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (featured) query = query.eq("featured", true);

    const { data, error } = await query;
    if (error || !data?.length) return featured ? fallbackProjects.filter((p) => p.featured) : fallbackProjects;
    return data;
  } catch {
    return featured ? fallbackProjects.filter((p) => p.featured) : fallbackProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error || !data) {
      return fallbackProjects.find((p) => p.slug === slug) || null;
    }
    return data;
  } catch {
    return fallbackProjects.find((p) => p.slug === slug) || null;
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error || !data?.length) return fallbackPosts;
    return data;
  } catch {
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error || !data) {
      return fallbackPosts.find((p) => p.slug === slug) || null;
    }
    return data;
  } catch {
    return fallbackPosts.find((p) => p.slug === slug) || null;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("team_members")
      .select("*")
      .eq("status", "published")
      .order("order");

    if (error || !data?.length) {
      return [{
        id: "1",
        name: "Equipe POLINEXT",
        role: "Fundadores & Especialistas",
        bio: "Somos um time multidisciplinar apaixonado por transformar ideias em soluções digitais.",
        avatar: null,
        order: 1,
        status: "published",
        created_at: new Date().toISOString(),
      }];
    }
    return data;
  } catch {
    return [];
  }
}
