import React from 'react';

/**
 * Favourites component displays a list of user's saved favourite media items.
 * Allows removal of items from the favourites list.
 *
 * Props:
 * - favourites: Array of media items saved as favourites.
 * - onRemove: Function to remove an item from favourites based on its index.
 */
const Favourites = ({ favourites, onRemove }) => {
  return (
    <div className="Favourites">
      <h2>Favourites</h2>

      {/* Show a message if no favourites are added */}
      {favourites.length === 0 ? <p>No favourites added yet.</p> : null}

      {/* Loop through and display each favourite item */}
      {favourites.map((item, index) => (
        <div key={index}>
          {/* Display item title (track or collection) */}
          <p><strong>{item.trackName || item.collectionName}</strong></p>

          {/* Display artist name */}
          <p>{item.artistName}</p>

          {/* Artwork image */}
          <img src={item.artworkUrl100} alt="Artwork" />
          <br />

          {/* Button to remove item from favourites */}
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;