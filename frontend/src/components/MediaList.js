import React from 'react';

/**
 * MediaList component displays a list of media search results.
 * Allows users to add items to their favourites list.
 *
 * Props:
 * - results: Array of media items returned from the search.
 * - onAddFavourite: Function to add a selected item to favourites.
 */
const MediaList = ({ results, onAddFavourite }) => {
  return (
    <div className="Results">
      <h2>Search Results</h2>

      {/* Message for empty results */}
      {results.length === 0 ? <p>No results found.</p> : null}

      {/* Render each media item */}
      {results.map((item) => (
        <div key={item.trackId || item.collectionId}>
          <p><strong>{item.trackName || item.collectionName}</strong></p>
          <p>{item.artistName}</p>
          <p>Release Date: {new Date(item.releaseDate).toLocaleDateString()}</p> {/* Release date */}
          <img src={item.artworkUrl100} alt="Artwork" />
          <br />
          <button onClick={() => onAddFavourite(item)}>Add to Favourites</button>
        </div>
      ))}
    </div>
  );
};

export default MediaList;