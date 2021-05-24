import React, {useState, useContext} from 'react';
import {MovieContext} from "./MovieContext";
import {cs} from "./chain-services";
import {UseState} from "./use-state";
import {consumeContext} from "./context";

const AddMovie = () => cs(
    consumeContext("movies"),
    ["name", ({}, next) => <UseState {...{
        next
    }} />],
    ["price", ({}, next) => <UseState {...{
        next
    }} />],
    ({movies, name, price}) => {
        const addMovieToList = (e) => {
            e.preventDefault();
            movies.onChange([...movies.value, {name: name.value, price: price.value}]);
        };
        const updateName = (e) => {
            name.onChange(e.target.value);
        };
        const updatePrice = (e) => {
            price.onChange(e.target.value);
        };
        return (
            <form onSubmit={addMovieToList}>
                <input type="text" name="name" value={name.value} onChange={updateName}/>
                <input type="text" name="price" value={price.value} onChange={updatePrice}/>
                <button>Submit</button>
            </form>
        );

    }
);
export default AddMovie;