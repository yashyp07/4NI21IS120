import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Filter from './Filter';
import Sort from './Sort';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const categ="AMZ";
    axios.get(`http://localhost:8080/categories/${categ}/products`, { params: { ...filters, sort: sortOption } })
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, [filters, sortOption]);

  return (
    <div>
      <Filter setFilters={setFilters} />
      <Sort setSortOption={setSortOption} />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;