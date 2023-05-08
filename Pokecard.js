import React from "react";
import "./Pokecard.css"

const POKE_API = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";


function Pokecard({ name, id, type, exp }) {
    const imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className="Pokecard">
            <h1>Pokedex</h1>
            <div className="Pokecard-name">Name: {name}</div>
            <div className="Pokecard-image">src={imgSrc} alt={name}</div>
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">EXP: {exp}</div>
        </div>
    )
}

export default Pokecard;