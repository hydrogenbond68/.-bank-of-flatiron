// SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
