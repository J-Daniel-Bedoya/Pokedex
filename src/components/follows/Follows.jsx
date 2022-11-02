import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SeePokemonFollows from "./SeePokemonFollows";

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
  const [isFalse, setIsFalse] = useState(true)
  const storeSee = storageArray?.slice(actual,large);
  
  useEffect(() => {
    if (isFalse) {
      if (large <= storageArray?.length){
        setTimeout(() => {
          setActual(actual+2)
          setLarge(large+2)
        }, 5000)
      }else{
        setActual(0)
        setLarge(2)
      }
    }

  }, [actual, large, storageArray])
  
  const next = () => {
    setActual(actual+2)
    setLarge(large+2)
    setIsFalse(false)
  }
  const prev = () => {
    setActual(actual-2)
    setLarge(large-2)
    setIsFalse(false)
  }
  // console.log(actual)
  return (
    <div id="follows" >
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
      {
        !isFalse && 
        <button onClick={() => setIsFalse(true)}>Activar automático</button>
      }
      <button className="follows__btn" onClick={() => navigate("/pokedex")}>
        salir
      </button>
    </div>
  );
};


export default Follows;
