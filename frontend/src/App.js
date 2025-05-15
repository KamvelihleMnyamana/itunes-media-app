import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MediaList from './components/MediaList';
import Favourites from './components/Favourites';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  // State to store search results
  const [results, setResults] = useState([]);

  // State to store user's favourite media items
  // Loads favourites from localStorage when the app initializes
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem('favourites');
    return stored ? JSON.parse(stored) : [];
  });

  // Effect to persist favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  /**
   * Function to handle media search
   * Sends a request to the backend API with the search term and media type
   * Updates results or shows a toast message if no data found
   */
  const handleSearch = async (term, media) => {
    try {
      const res = await axios.get('http://localhost:5000/api/itunes/search', {
        params: { term, media }
      });

      if (res.data.results.length === 0) {
        toast.info('No results found. Try a different search.', { position: 'top-center' });
      }

      setResults(res.data.results);
    } catch (err) {
      console.error('Search failed', err);
      toast.error('Search failed. Please try again later.', { position: 'top-center' });
    }
  };

  /**
   * Adds a selected media item to the favourites list
   * Prevents duplicates using trackId
   */
  const addFavourite = (item) => {
    if (!favourites.find(fav => fav.trackId === item.trackId)) {
      setFavourites([...favourites, item]);
      toast.success('Added to favourites!', { autoClose: 1000 });
    }
  };

  /**
   * Removes a media item from favourites by its index
   */
  const removeFavourite = (index) => {
    const newFavourites = [...favourites];
    newFavourites.splice(index, 1);
    setFavourites(newFavourites);
    toast.info('Removed from favourites.', { autoClose: 1000 });
  };

  return (
    <div className="App">
      <h1>iTunes Media Search</h1>

      {/* Search input component */}
      <SearchBar onSearch={handleSearch} />

      {/* Displays search results and lets user add to favourites */}
      <MediaList results={results} onAddFavourite={addFavourite} />

      {/* Displays list of favourite items with remove option */}
      <Favourites favourites={favourites} onRemove={removeFavourite} />

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default App;