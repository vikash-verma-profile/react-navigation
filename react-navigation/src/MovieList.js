import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  return (
    <div>
      <ul>
          {props.movies.map((movie)=>(
            <Movie title={movie.title} releaseDate={movie.releaseDate}  openingText={movie.opening_crawl} />
          ))}
      </ul>
    </div>
  );
}

export default MovieList;
