import React from 'react';
import { Link } from 'react-router-dom'

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to = '/'>
    <div className="home-button">Home</div> {/* Add functionality so the `Home` button on the `SavedList` component navigates back to home. */}
    </Link>   
    </div>
  );
}