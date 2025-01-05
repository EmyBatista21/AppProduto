import React from 'react';

function ProductList({ products, onShowForm, onFilterChange }) {
  return (
    <div className="list-container">
      <h2>Lista de Produtos</h2>
      <div className="filter-container">
        <label>
          Filtrar:
          <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="all">Todos</option>
            <option value="available">Disponíveis</option>
            <option value="unavailable">Indisponíveis</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onShowForm}>Cadastrar Novo Produto</button>
    </div>
  );
}

export default ProductList;
