import React, { useState } from 'react';

/**
 * SearchBar component allows users to enter a search term and choose a media type.
 * Calls the onSearch function passed via props when submitted.
 */
const SearchBar = ({ onSearch }) => {
  // Stores the user's search input
  const [term, setTerm] = useState('');
  
  // Stores the selected media type (default is 'all')
  const [media, setMedia] = useState('all');

  /**
   * Handles form submission
   * Prevents default form behavior and validates input
   * Calls the onSearch function with the trimmed search term and selected media type
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTerm = term.trim();

    if (!trimmedTerm) {
      alert('Please enter something to search!');
      return;
    }

    onSearch(trimmedTerm, media);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {/* Dropdown to select media type */}
      <select value={media} onChange={(e) => setMedia(e.target.value)}>
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">Ebook</option>
      </select>

      {/* Submit button */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;