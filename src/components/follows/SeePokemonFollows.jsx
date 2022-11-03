import axios from 'axios';
import React, { useEffect, useState } from 'react'
import colors from "../../../public/colors.json";
import types from "../../../public/types.json";
import { setFollows } from "../../store/slices/follows.slice";
import { useDispatch } from "react-redux";

const SeePokemonFollows = ({url}) => {

  const [pokemon, setPokemon] = useState([]);
  const [followsColor, setFollowsColor] = useState(false);
  const [colorState, setColorState] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
    });
  }, []);

  const colorsFont = () => {
    let color = null;
    types.map((e, index) => {
      if (pokemon.types?.[0].type.name === e) {
        color = colors[index];
      }
    });
    return color;
  };

  const colorStorage = () => {
    setFollowsColor(!followsColor)
  }
  
  const storageArray =  JSON.parse(localStorage.getItem("arrayFollows"))
  useEffect(() => {
    const filterArray = storageArray?.findIndex(fil => fil === pokemon.name)
    setColorState(filterArray)
  }, [storageArray])

  return (
    <>
    <div className="pokemonFollows"  style={{ background: `radial-gradient(${colorsFont()}, #0C0E10)` }}>
      <div className='pokemonFollows__id' style={{ background: `linear-gradient(${colorsFont()}, #0C0E10)` }}>{pokemon.id}</div>
      <div id="card__pokemonFollow" onClick={() => colorStorage()}>
        <button
          id="card__pokemonFollow--btn"
          onClick={() => dispatch(setFollows(pokemon.name))}
          style={{background: colorState >= 0 ? "#040720" : "#f3efef"}}
          >
          {colorState >= 0 ? <i className="fa-solid fa-heart-circle-check"></i> : <i className="fa-solid fa-heart"></i>}
        </button>
      </div>
      <div className="pokemonFollows__cards">
        <div className="pokemonFollows__card">
          <img
            className="pokemonFollows__img"
            src={pokemon.sprites?.other["dream_world"].front_default}
            alt={pokemon.name}
          />
          <div className='pokemonFollows__info'>
            <h4>{pokemon.name}</h4>
            <div className='pokemonFollows__info--text'>
              <div className='text'>
                <div className='text__p'>
                  <p>Base experience:</p>
                  <b>{pokemon.base_experience}</b>
                </div>
                <div className='text__p'>
                  <p>Abilities</p>
                  <b>{pokemon.abilities?.[0].ability.name}</b>
                </div>
              </div>
              <div className='text'>
                <div className='text__p'>
                  <p>Type:</p>
                  <div id='b__type'>{pokemon.types?.map((e,i) => <b>{e.type.name}{i !== pokemon.types.length-1 && ","} </b>)}</div>
                </div>
                <div className='text__p'>
                  <p>Moves:</p> 
                  <b>{pokemon.moves?.length}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SeePokemonFollows;
