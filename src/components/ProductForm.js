// components/ProductForm.js
import React, { useState } from 'react';

function ProductForm({ onAddProduct, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    value: '',
    available: 'yes',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.name,
      description: formData.description,
      value: parseFloat(formData.value),
      available: formData.available === 'yes',
    };
    onAddProduct(newProduct);
    setFormData({ name: '', description: '', value: '', available: 'yes' });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do produto:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Descrição do produto:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Valor do produto:
          <input
            type="number"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Disponível para venda:
          <select
            name="available"
            value={formData.available}
            onChange={handleInputChange}
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </label>
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default ProductForm;

