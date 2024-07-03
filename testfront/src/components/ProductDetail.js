import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductDetail;