import React, { useState } from 'react';

const Filter = ({ setFilters }) => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');

  const handleApplyFilters = () => {
    setFilters({ company, category });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;