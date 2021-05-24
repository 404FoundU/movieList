import React, {useContext, createContext} from 'react';
import {MovieContext} from "./MovieContext";
import {cs} from "./chain-services";
import {consumeContext} from "./context";

const Nav = () => cs(
    consumeContext("movies"),
    ({movies}) => {
        return(
            <div>
                <h3>Movies</h3>
                <p>List of movies: {movies.value.length}</p>
            </div>
        )
    }
);

export default Nav;