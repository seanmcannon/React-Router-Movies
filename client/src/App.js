import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList'; //imports
import MovieList from './Movies/MovieList'; // line: 21
import Movie from './Movies/Movie';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
   const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data); //setMovieList with response
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
  <Switch> {/* <<-- not neeeded */}
            <Route path='/movies/:id'>  {/* Route Paths */}
              <Movie movies={movieList} />
            </Route>

            <Route path='/'>
              <MovieList movies={movieList}/>
            </Route>
        </Switch>

      </div>
</div>
    
  );

  

};