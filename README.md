# Sistema Imobiliário - Projeto Integrador 3º Semestre

Projeto de integração entre as disciplinas de **Programação Web** (Backend) e **Front-end** (React).

Um sistema simples para cadastrar e buscar imóveis.


## Como Rodar

### Backend

1. Entre na pasta `api-imobiliaria`
2. Crie o banco de dados MySQL rodando o arquivo `schema.sql`
3. Configure a senha do MySQL em `application.properties`
4. Clique no botão Play da IDE para rodar

O backend vai estar em: `http://localhost:8080/imoveis`

### Frontend

1. Entre na pasta `web-imobiliaria`
2. Rode `npm install`
3. Rode `npm run dev`

O frontend vai estar em: `http://localhost:5173`

## Requisitos Atendidos

-  Cadastro de imóveis com 5+ campos
-  Tela de cadastro e exibição de dados
-  Integração com API REST (GET e POST)
-  Componentização em React
-  Estado para controlar informações (useState)
-  JSX na construção das interfaces
-  CSS Modules para estilização
-  Tratamento de estados (carregando, sucesso, erro)
-  Busca de imóvel por ID
-  Validação de dados no backend

## Tecnologias Usadas

**Backend:**
- Java 21
- Spring Boot
- MySQL
- JdbcTemplate

**Frontend:**
- React
- React Router
- Axios
- CSS Modules

## Funcionalidades

- Listar todos os imóveis
- Cadastrar novo imóvel
- Buscar imóvel por ID
- Validação de campos obrigatórios
- Tratamento de erros

## Autor

Isak de Amorim Almeida - 3ADSB