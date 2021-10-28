import React, { useCallback, useState } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


function Movies() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const fetchMovieHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://collmcool-default-rtdb.firebaseio.com/movies.json');
            if (!response.ok) {
                throw new Error('Something went Wrong');
            }
            const data = await response.json();
            const transformedMovies = [];
            for (const key in data) {
                transformedMovies.push(
                    {
                        id: key,
                        title: data[key].title,
                        openingText: data[key].openingText,
                        releaseDate: data[key].releaseDate,
                    }
                );
            }
            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    let content=<p>Found no Movies</p>;
    if(movies.length>0){
        content=<MovieList movies={movies} />;
    }
    if(isLoading){
        content=<p>Loading </p>
    }
    if(error){
        content=<p>{error} </p>
    }
    async function addMovieHandler(movie) {

        console.log(movie);
        const reponse = await fetch('https://collmcool-default-rtdb.firebaseio.com/movies.json', {
            method: 'Post',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await reponse.json();
        console.log(data);
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMovieHandler}> Fetch Movie</button>
            </section>
            <section>
                {content}
            </section>
        </>
    );
}

export default Movies;