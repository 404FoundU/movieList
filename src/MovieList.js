import React, {useState, useContext} from 'react';
import Movie from "./Movie";
import {MovieContext} from "./MovieContext";
import {cs} from "./chain-services";
import {consumeContext} from "./context";

const MovieList = () => cs(
    consumeContext("movies"),
    ({movies}) => (
        <Movie  {...{
            movies: movies.value
        }
                }/>
    )

);




export default MovieList;