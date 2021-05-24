import React from 'react';
import './App.css';
import {UseState} from "./use-state";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import {provideContext} from "./context";
import {cs} from "./chain-services";


function App() {
  const  initValue = [
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
    }
  ]


  return cs(
      ["movies", ({}, next: any) => <UseState {...{
        initValue, next
      }}/>],
      ({movies}  : { movies: any}, next: any) => provideContext({movies}, next),
      () => {
        return (
            <div className="App">
              <Nav/>
              <AddMovie/>
              <MovieList/>
            </div>
        )}
  );
};
export default App;
