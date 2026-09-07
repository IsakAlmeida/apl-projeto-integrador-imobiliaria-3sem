# API Imobiliária - Backend

API REST desenvolvida em Java com Spring Boot para gerenciar imóveis.

## Pré-requisitos

- Java 21
- MySQL 8.0
- Maven

## Configuração

### 1. Criar o Banco de Dados
Abra o MySQL Workbench e execute o arquivo `schema.sql` que está nessa pasta.

### 2. Configurar Conexão
Abra `src/main/resources/application.properties` e coloque sua senha do MySQL:
```properties
spring.datasource.password=sua_senha_aqui
```

Se não tiver senha, deixa em branco.

### 3. Rodar a Aplicação
Clique no botão Play da sua IDE.

A API vai estar disponível em: `http://localhost:8080/imoveis`

## Banco de Dados

### Tabela: tipos_imovel
id (INT, PK)
nome (VARCHAR 50)


Valores padrão:
- 1 = Apartamento
- 2 = Casa
- 3 = Comercial
- 4 = Terreno
- 5 = Sala

### Tabela: imovel
id (INT, PK, AUTO_INCREMENT)
titulo (VARCHAR 100) - obrigatório
descricao (VARCHAR 500)
preco (DOUBLE) - obrigatório, > 0
endereco (VARCHAR 250) - obrigatório
area (DOUBLE) - obrigatório, > 0
quartos (INT) - padrão 0
banheiros (INT) - padrão 0
garagens (INT) - padrão 0
fk_tipo (INT) - chave estrangeira
data_cadastro (DATETIME) - automático


## Endpoints
### GET `/imoveis`
Retorna lista de todos os imóveis.

**Resposta (200):**
```json
[
  {
    "id": 1,
    "titulo": "Apartamento 2 Quartos",
    "descricao": "Bem localizado",
    "preco": 450000,
    "endereco": "Rua X, 123",
    "area": 85.5,
    "quartos": 2,
    "banheiros": 1,
    "garagens": 1,
    "fk_tipo": 1,
    "nome": "Apartamento",
    "data_cadastro": "2024-01-15T10:30:00"
  }
]
```

### GET `/imoveis/{id}`
Retorna um imóvel específico pelo ID.

**Resposta (200):**
```json
{
  "id": 1,
  "titulo": "Apartamento 2 Quartos",
  "preco": 450000,
  "endereco": "Rua Y, 456",
  "area": 100,
  "quartos": 3,
  "banheiros": 2,
  "garagens": 1,
  "tipo": {
    "id": 1
  }
}
```

**Resposta (404):** Imóvel não encontrado

### POST `/imoveis`
Cadastra um novo imóvel.

**Body:**
```json
{
  "titulo": "Apartamento 3 Quartos",
  "descricao": "Bem localizado",
  "preco": 550000,
  "endereco": "Rua Y, 456",
  "area": 100,
  "quartos": 3,
  "banheiros": 2,
  "garagens": 1,
  "tipo": {
    "id": 1
  }
}
```

**Resposta (201):** Imóvel cadastrado com sucesso
**Resposta (400):** Erro de validação com mensagem do erro

## Validações

- Título obrigatório
- Descrição obrigatória
- Preço obrigatório e deve ser > 0
- Endereço obrigatório
- Área obrigatória e deve ser > 0
- Tipo de imóvel obrigatório

## Testes

Use o Bruno para testar.

**Exemplo GET:**
http://localhost:8080/imoveis


**Exemplo POST:**
POST http://localhost:8080/imoveis
Content-Type: application/json

{
"titulo": "Casa",
"preco": 500000,
"endereco": "Rua Z",
"area": 150,
"quartos": 3,
"banheiros": 2,
"garagens": 2,
"tipo": {"id": 2}
}

