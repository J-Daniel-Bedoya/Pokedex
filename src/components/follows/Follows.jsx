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
        const numPrimo = storageArray.length-1 % 2
        const solo2 = storageArray.length
        if(large <= storageArray?.length-2){
          setTimeout(() => {
            setActual(actual+2)
            setLarge(large+2)
          }, 6000)
        }else if (solo2 >= 3) {
          if(numPrimo === 0 ){
            setTimeout(() => {
              setActual(actual+2)
              setLarge(large+2)
            }, 6000)
          }else{
            setTimeout(() => {
              setActual(actual+1)
              setLarge(large+1)
            }, 6000)
          }
        }
      }else{
        setActual(0)
        setLarge(2)
      }
    }else {
      setTimeout(() => {
        setIsFalse(true)
      }, 12000)
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
    <div className="follows" >
      <div className="follow__title">
        <h1>Your favorite pokemons</h1>
        <p>Hay <b>{storageArray.length}</b> pokemones seleccionados</p>
      </div>
      <div className="follows__card--container">
        <button onClick={prev} disabled={actual <= 1}>
          <span class="material-symbols-outlined">navigate_before</span>
        </button>
        <div className="follows__container">
          {pokemon.map((poke) =>
            storeSee?.map((arr) => (
              <>{poke.name === arr && <SeePokemonFollows url={poke.url} />}</>
            ))
          )}
        </div>
        <button onClick={next} disabled={large === storageArray.length-1}>
          <span class="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
      <i className="fa-sharp fa-solid fa-circle-xmark" onClick={() => navigate("/pokedex")}></i>
    </div>
  );
};


export default Follows;
