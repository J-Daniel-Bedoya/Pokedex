import React, { useEffect, useState } from "react";
import {
  getPokemonArrayThunk,
  getPokemonCategory,
} from "../../store/slices/pokemon.slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameActual } from "../../store/slices/nameActual.slice";
import { getSelectTypeThunk } from "../../store/slices/pokemonType.slice";
import PaginationPokemon from "./PaginationPokemon";
import PokedexCard from "./PokedexCard";


const PokedexMainScreen = () => {
  const navigate = useNavigate();
  const nameUser = localStorage.getItem("name");
  const storage = useSelector((state) => state.storageColor);
  const currentPageSelect = useSelector((state) => state.currentPage);
  const postPerPageSelect = useSelector((state) => state.postPerPage);
  const followStorage = useSelector((state) => state.follows);
  const followStorageLarge = JSON.parse(localStorage.getItem("follows"))
  const pokemon = useSelector((state) => state.pokemon);
  const selectType = useSelector((state) => state.pokemonType);
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = useState(false);
  const [stateInput, setStateInput] = useState(false);
  const [selectCategory, setSelectCategory] = useState(false);
  const [text_pokemon, setText_pokemon] = useState("");

  // funcion para ir hacia salir de la sección
  const goBack = () => {
    navigate("/");
    localStorage.setItem("name", "");
    dispatch(setNameActual(true));
  };
  // funcion para captar los nombres que se copien en los inputs
  const submit = () => {
    let num = Number(text_pokemon);
    if (text_pokemon == num) {
      navigate(`/pokedex/info_pokemon/${num}`);
    } else {
      let textLowerCase = text_pokemon.toLowerCase();
      const index = pokemon.findIndex((fil) => fil.name === textLowerCase);
      const index2 = index + 1;
      navigate(`/pokedex/info_pokemon/${index2}`);
    }
  };
  // funcion para ir a las cofiguraciones
  const settings = () => {
    navigate("/settings");
  };
  // funcion para consumir todos los pokemones
  useEffect(() => {
    dispatch(getPokemonArrayThunk());
  }, []);
  // funcion para mostrar por tipo a los pokemones
  const selectCategoryApi = (name) => {
    setSelectCategory(true);
    dispatch(getPokemonCategory(name));
  };
  // funcion para mostrar por tipo a los pokemones
  useEffect(() => {
    dispatch(getSelectTypeThunk());
  }, []);
  const typeOfInput = () => {
    if (typeInput) {
      return (
        <div className="main-screen__text-pokemon">
          <input
            id="namePokemon"
            className={stateInput ? "shrunken" : "namePokemon-input"}
            type="text"
            value={text_pokemon}
            onChange={(e) => setText_pokemon(e.target.value)}
          />
          <button
            type="button"
            // onClick={() => setAnimationSee(!animationSee)}
            onClick={() => setStateInput(!stateInput)}
            className={
              stateInput ? `btn__pokemon--search2` : `btn__pokemon--search1`
            }
          ></button>
        </div>
      );
    } else {
      return (
        <select
          name=""
          id=""
          className="main-screen__select"
          onChange={(e) => selectCategoryApi(e.target.value)}
        >
          <option value=" ">Select Pokemon</option>
          {selectType.map((select) => (
            <option key={select.url} value={select.name}>
              {select.name}
            </option>
          ))}
        </select>
      );
    }
  };
  // Paginación
  const indexOfLastPokemon = currentPageSelect * postPerPageSelect;
  const indeOfFristPokemon = indexOfLastPokemon - postPerPageSelect;
  const currentPostPokemon = pokemon?.slice(
    indeOfFristPokemon,
    indexOfLastPokemon
  );
  const goFollows = () => {
    navigate("/pokedex/follows");
  };

  return (
    // contenedor general de main screen
    <div className={storage}>
      <div className={`PokedexMainScreen noneOverflow`}>
        <div
          className="pokemon__follows--main-screen"
          onClick={() => goFollows()}
        >
          {followStorageLarge >= 1 ? (
            <i className="fa-solid fa-heart-circle-check"></i>
          ) : (
            <i className="fa-solid fa-heart"></i>
          )}
          <p>{followStorageLarge >= 1 ? followStorage.length : 0}</p>
        </div>
        <div className="main-screen">
          {/* header */}
          <h1 className="main-screen__tittle">Pokedex</h1>
          <p className="main-screen__text">
            Welcome {nameUser}, here you can find your favorite pokemon
          </p>
          {/* configuración para cambiar el tipo de búsqueda */}
          <div className="main-screen__cantainer--type-pokemon">
            <div className="type-pokemon__catainer">
              <h5 className="type-pokemon__type">type</h5>
              <input id="cheked" type="checkbox" />
              <label
                htmlFor="cheked"
                id="circle"
                onClick={() => setTypeInput(!typeInput)}
              >
                <div></div>
              </label>
              <h5 className="type-pokemon__pokemon">pokemon</h5>
            </div>
          </div>
          {/* input de tipo selector para seleccionar el tipo de pokemon */}
          <form
            onSubmit={submit}
            className="main-screen__form"
            autoComplete="Off"
          >
            <div className="main-screen__container--select">
              {typeOfInput()}
            </div>
          </form>
          {/* boton para ir hacia atras */}
          <button onClick={goBack} className="btn-exit">
            <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
          </button>
          <div className="container__card">
            {/* componente de cards */}
            {selectCategory
              ? currentPostPokemon?.map((e) => (
                  <PokedexCard url={e.pokemon?.url} key={e.pokemon?.name} />
                ))
              : currentPostPokemon?.map((e) => (
                  <PokedexCard url={e.url} key={e.name} />
                ))}
          </div>
          {/* boton para ir a la ventana de configuraciones */}
          <div className="page__settings" onClick={settings}>
            <i className="fa-solid fa-gear page__settings--icon"></i>
          </div>
          <div className="pagination">
            <PaginationPokemon postPerPage={postPerPageSelect} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PokedexMainScreen;
