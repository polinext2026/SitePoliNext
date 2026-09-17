# POLINEXT — Site Institucional

Site institucional profissional + plataforma digital da POLINEXT.

**IDEIAS QUE CONECTAM O AMANHÃ**

## Stack

- **Frontend:** Next.js 15 + React 19 + TypeScript
- **Estilo:** Tailwind CSS 4
- **Banco de dados:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Deploy:** Vercel (recomendado)

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — hero, serviços, projetos, método, diferenciais |
| `/servicos` | Catálogo de serviços |
| `/servicos/[slug]` | Página individual de serviço |
| `/projetos` | Cases e projetos |
| `/projetos/[slug]` | Case individual |
| `/sobre` | História, visão, valores, equipe |
| `/insights` | Blog / artigos |
| `/insights/[slug]` | Artigo individual |
| `/contato` | Formulário de orçamento |
| `/privacidade` | Política de privacidade (LGPD) |
| `/termos` | Termos de uso |
| `/login` | Login do painel admin |
| `/admin` | Dashboard administrativo |

## Setup

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Copie `.env.example` para `.env.local` e preencha as variáveis
3. No **SQL Editor** do Supabase, execute na ordem:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/seed.sql`
4. Em **Authentication > Users**, crie um usuário admin

### 3. Rodar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Variáveis de ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Estrutura do banco

- `services` — Serviços oferecidos
- `projects` — Cases e projetos
- `posts` — Artigos do blog/insights
- `leads` — Mensagens do formulário de contato
- `team_members` — Membros da equipe
- `roles`, `permissions`, `role_permissions` — RBAC
- `media` — Uploads de mídia
- `audit_logs` — Trilha de auditoria

## Design System

| Token | Valor | Uso |
|-------|-------|-----|
| Base | `#08090B` | Fundo dark, hero |
| Superfície | `#171A21` | Cards, painéis |
| Azul | `#257CFF` | CTAs, links |
| Ciano | `#18B9FF` | Glow, detalhes |
| Roxo | `#6D43FF` | Gradientes |
| Neutro | `#F4F6F8` | Texto em dark |

## Deploy

Recomendado: [Vercel](https://vercel.com) com integração Supabase.

```bash
npm run build
npm start
```

## Licença

Projeto privado — POLINEXT © 2026
