import React from 'react';

function Movie(props) {
    return (
        <div>
            <li>
                <h2>{props.title}</h2>
                <h3>{props.releaseDate}</h3>
                <p>{props.openingText}</p>
            </li>
        </div>
    );
}

export default Movie;
