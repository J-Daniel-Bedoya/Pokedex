import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SeePokemonFollows = ({url}) => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
    });
  }, [url]);


  return (
    <>
    <div id="pokemonFollows">
      <div id="pokemonFollows__cards">
        <div id="card">
          <img
            id="pokemonFollows__img"
            src={pokemon.sprites?.other["dream_world"].front_default}
            alt={pokemon.name}
          />
          <p>{pokemon.name}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SeePokemonFollows;
