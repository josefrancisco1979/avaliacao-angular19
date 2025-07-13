 # 📘 Avaliação Angular 19 - 30 Pontos

Este projeto foi desenvolvido como parte da Avaliação do curso **Desenvolvimento Web com Angular 19** no **SENAI Maracanã**, sob orientação do professor **Nivaldo Araújo**.

## 🎯 Objetivo

Aplicar os conceitos de:
- Componentização standalone
- Serviços com `@Injectable`
- Consumo de API REST com `HttpClient`
- Navegação por rotas
- Estilização com CSS direto no componente

---

## 🛠️ Funcionalidades

### 🏠 Página Inicial

- Exibe dois botões:
  - **Calcular Área ao Quadrado**
  - **Autenticar e Listar Dados**
- Cada botão redireciona para um componente específico.

### 🔲 Componente `calcularQuadrado`

- Permite digitar **largura** e **altura**
- Calcula: `(largura × altura)²` via service
- Exibe o resultado formatado

### 🔐 Componente `authApi`

- Faz requisição à API pública:
  - `https://jsonplaceholder.typicode.com/posts`
- Exibe os campos `title` e `body` em uma tabela
- Estilização simples e funcional

---

## 🔧 Tecnologias

- Angular 19 (Standalone)
- TypeScript
- HTML & CSS
- Angular Router
- Angular HttpClient

---

## 🚀 Como executar

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/avaliacao-angular19.git
cd avaliacao-angular19

# Instalar dependências
npm install

# Rodar o projeto
ng serve
