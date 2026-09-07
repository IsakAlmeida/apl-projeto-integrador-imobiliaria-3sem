# Web Imobiliária - Frontend

Interface em React para o sistema de imóveis.

## Pré-requisitos

- Node.js 14+
- npm

## Como Rodar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Rodar em Desenvolvimento

```bash
npm run dev
```

A aplicação vai abrir em: `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```


## Páginas

### Home (`/`)
- Lista todos os imóveis
- Botão para cadastrar novo
- Botão para buscar imóvel

### Cadastro (`/cadastro`)
- Formulário com 8 campos
- Valida dados do backend
- Mostra mensagem de sucesso/erro
- Redireciona para home após sucesso

### Busca (`/busca`)
- Busca imóvel por ID
- Mostra todos os detalhes
- Mensagem de erro se não encontrar

## 🔌 Integração com API
A API está configurada em `src/services/api.js`.
**Base URL:** `http://localhost:8080`

## Componentes

### CardImovel
Exibe um imóvel em formato de card.
Props:
- `imovel` (Object): Dados do imóvel

### FormCadastro
Formulário para cadastrar novo imóvel.
Props:
- `onCadastrar` (Function): Callback quando cadastra

### ListaImoveis
Lista todos os imóveis em grid.
Props:
- `imoveis` (Array): Lista de imóveis
- `carregando` (Boolean): Se está carregando
- `onBuscar` (Function): Callback do botão buscar

## Estilos
Usa CSS Modules para isolação de estilos.
Cada componente tem seu próprio arquivo `.module.css`.

## Rotas
/ → Home (lista imóveis)
/cadastro → Página de cadastro
/busca → Página de busca


## Tecnologias
- React
- React Router
- Axios (requisições HTTP)
- CSS Modules
