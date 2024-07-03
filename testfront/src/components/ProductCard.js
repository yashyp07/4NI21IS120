import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.company}</p>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;