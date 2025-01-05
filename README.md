# Product Management App

## Descrição
Este é um aplicativo de gerenciamento de produtos desenvolvido em React. Ele permite:

1. **Cadastrar produtos** com informações como nome, descrição, valor e disponibilidade.
2. **Listar produtos** em uma tabela ordenada pelo valor (do menor para o maior).
3. **Filtrar produtos** por disponibilidade (disponíveis, indisponíveis ou todos).

## Funcionalidades

- **Cadastro de Produto:**
  - Formulário para adicionar nome, descrição, valor e disponibilidade do produto.
  - Após o cadastro, o produto é automaticamente exibido na listagem.

- **Listagem de Produtos:**
  - Tabela com nome e valor dos produtos.
  - Botão para cadastrar um novo produto.

- **Filtragem:**
  - Seletor para filtrar produtos com base na disponibilidade:
    - Disponíveis para venda.
    - Indisponíveis para venda.
    - Todos os produtos.

## Requisitos para Executar o Projeto

- Node.js (versão mais recente recomendada).
- Gerenciador de pacotes npm ou yarn.

## Como Instalar e Executar

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd product-management-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```
 
3. **Inicie o aplicativo:**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Acesse no navegador:**
   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **`App.js`**: Componente principal que gerencia os estados e renderiza a aplicação.
- **`components/ProductForm.js`**: Formulário para cadastrar novos produtos.
- **`components/ProductList.js`**: Tabela para listar e filtrar produtos.
- **`App.css`**: Estilos para o aplicativo.

## Possíveis Evoluções

1. **Integração com Banco de Dados:**
   - Utilizar uma API para persistência de dados em um banco (ex.: MongoDB, PostgreSQL).
   - Permitir que os dados permaneçam salvos após reiniciar o aplicativo.

2. **Autenticação de Usuários:**
   - Adicionar login e permissões para edição ou exclusão de produtos.

3. **Funcionalidades Adicionais:**
   - Editar produtos cadastrados.
   - Excluir produtos.



