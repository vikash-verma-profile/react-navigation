import React from 'react';

function Movie(props) {
    console.log(props);
    return (
        <tbody>
            <tr>
                <td>{props.title} </td>
                <td>{props.releaseDate}</td>
                <td>{props.openingText}</td>
            </tr>
        </tbody>
    );
}

export default Movie;
