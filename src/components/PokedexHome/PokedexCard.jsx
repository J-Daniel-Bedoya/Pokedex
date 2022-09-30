import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pokemonObject } from "../../store/slices/pokemonObject.slice";
import colors from "../../../public/colors.json";
import types from "../../../public/types.json";
import icons from "../../../public/icons.json";
import axios from "axios";
import { setFollows } from "../../store/slices/follows.slice";
import "../../assets/css/PokedexHomeStyles/PokedexCard.css";

const PokedexCard = ({ url }) => {
  const [followsColor, setFollowsColor] = useState(false);
  const [pokemon, setPokemon] = useState({}); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
      dispatch(pokemonObject(res.data));
    });
    // console.log(pokemon)
  }, [url]);

  const pokemonInfo = (id) => {
    navigate(`/pokedex/info_pokemon/${id}`);
  };

  const colorsFont = () => {
    let color = null;
    types.map((e, index) => {
      if (pokemon.types?.[0].type.name === e) {
        color = colors[index];
      }
    });
    return color;
  };
  const colorsFont1 = () => {
    let color = null;
    types.map((e, index) => {
      if (pokemon.types?.[1].type.name === e) {
        color = colors[index];
      }
    });
    return color;
  };
  const typeComplete = () => {
    const arrayIcon = [];
    types.map((icon, index) => {
      if (pokemon.types?.[0]?.type.name === icon) {
        arrayIcon.push(icons[index]);
      }
    });
    const arrayIcon1 = [];
    types.map((icon, index) => {
      if (pokemon.types?.[1]?.type.name === icon) {
        arrayIcon1.push(icons[index]);
      }
    });
    if (pokemon.types?.length > 1) {
      return (
        <div className="card__type--text-content">
          <div className="card__type--text card__scale">
            <i
              className={`fa-solid ${arrayIcon[0]} icon-card`}
              style={{ background: colorsFont() }}
            ></i>
            <p className="pokemon__type--description">
              {pokemon.types?.[0]?.type.name}
            </p>
          </div>
          <div className="card__type--text card__scale">
            <i
              className={`fa-solid ${arrayIcon1[0]} icon-card`}
              style={{ background: colorsFont1() }}
            ></i>
            <p className="pokemon__type--description">
              {pokemon.types?.[1]?.type.name}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card__type--complete card__scale">
          <i
            className={`fa-solid ${arrayIcon[0]} icon-card`}
            style={{ background: colorsFont() }}
          ></i>
          <p className="pokemon__type--description">
            {pokemon.types?.[0]?.type.name}
          </p>
        </div>
      );
    }
  };
  
  const colorStorage = () => {
    setFollowsColor(!followsColor)
  }
  const [colorState, setColorState] = useState(0)
  const storageArray =  JSON.parse(localStorage.getItem("arrayFollows"))
  useEffect(() => {
    const filterArray = storageArray?.findIndex(fil => fil === pokemon.name)
    setColorState(filterArray)
  }, [storageArray])

  return (
    <>
      {/* card para mostra la información de los pokemones  */}
      <div
        className="card-pokedex"
        style={{ background: `radial-gradient(${colorsFont()}, #0C0E10)` }}
        >
        <div className="card__follow" onClick={() => colorStorage()}>
          <button
            className="card__follow--btn"
            onClick={() => dispatch(setFollows(pokemon.name))}
            style={{background: colorState >= 0 ? "#040720" : "#f3efef"}}
            >
            {colorState >= 0 ? <i class="fa-solid fa-heart-circle-check"></i> : <i class="fa-solid fa-heart"></i>}
          </button>
        </div>
        <img
          id="pokemon__img"
          src={pokemon.sprites?.other["dream_world"].front_default}
          alt={pokemon.name}
        />
        <h3 className="card__tittle">{pokemon?.name}</h3>
        <p style={{ background: `linear-gradient(${colorsFont()}, #011111)` }}>
          #{pokemon.id}
        </p>
        <div className="card__pokedex--container" onClick={() => pokemonInfo(pokemon.id)}>
          <ul className="card__list">
            <hr className="card__barra--tittle--hr" />
            <div className="card__type--info-text">
              <b>Type</b>
              {typeComplete()}
            </div>
            <div className="card__content">
              <div className="card__container--list">
                <li className="card__list--li card__list--hp">
                  <p>hp</p>
                </li>
                <p>{pokemon.stats?.[0].base_stat}</p>
              </div>
              <div className="card__container--list">
                <li className="card__list--li card__list--attack">
                  <p>attack</p>
                </li>
                <p>{pokemon.stats?.[1].base_stat}</p>
              </div>
              <div className="card__container--list">
                <li className="card__list--li card__list--defense">
                  <p>defense</p>
                </li>
                <p>{pokemon.stats?.[2].base_stat}</p>
              </div>
              <div className="card__container--list">
                <li className="card__list--li card__list--speed">
                  <p>speed</p>
                </li>
                <p>{pokemon.stats?.[5].base_stat}</p>
              </div>
            </div>
            <img
              id="pokemon__img2"
              src={pokemon.sprites?.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </ul>
        </div>
        <div className="prueva">
          <div className="prueva1"></div>
        </div>
      </div>
    </>
  );
};

export default PokedexCard;
