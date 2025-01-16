import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchEngine({ query, setQuery, search }) {
  //handler function
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search(e);
    }
  };

  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="enter city name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button id="btn" onClick={search}><FontAwesomeIcon icon={faSearch}/></button>
    </div>
  );
}

export default SearchEngine;