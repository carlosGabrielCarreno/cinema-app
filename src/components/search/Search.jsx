import React, { useState } from 'react';
import { useGlobalContext } from '../../context/MoviesProvider';
import './_search.scss';

export const Search = () => {
  const [term, setTerm] = useState('');
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(term);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <input
        type="text"
        placeholder="search..."
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </form>
  );
};
