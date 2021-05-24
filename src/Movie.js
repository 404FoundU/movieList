import React from 'react';

const Movie = ({movies}) => {

    return (
        <div>
{            movies.map((movie) =>      {
    return (
        <div>
            <li>{movie.name}</li>
            <li>{movie.price}</li>

        </div>
        // <li>{movie.price}</li>
    );
}                )
}


        </div>

    );
};

export default Movie;