# 🚗 Vehicles CRUD API

Uma API RESTful para gerenciamento de veículos, construída com **NestJS**, **TypeORM**, **PostgreSQL** e **Fastify**.

---

## ⚙️ Requisitos

- [Docker](https://www.docker.com/) instalado e em execução
- Node.js (v18+ recomendado)
- Yarn (opcional, pode usar npm se preferir)

---

## 📦 Instalação e Setup

1. **Clone o repositório**

   ```bash
   git clone https://github.com/joelgon/vehicles_crud.git
   cd vehicles-crud
   ```

2. **Crie o arquivo `.env`**

   Copie o arquivo de exemplo e ajuste as variáveis se necessário:

   ```bash
   cp .env.example .env
   ```

3. **Suba os serviços com Docker**

   ```bash
   docker compose up -d
   ```

4. **Instale as dependências**

   ```bash
   yarn install
   # ou
   npm install
   ```

---

## 🚀 Iniciando o servidor

```bash
yarn start:dev
# ou
npm run start:dev
```

A API estará disponível em: [http://localhost:3000](http://localhost:3000)  
A porta pode ser alterada via variável `SERVICE_PORT` no `.env`.

---

## 📑 Documentação Swagger

A documentação da API pode ser acessada em:

```
http://localhost:3000/api-doc
```

> Substitua a porta caso tenha modificado no `.env`.

---

## 🧪 Executando os testes

```bash
yarn test
# ou
npm run test
```

---

## 🛠️ Tecnologias Utilizadas

- **NestJS** - Estrutura backend Node.js progressiva
- **TypeORM** - ORM para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Fastify** - Framework HTTP de alta performance
- **Pino** - Logger rápido com suporte a JSON
- **Swagger** - Documentação interativa da API

---

## 📂 Estrutura de Diretórios

```
src/
├── application/     # Casos de uso
├── domain/          # Entidades e interfaces
├── infra/           # Banco de dados, logger, parâmetros
├── presentation/    # Controllers e DTOs
├── shared/          # Constantes, enums, utils
```

---