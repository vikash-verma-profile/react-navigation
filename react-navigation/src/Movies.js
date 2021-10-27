import React, { useState } from 'react';
import MovieList from './MovieList';


function Movies() {

    const [movies, setMovies] = useState([]);
    function fetchMovieHandler() {
        fetch('https://swapi.dev/api/films/').then((response) => {
            return response.json();
        }).then((data) => {
            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setMovies(transformedMovies);
        });
    }


    return (
        <>
            <section>
                <button onClick={fetchMovieHandler}> Fetch Movie</button>
            </section>
            <section>
                <MovieList movies={movies} />
            </section>
        </>
    );
}

export default Movies;