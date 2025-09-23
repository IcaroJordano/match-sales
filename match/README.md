![tecnical-test](https://github.com/user-attachments/assets/800b6db0-76c0-4b91-a76f-3e8e8b6cb9b3)

# 🧪 Desafio Técnico - Desenvolvedor Front-end Júnior

Bem-vindo(a) ao nosso teste técnico! Este desafio tem como objetivo avaliar suas habilidades práticas com **React + Next.js + React Query + Tailwind + React Hook Form + Zod + ShadcnUI**.

---

## 🎯 Objetivo

Criar uma interface de **listagem e gerenciamento de usuários**, consumindo uma API externa, com boas práticas de código, organização visual e simulação de fluxos completos de CRUD.

---

## 🛠️ Stack Tecnológica Obrigatória

- **Next.js** (versão 13+ com App Router)
- **React Query (TanStack Query)** - para consumo e gerenciamento de APIs
- **React Hook Form** - para gerenciamento de formulários
- **Zod** - para validação de esquemas e formulários
- **ShadcnUI** - para componentes de interface acessíveis
- **Tailwind CSS** - para estilização

---

## 📦 Configuração Inicial

1. Crie um novo projeto Next.js:

   ```bash
   npx create-next-app@latest meu-projeto --typescript --tailwind --eslint --app
   ```

2. Instale as dependências obrigatórias:

   ```bash
   npm install @tanstack/react-query react-hook-form zod @hookform/resolvers
   ```

3. Configure o ShadcnUI:
   ```bash
   npx shadcn-ui@latest init
   ```

---

## 📋 O que você deve fazer

### 1. 🔍 **Listagem de Usuários** (`/users`)

- Buscar os usuários da API: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Exibir em cards ou tabela as informações:
  - **Nome**
  - **Email**
  - **Cidade**
- Usar **React Query** para buscar, cachear e gerenciar os dados
- Implementar estados de **loading**, **erro** e **sucesso**
- Adicionar funcionalidade de **busca/filtro por nome**

### 2. ➕ **Formulário de Novo Usuário**

- Botão "**Novo usuário**" que abre um **modal** ou redireciona para `/users/new`
- Formulário com os campos:
  - **Nome** (obrigatório, mínimo 2 caracteres)
  - **Email** (obrigatório, com validação de formato)
  - **Cidade** (opcional)
- Utilizar:
  - `react-hook-form` com resolvers do `zod`
  - Validação em tempo real
  - Estados de loading durante submissão
- Ao enviar:
  - Simular criação usando `queryClient.setQueryData` para atualizar a lista
  - Feedback visual de sucesso/erro

---

## 🎨 **Requisitos de UI/UX**

### Estilização

- **Tailwind CSS** para layout e componentes
- Interface **responsiva** (mobile, tablet, desktop)
- Design **acessível** e **consistente**
- Estados visuais claros (loading, erro, sucesso)

---

## 💡 **Extras Opcionais** (para ir além)

- ✏️ **Editar usuário existente** (modal ou página separada)
- 🗑️ **Excluir usuário** com confirmação
- 📊 **Gráficos ou estatísticas** no dashboard
- 🎨 **Tema escuro/claro**
- 🧪 **Testes unitários** básicos

---

## 📂 **Entrega**

1. **Repositório GitHub público** com todo o código
2. **README.md completo** incluindo:
   - Instruções para rodar localmente (`npm install`, `npm run dev`)
   - Screenshots ou descrição das funcionalidades
   - Explicação do seu processo de desenvolvimento
   - Tecnologias utilizadas e decisões técnicas
3. **Deploy opcional** no [Vercel](https://vercel.com/) (recomendado)
4. **Commits semânticos** seguindo Conventional Commits

---

## 💡 **Dicas Importantes**

- ✅ **Qualidade > Quantidade** - prefira fazer bem feito
- 📝 **Documente decisões** técnicas no README
- 🔄 **Use commits descritivos** e frequentes
- 🛡️ **Implemente tratamento de erros** robusto
- 🎯 **Foque na experiência do usuário**
- 📱 **Teste a responsividade**

---

**Boa sorte! 🚀**

_Se tiver dúvidas de escopo, é melhor perguntar do que assumir - valorizamos a clareza!_
