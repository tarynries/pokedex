import './App.css';
import React from "react";
import Pokedex from './Pokedex';
import Pokecard from './Pokecard'

function App() {
    return (
        <div className="App">
            <Pokecard />
            <Pokedex />
        </div>
    )
}

export default App;