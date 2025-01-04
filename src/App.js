import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (query, page = 1) => {
    // Fetch movies from API
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    setMovies(data.Search);
    setTotalPages(Math.ceil(data.totalResults / 10));
  };

  return (
    <div className="App">
      <SearchInput onSearch={handleSearch} />
      <MovieList movies={movies} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
