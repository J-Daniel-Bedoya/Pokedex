import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/follows/follows.css";

const Follows = () => {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState([]);
  const storageArray = JSON.parse(localStorage.getItem("arrayFollows"));

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155/")
      .then((res) => {
        setPokemon(res.data.results);
      });
  }, []);
  const [actual, setActual] = useState(0)
  const [large, setLarge] = useState(2)
  const storeSee = storageArray?.slice(actual,large);
  
// const route = () => {
  useEffect(() => {
    if (large <= storageArray?.length){
        setTimeout(() => {
          setActual(actual+2)
          setLarge(large+2)
        }, 5000)
    }else{
      setActual(0)
      setLarge(2)
    }

  }, [large])
  
  const next = () => {
    setActual(actual+1)
    setLarge(large+1)
  }
  const prev = () => {

  }

  return (
    <div id="follows" >
      {/* {route()} */}
      <div>
        <h1>Your favorite pokemons</h1>
      </div>
      <div id="follows__card--container">
        <div id="follows__container">
          {pokemon.map((poke) =>
            storeSee?.map((arr) => (
              <>{poke.name === arr && <SeePokemonFollows url={poke.url} />}</>
            ))
          )}
        </div>
      </div>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      <button className="follows__btn" onClick={() => navigate("/pokedex")}>
        salir
      </button>
    </div>
  );
};

const SeePokemonFollows = ({ url }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
    });
  }, [url]);



  return (
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
  );
};

export default Follows;
