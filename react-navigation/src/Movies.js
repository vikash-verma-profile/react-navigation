import React, { useState } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


function Movies() {

    const [movies, setMovies] = useState([]);
    function fetchMovieHandler() {
        fetch('https://collmcool-default-rtdb.firebaseio.com/movies.json').then((response) => {
            return response.json();
        }).then((data) => {
            const transformedMovies = [];
            console.log(data);
            for(const key in data)
            {
                transformedMovies.push(
                    {
                        id:key,
                        title:data[key].title,
                        openingText:data[key].openingText,
                        releaseDate:data[key].releaseDate,
                    }
                );
            }
            setMovies(transformedMovies);
            // });
        });
    }

    async function  addMovieHandler(movie) {
        
        console.log(movie);
       const reponse= await fetch('https://collmcool-default-rtdb.firebaseio.com/movies.json',{
           method:'Post',
           body:JSON.stringify(movie),
           headers:{
               'Content-Type':'application/json'
           }
       });
       const data=await reponse.json();
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
                <MovieList movies={movies} />
            </section>
        </>
    );
}

export default Movies;