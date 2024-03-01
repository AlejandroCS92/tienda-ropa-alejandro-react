import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  async function performSearch(query) {
    const res = await fetch(`https://fakestoreapi.com/products?title=${query}`);
    const data = await res.json();
    setSearchResults(data);
  }

  useEffect(() => {
    performSearch(query);
  }, [query]);

  return (
    <>
      <div className="container text-center m-5">
        <h1>Search Results for "{query}"</h1>
      </div>
      <div className="card-container d-flex flex-wrap justify-content-center">
        {searchResults.map((result) => (
          <div key={result.id} className="card-container card m-3 p-1 text-center col-2">
            <img src={result.image} className="card-img-top" alt={result.title} />
            <div className="card-body">
              <h5 className="card-title">{result.title}</h5>
              <h4 className="card-text">${result.price} USD</h4>
              <NavLink to={`/products/${result.id}`} className="btn btn-outline-dark">
                Buy Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
