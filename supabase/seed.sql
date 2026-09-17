-- POLINEXT Seed Data
-- Run after 001_initial_schema.sql

-- Services
INSERT INTO services (title, slug, summary, content, icon, "order", status, problem, deliverables, technologies, cta_text) VALUES
(
  'Desenvolvimento Web',
  'desenvolvimento-web',
  'Sites, sistemas, integrações, performance e manutenção.',
  'Criamos experiências web que combinam performance, segurança e design. Do site institucional ao sistema complexo, entregamos soluções que escalam com seu negócio.',
  'code',
  1,
  'published',
  'Sua presença digital não reflete a qualidade do seu negócio, ou sistemas legados limitam sua operação.',
  ARRAY['Site institucional', 'Sistema web', 'Integrações API', 'Otimização de performance', 'Manutenção evolutiva'],
  ARRAY['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  'Planejar site/sistema'
),
(
  'Aplicativos',
  'aplicativos',
  'Mobile, prototipação, APIs, publicação e evolução.',
  'Desenvolvemos aplicativos mobile nativos e híbridos com foco em experiência do usuário e performance. Da prototipação à publicação nas lojas.',
  'smartphone',
  2,
  'published',
  'Seu negócio precisa estar na palma da mão dos clientes, mas apps genéricos não resolvem.',
  ARRAY['Prototipação UX', 'App iOS/Android', 'API backend', 'Publicação nas lojas', 'Manutenção'],
  ARRAY['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  'Criar aplicativo'
),
(
  'Design',
  'design',
  'Identidade, UI/UX, interfaces e peças digitais.',
  'Design que comunica, converte e diferencia. Criamos identidades visuais e interfaces que conectam sua marca ao público.',
  'palette',
  3,
  'published',
  'Sua marca não se destaca ou interfaces confusas afastam usuários.',
  ARRAY['Identidade visual', 'UI/UX design', 'Design system', 'Prototipação', 'Peças digitais'],
  ARRAY['Figma', 'Adobe Creative Suite', 'Principle', 'Framer'],
  'Criar identidade/interface'
),
(
  'Marketing Digital',
  'marketing-digital',
  'Estratégia, conteúdo, presença e campanhas.',
  'Estratégias digitais orientadas a dados para aumentar visibilidade, engajamento e conversão do seu negócio.',
  'trending-up',
  4,
  'published',
  'Investimento em marketing sem retorno mensurável ou presença digital inconsistente.',
  ARRAY['Estratégia digital', 'Gestão de conteúdo', 'SEO', 'Campanhas', 'Analytics'],
  ARRAY['Google Analytics', 'Meta Ads', 'Google Ads', 'SEMrush'],
  'Planejar estratégia'
),
(
  'Inteligência Artificial',
  'inteligencia-artificial',
  'Automação, agentes, integrações e fluxos inteligentes.',
  'Implementamos soluções de IA que automatizam processos, melhoram atendimento e geram insights para decisões mais inteligentes.',
  'brain',
  5,
  'published',
  'Processos manuais consomem tempo ou oportunidades de automação inteligente não são exploradas.',
  ARRAY['Chatbots inteligentes', 'Automação de fluxos', 'Análise de dados', 'Integrações IA', 'Agentes personalizados'],
  ARRAY['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'APIs de IA'],
  'Explorar solução com IA'
),
(
  'Soluções Tecnológicas',
  'solucoes-tecnologicas',
  'Projetos sob medida e integrações.',
  'Projetos customizados que resolvem desafios específicos do seu negócio com arquitetura robusta e escalável.',
  'settings',
  6,
  'published',
  'Necessidades específicas que soluções prontas não atendem.',
  ARRAY['Consultoria técnica', 'Arquitetura de sistemas', 'Integrações customizadas', 'Migração de dados', 'Auditoria técnica'],
  ARRAY['Arquitetura cloud', 'Microserviços', 'DevOps', 'CI/CD'],
  'Descrever necessidade'
)
ON CONFLICT (slug) DO NOTHING;

-- Projects / Cases
INSERT INTO projects (title, slug, summary, content, category, technologies, status, featured, challenge, objectives, strategy, result, published_at) VALUES
(
  'Plataforma E-commerce',
  'plataforma-ecommerce',
  'Loja virtual completa com gestão de estoque, pagamentos e analytics integrados.',
  'Desenvolvemos uma plataforma e-commerce completa para uma empresa de varejo, incluindo catálogo de produtos, carrinho, checkout, gestão de estoque e dashboard analítico.',
  'E-commerce',
  ARRAY['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
  'published',
  true,
  'A empresa vendia apenas offline e precisava expandir para o digital com uma solução confiável e escalável.',
  'Criar canal de vendas online, integrar pagamentos e ter visibilidade sobre métricas de vendas.',
  'Arquitetura headless com Next.js para performance e SEO, integração Stripe para pagamentos seguros, dashboard em tempo real.',
  'Plataforma lançada com sucesso, pronta para operação comercial.',
  NOW() - INTERVAL '30 days'
),
(
  'App de Delivery',
  'app-delivery',
  'Aplicativo mobile para pedidos com rastreamento em tempo real.',
  'App completo de delivery com cadastro de usuários, catálogo de restaurantes, pedidos, pagamento in-app e rastreamento de entrega em tempo real.',
  'Mobile',
  ARRAY['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
  'published',
  true,
  'Startup precisava de um MVP funcional para validar o modelo de negócio de delivery local.',
  'Lançar MVP em 8 semanas com funcionalidades essenciais de pedido e rastreamento.',
  'Desenvolvimento ágil com React Native para iOS e Android simultaneamente, backend serverless com Firebase.',
  'MVP entregue no prazo, validando o modelo de negócio.',
  NOW() - INTERVAL '60 days'
),
(
  'Identidade Visual Tech',
  'identidade-visual-tech',
  'Rebranding completo para startup de tecnologia.',
  'Projeto de identidade visual completo incluindo logo, paleta de cores, tipografia, guidelines e aplicações digitais.',
  'Design',
  ARRAY['Figma', 'Illustrator', 'After Effects'],
  'published',
  true,
  'Startup em crescimento com identidade visual inconsistente que não comunicava inovação.',
  'Criar identidade moderna que transmitisse tecnologia, confiança e inovação.',
  'Processo de discovery com workshops, exploração visual com múltiplas direções, refinamento e documentação completa.',
  'Nova identidade implementada em todos os touchpoints digitais.',
  NOW() - INTERVAL '45 days'
),
(
  'Dashboard Analytics',
  'dashboard-analytics',
  'Painel de business intelligence com visualizações interativas.',
  'Dashboard corporativo com integração de múltiplas fontes de dados, visualizações interativas e relatórios automatizados.',
  'Sistemas',
  ARRAY['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
  'published',
  false,
  'Empresa tomava decisões sem dados consolidados de múltiplas fontes.',
  'Centralizar dados de vendas, marketing e operação em um único painel.',
  'ETL automatizado, data warehouse otimizado, frontend com visualizações interativas e exportação de relatórios.',
  'Dashboard operacional com dados consolidados em tempo real.',
  NOW() - INTERVAL '20 days'
),
(
  'Chatbot com IA',
  'chatbot-ia',
  'Assistente virtual inteligente para atendimento ao cliente.',
  'Chatbot powered by IA para atendimento automatizado, com integração ao CRM e escalonamento para humanos quando necessário.',
  'Inteligência Artificial',
  ARRAY['OpenAI', 'LangChain', 'Python', 'FastAPI', 'Redis'],
  'published',
  false,
  'Alto volume de atendimentos repetitivos sobrecarregava a equipe de suporte.',
  'Automatizar 70% dos atendimentos de primeiro nível mantendo qualidade.',
  'Agente conversacional com base de conhecimento customizada, integração CRM e handoff inteligente.',
  'Solução implementada para automação de atendimento.',
  NOW() - INTERVAL '15 days'
)
ON CONFLICT (slug) DO NOTHING;

-- Blog posts
INSERT INTO posts (title, slug, excerpt, content, status, published_at) VALUES
(
  'Como escolher a stack ideal para seu projeto',
  'como-escolher-stack-ideal',
  'Guia prático para tomar decisões tecnológicas alinhadas ao seu negócio e equipe.',
  'A escolha da stack tecnológica é uma das decisões mais importantes de qualquer projeto digital. Neste artigo, exploramos critérios práticos para fazer a melhor escolha...',
  'published',
  NOW() - INTERVAL '10 days'
),
(
  'Design system: por onde começar',
  'design-system-por-onde-comecar',
  'Passo a passo para criar um design system que escala com seu produto.',
  'Um design system bem construído é a base para interfaces consistentes e desenvolvimento ágil. Veja como começar do zero...',
  'published',
  NOW() - INTERVAL '20 days'
),
(
  'IA responsável: ética na automação',
  'ia-responsavel-etica-automacao',
  'Princípios para implementar inteligência artificial com responsabilidade.',
  'A IA traz oportunidades incríveis, mas também responsabilidades. Discutimos como implementar automação inteligente de forma ética...',
  'published',
  NOW() - INTERVAL '5 days'
)
ON CONFLICT (slug) DO NOTHING;

-- Team members
INSERT INTO team_members (name, role, bio, "order", status) VALUES
(
  'Equipe POLINEXT',
  'Fundadores & Especialistas',
  'Somos um time multidisciplinar apaixonado por transformar ideias em soluções digitais de impacto. Combinamos expertise em tecnologia, design e estratégia.',
  1,
  'published'
)
ON CONFLICT DO NOTHING;
