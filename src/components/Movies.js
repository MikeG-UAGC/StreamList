import React, { useState, useEffect } from 'react';

function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    setTimeout(() => {
      const fetchedMovies = [
        'Waiting',
        'Deadpool',
        'The Negotiator',
        'The Matrix',
        'Pulp Fiction',
        'Law Abiding Citizen',
      ];
      setMoviesList(fetchedMovies);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredMovies = moviesList.filter((movie) =>
    movie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Movies Page</h1>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Show loading message while movies are being fetched */}
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <>
          {/* Display the filtered list of movies only when the user starts searching */}
          {searchTerm && (
            <ul>
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))
              ) : (
                <p>No movies found.</p>
              )}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Movies;