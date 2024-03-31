// SearchFilter.jsx
import React, { useState } from 'react';
import FilterByContinent from './FilterByContinent';

function SearchFilter({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter products based on the search term
    const filteredProducts = FilterByContinent(products, searchTerm);
    // Display filtered products
    console.log('Filtered Products:', filteredProducts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by continent..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchFilter;
