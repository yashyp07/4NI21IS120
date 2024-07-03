import React from 'react';

const Sort = ({ setSortOption }) => (
  <div className="sort">
    <select onChange={(e) => setSortOption(e.target.value)}>
      <option value="">Sort By</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-asc">Rating: Low to High</option>
      <option value="rating-desc">Rating: High to Low</option>
    </select>
  </div>
);

export default Sort;