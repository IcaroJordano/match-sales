# Desafio Técnico - Entrega

Bem-vindo(a) à minha solução para o desafio técnico de Desenvolvedor Front-end Júnior 🚀
Este documento detalha as decisões técnicas, funcionalidades implementadas, limitações atuais e próximos passos.

---

## ✅ Funcionalidades Implementadas

### 1. 🔍 Listagem de Usuários

API: `https://jsonplaceholder.typicode.com/users`

Exibição dos usuários em cards e tabela.

Campos exibidos:

- Nome
- Email
- Cidade

Implementado com React Query (cache automático, revalidação e controle de estados).

Três estados de listagem:

- ⏳ Loading: skeleton loaders.
- ❌ Erro: mensagem amigável e botão de retry.
- ✅ Success: renderização em cards/tabela.

![Imagem da tabela + cards](placeholder_tabela_cards.png)

---

### 2. 🔎 Filtro de Usuários

Campo de busca (input) integrado à listagem.

Filtra os usuários pelo nome em tempo real.

Desenvolvido com controlled component do React.

![Imagem do campo de busca funcionando](placeholder_campo_busca.png)

---

### 3. ➕ Novo Usuário

Criado via modal (ao invés de nova página).

Motivo: apenas 3 campos → experiência mais fluida.

Campos do formulário:

- Nome → obrigatório (mín. 2 caracteres)
- Email → obrigatório, validado em tempo real com Zod
- Cidade → opcional

Implementação:

- React Hook Form + Zod resolver para validação
- Submit com loading state
- Cadastro simulado com `queryClient.setQueryData`
- Feedback de sucesso/erro exibido ao usuário

![Imagem do modal no desktop](placeholder_modal_desktop.png)
![Imagem do modal no mobile](placeholder_modal_mobile.png)

---

### 4. ✏️🗑️ Editar e Deletar (Simulação)

Botões disponíveis na interface.

Ainda não ativos:

- Exibem feedback visual ao usuário.
- Mantidos propositalmente como “ações travadas”.

![Imagem dos botões de editar/deletar com feedback](placeholder_botoes_editar_deletar.png)

---

### 5. 📊 Mini Dashboard

Criado como página adicional.

Possui rotas que exibem ícones de cadeado 🔒 indicando bloqueio.

Feedback visual ao usuário de que ainda não é possível acessar.

![Imagem do mini dashboard](placeholder_mini_dashboard.png)

---

## 🎨 UI/UX

- Tailwind CSS para responsividade e estilização.
- ShadcnUI para componentes acessíveis.
- Interface pensada em mobile-first.
- Feedback visual para todos os estados (loading, erro, sucesso, travado).

---

## 📂 Arquitetura de Pastas

```
src/
 ├── app/
 │    ├── users/
 │    │    ├── page.tsx
 │    │    ├── new/
 │    │    └── components/
 │    ├── dashboard/
 │    └── layout.tsx
 ├── components/
 │    ├── ui/ (shadcn components)
 │    ├── forms/
 │    └── common/
 ├── hooks/
 ├── lib/
 └── utils/
```

Segui um padrão básico de componentização.

Algumas partes poderiam ser melhor componentizadas/reutilizadas, mas por limite de tempo optei por priorizar entrega funcional.

![Print do tree de pastas](placeholder_tree_pastas.png)

---

## 📜 Histórico de Commits

Segui o padrão de commits semânticos (Conventional Commits).

Exemplo:

- `feat: adiciona listagem de usuários com react query`
- `fix: corrige validação de email no formulário`
- `style: ajusta responsividade mobile do modal`

![Print do log de commits](placeholder_log_commits.png)

---

## 🚀 Como Rodar Localmente

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npm run dev
```

Acesse em: `http://localhost:3000`

---

## 🌐 Deploy

Deploy realizado na Vercel → [inserir link]

---

## 📌 Decisões Técnicas

- Modal ao invés de nova rota → experiência mais simples para formulário pequeno.
- Simulação de cadastro e ações travadas → respeitando o tempo do desafio, mantendo fluxo realista sem integração extra.
- Mini dashboard com rotas bloqueadas → demonstração de escalabilidade futura.
- Documentação detalhada → para deixar claro o raciocínio e decisões técnicas.

---

## 📝 Próximos Passos

- Implementar edição e exclusão de usuários com persistência real.
- Melhorar componentização e reutilização de layouts.
- Adicionar testes unitários (React Testing Library).
- Explorar gráficos dinâmicos no dashboard.

---

## ✨ Obrigado pela oportunidade!
Fico à disposição para dúvidas ou ajustes.


