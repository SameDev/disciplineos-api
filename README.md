# MetaQuest API

Backend da aplicação **MetaQuest** — um sistema pessoal de evolução gamificado, focado em usuários com TDAH.

Construído com NestJS, Prisma 7 + Neon PostgreSQL, JWT Auth e Zod validation. Deploy no Render.

---

## Contexto do Projeto

Este projeto é um experimento prático inspirado nos conceitos de **Fabio Akita** sobre desenvolvimento com IA:

- **[Clean Code para Agentes de IA](https://akitaonrails.com/2026/04/20/clean-code-para-agentes-de-ia/)** — como estruturar código para que agentes de IA possam entendê-lo e evoluí-lo com consistência
- **[VS Code e o Novo Cartão Perfurado](https://akitaonrails.com/2026/04/11/vs-code-e-o-novo-cartao-perfurado/)** — reflexão sobre o papel do programador na era dos agentes
- **[Do Zero à Pós-Produção em 1 Semana com IA](https://akitaonrails.com/2026/02/20/do-zero-a-pos-producao-em-1-semana-como-usar-ia-em-projetos-de-verdade-bastidores-do-the-m-akita-chronicles/)** — metodologia de uso real de IA em projetos de produção

### A Regra

> **Todo o código deste projeto é escrito exclusivamente por IA.**
> O desenvolvedor não digita código manualmente — apenas descreve intenções, valida resultados e toma decisões de produto.

Isso é um **"build to learn"**: o objetivo não é só entregar um produto, mas entender na prática os limites, as capacidades e o fluxo de trabalho com agentes de IA como par de programação.

A premissa é próxima ao **Extreme Programming (XP)**, onde o loop de feedback é curto, as entregas são incrementais e a qualidade é mantida por disciplina de processo — mas aqui o "par" é uma IA.

### O que isso muda na prática

- Arquitetura tem que ser **legível para agentes**: módulos pequenos, nomes explícitos, sem mágica implícita
- Cada decisão técnica precisa ser **comunicável em linguagem natural** — se não consegue descrever, não consegue delegar
- O desenvolvedor vira um **engenheiro de produto + revisor** — define o quê, a IA define o como
- Erros de IA são corrigidos com mais contexto, não com edição manual

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | NestJS (TypeScript) |
| ORM | Prisma 7 com driver adapter |
| Banco | Neon PostgreSQL (serverless) |
| Auth | JWT + bcrypt |
| Validação | Zod via pipe customizado |
| Deploy | Render |

## Módulos

- **Auth** — registro, login, JWT
- **User** — perfil, XP, level, streak
- **Task** — CRUD de tarefas/hábitos (daily/weekly/one_time, easy/medium/hard)
- **Completion** — registro de conclusões com recálculo de gamificação
- **Note** — notas diárias/semanais/mensais em markdown (futuro: sync com Obsidian/GitHub)
- **Gamification** — serviço de XP, level e streak compartilhado

## Endpoints principais

```
POST   /auth/register
POST   /auth/login
GET    /user/me

GET    /tasks
POST   /tasks
PATCH  /tasks/:id
DELETE /tasks/:id

POST   /completions

GET    /notes
PUT    /notes
DELETE /notes/:key
```

## Setup local

```bash
cp .env.example .env
# preencha DATABASE_URL (Neon) e JWT_SECRET

npm install
npx prisma migrate dev
npm run start:dev
```

## Deploy (Render)

- **Build command:** `npm install && prisma generate && nest build`
- **Start command:** `node dist/src/main`
- Variáveis de ambiente: `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `PORT`

---

> *"A IA não substitui o programador. Ela substitui o trabalho repetitivo — o que sobra é o que sempre foi o trabalho real: pensar, decidir, entender."*
