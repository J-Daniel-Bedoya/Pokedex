import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import colors from "../../../public/colors.json";
import types from "../../../public/types.json";
import { useDispatch } from "react-redux";
import { setFollows } from "../../store/slices/follows.slice";
import "../../assets/css/infoPokemonStyles/PokemonInfo.css";

const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState({});
  const [followsColor, setFollowsColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { id } = useParams();
  const settings = () => {
    navigate("/settings");
  };
  const atras = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
    });
  }, [id]);

  const colorsFont = () => {
    let color = null;
    types.map((e, index) => {
      if (pokemon.types?.[0].type.name === e) {
        color = colors[index];
      }
    });
    return color;
  };
  const colorsFont2 = () => {
    let color = null;
    types.map((e, index) => {
      if (pokemon.types?.[1]?.type.name === e) {
        color = colors[index];
      }
    });
    return color;
  };
  const typeComplete = () => {
    if (pokemon.types?.length > 1) {
      return "pokemon__type--text";
    } else {
      return "pokemon__type--complete";
    }
  };
  const typeComplete2 = () => {
    if (pokemon.types?.length > 1) {
      return "pokemon__type--text";
    } else {
      return "";
    }
  };

  const [followStorage, setFollowStorage] = useState('')
  const fuctionf = () => {
    return localStorage.getItem("follows")
  }

  useEffect(() => {
    setFollowStorage(fuctionf())
  }, [fuctionf, followStorage])

  const [colorState, setColorState] = useState(0)
  const storageArray =  JSON.parse(localStorage.getItem("arrayFollows"))
  useEffect(() => {
    const filterArray = storageArray?.findIndex(fil => fil === pokemon.name)
    setColorState(filterArray)
  }, [storageArray])


  return (
    // contenedor general
    <div className="PokemonInfo" style={{ background: colorsFont() }}>
      <div className="pokemon">
        {/* <img className='pokemon__logo' src="../../assets/img/International_Pokémon_logo.svg.png" alt="" /> */}
        <div className="pokemon__logo"></div>
        <div className="pokemon__catainer--grup" key={pokemon.name}>
          <div className="pokemon__info">
            <div className="pokemon__follows">
              {
                followStorage.length !== 0 ? (
                  <i class="fa-solid fa-heart-circle-check"></i>
                ) : (
                  <i class="fa-solid fa-heart"></i>
                )
              }
              <p>{followStorage}</p>
            </div>
            {/* información principal - primera card */}
            <div className="pokemon__info--principal">
              <div
                className="card__follow"
                onClick={() => setFollowsColor(!followsColor)}
              >
                <button
                  className="card__follow--btn"
                  onClick={() => dispatch(setFollows(pokemon.name))}
                  style={{ background: colorState >=0 ? "#040720" : "#f3efef" }}
                >
                  {colorState >=0 ? (
                    <i class="fa-solid fa-heart-circle-check"></i>
                  ) : (
                    <i class="fa-solid fa-heart"></i>
                  )}
                </button>
              </div>
              <img
                className="pokemon__img"
                src={pokemon.sprites?.other["official-artwork"].front_default}
                alt=""
              />
              <div className="pokemon__container--weight">
                <b className="b1">{pokemon.height}</b>
                <h3 className="pokemon__weight weight">Weight</h3>
                <hr className="pokemon__info-principal--barra" />
              </div>
              <div className="pokemon__container--height">
                <b className="b2">{pokemon.weight}</b>
                <h3 className="pokemon__weight height">Height</h3>
                <hr className="pokemon__info-principal--barra" />
              </div>
              <div className="pokemon__container--name">
                <p className="pokemon__name">{pokemon.name}</p>
                <div className="pokemon__id">
                  <p className="p"># {pokemon.id}</p>
                </div>
              </div>
            </div>
            {/* segunda y tercera card type and abilities */}
            <div className="pokemon__type--abilities">
              <div className="pokemon__type">
                <hr className="pokemon__barra--type" />
                <p className="pokemon__type--tittle">Type</p>
                <div className="pokemon__type--container-description">
                  <div
                    className={typeComplete()}
                    style={{ background: colorsFont() }}
                  >
                    <p className="pokemon__type--descriptions">
                      {pokemon.types?.[0]?.type.name}
                    </p>
                  </div>
                  <div
                    className={typeComplete2()}
                    style={{ background: colorsFont2() }}
                  >
                    <p className="pokemon__type--description">
                      {pokemon.types?.[1]?.type.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pokemon__abilities">
                <hr className="pokemon__barra--abilities" />
                <p className="pokemon__abilities--tittle">Abilities</p>
                <div className="pokemon__abilities--cotainer-description">
                  <div className="pokemon__abilities--text">
                    <p className="pokemon__abilities--description">
                      {pokemon.abilities?.[0]?.ability.name}
                    </p>
                  </div>
                  <div className="pokemon__abilities--text">
                    <p className="pokemon__abilities--description">
                      {pokemon.abilities?.[1]?.ability.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* tercera card stats base */}
            <div className="pokemon__stats">
              <hr className="pokemon__stats--barra" />
              <h2 className="pokemon__stats--tittle">stats base</h2>
              <div className="pokemon__stats--container">
                {pokemon.stats?.map(
                  (stat) => (
                    console.log(stat),
                    (
                      <div className="pokemon__stats--cotainer-statistics">
                        <div className="pokemon__stats--statistics">
                          <p className="pokemon__statistics--text">
                            {stat.stat.name}:
                          </p>
                        </div>
                        <div className="pokemon__div--barra">
                          <div
                            className="pokemon__font-barra"
                            style={{
                              width: `${(stat.base_stat * 100) / 150}%`,
                            }}
                          >
                            <p>{stat.base_stat}/150</p>
                            <div className="pokemon__animation--barras"></div>
                          </div>
                        </div>
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </div>
          {/* información secundaria encounters and movements */}
          <div className="pokemon__info--secundaria">
            <div className="pokemon__encounters">
              <i className="fa-solid fa-location-pin"></i>
              <p className="pokemon__encounters--p">Encounters</p>
            </div>
            <div className="pokemon__movements">
              <hr className="pokemon__movements--hr1" />
              <h3 className="pokemon__movements--tittle">Movements</h3>
              {pokemon.moves?.map((e) => (
                <div className="pokemon__movements--cotainer-p">
                  <p key={e.move.url} className="pokemon__movements--p">
                    {e.move.name}
                  </p>
                  <hr className="pokemon__movements--hr2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button onClick={atras} className="btn-exit">
        <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
      </button>
      <div className="page__settings" onClick={settings}>
        <i className="fa-solid fa-gear page__settings--icon"></i>
      </div>
    </div>
  );
};

export default PokemonInfo;
