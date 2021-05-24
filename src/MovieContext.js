import React, {useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: '10',
            id: 1
        },
        {
            name: "H Potter",
            price: '100',
            id: 2
        },
        {
            name: "H P",
            price: '10000',
            id: 3
        },

    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
};

