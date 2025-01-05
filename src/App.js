import React, { useState } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct].sort((a, b) => a.value - b.value));
    setShowForm(false);
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'available') return product.available;
    if (filter === 'unavailable') return !product.available;
    return true;
  });

  return (
    <div className="App">
      {showForm ? (
        <ProductForm onAddProduct={handleAddProduct} onCancel={() => setShowForm(false)} />
      ) : (
        <ProductList 
          products={filteredProducts} 
          onShowForm={() => setShowForm(true)} 
          onFilterChange={setFilter}
        />
      )}
    </div>
  );
}

export default App;

