import React from 'react';
import Movie from './Movie';
import { Table } from 'react-bootstrap';

function MovieList(props) {
    console.log(props);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>releaseDate</th>
                        <th>Description</th>
                    </tr>
                </thead>
                {props.movies.map((movie) => (
                    <Movie key={movie.id} title={movie.title} releaseDate={movie.releaseDate} openingText={movie.openingText} />
                ))}
            </Table>
        </div>
    );
}

export default MovieList;
