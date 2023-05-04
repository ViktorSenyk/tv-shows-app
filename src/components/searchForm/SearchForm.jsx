import React from 'react';

import './searchForm.scss';

function SearchForm({ searchValue, setSearchValue }) {
  return (
    <form className="search-form">
      <span className="search-form__description">Search by:</span>
      <input
        className="search-form__input"
              type="text"
              placeholder='type >2 symbols for searching...'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
