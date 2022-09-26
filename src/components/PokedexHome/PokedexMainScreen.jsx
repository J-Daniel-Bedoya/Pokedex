import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { pokemonArray } from '../../store/slices/pokemon.slice';
import { useNavigate } from 'react-router-dom';
import PokedexCard from './PokedexCard';
import { useSelector, useDispatch } from 'react-redux';
import PaginationPokemon from './PaginationPokemon';
import '../../assets/css/PokedexMainScreen.css'
import '../../assets/css/PokedexCard.css'

const PokedexMainScreen = () => {
  // const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const nameUser = useSelector(state => state.name)
  const colorChange = useSelector(state => state.colorChange)
  const currentPageSelect = useSelector(state => state.currentPage)
  const postPerPageSelect = useSelector(state => state.postPerPage)
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  const [typeInput, setTypeInput] = useState(false)
  const [stateInput, setStateInput] = useState(false)
  const [selectCategory, setSelectCategory] = useState(false)
  const [selectType, setSelectType] = useState([])
  const [text_pokemon, setText_pokemon] = useState('')

  // funcion para ir hacia salir de la sección
  const goBack = () => {
    navigate("/")
  }
  // funcion para captar los nombres que se copien en los inputs
  const submit = () => {
    let num = Number(text_pokemon)
    if(text_pokemon == num) {
      navigate(`/pokedex/info_pokemon/${num}`)
    }else{
      let textLowerCase = text_pokemon.toLowerCase()
      const index = pokemon.findIndex(fil => fil.name === textLowerCase)
      const index2 = index + 1
      navigate(`/pokedex/info_pokemon/${index2}`)
    }
  }
  // funcion para ir a las cofiguraciones
  const settings = () => {
    navigate("/settings")
  }
  // funcion para consumir todos los pokemones
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155')
    .then(res => {
      dispatch(pokemonArray(res.data.results))
    })
  }, [])
  // funcion para mostrar por tipo a los pokemones
  const selectCategoryApi = (name) => {
    setSelectCategory(true)
    axios.get(`https://pokeapi.co/api/v2/type/${name}`)
    .then(res => {
      dispatch(pokemonArray(res.data.pokemon))
    })
  }
  // funcion para mostrar por tipo a los pokemones
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/')
    .then(res => {
      setSelectType(res.data.results)
    })
  }, [])
  const typeOfInput = () => {
    if (typeInput) {
      return (
        <div className='main-screen__text-pokemon'>
          <input  
            id='namePokemon' 
            className={stateInput ? "shrunken" : "namePokemon-input"}  
            type="text"
            value={text_pokemon}
            onChange={e => setText_pokemon(e.target.value)}
          />
          <button 
            type='button'
            // onClick={() => setAnimationSee(!animationSee)} 
            onClick={() => setStateInput(!stateInput)}
            className={stateInput ? `btn__pokemon--search2` : `btn__pokemon--search1`}
            ></button>
        </div>
      )
    }else{
      return (
        <select name="" id="" className='main-screen__select' onChange={e => selectCategoryApi(e.target.value)}>
          <option value=" ">Select Pokemon</option>
          {
            selectType.map(select => (
              <option key={select.url} value={select.name}>{select.name}</option>
            ))
          }
          </select>
      )
    }
  }
  // Paginación
  const indexOfLastPokemon = currentPageSelect * postPerPageSelect;
  const indeOfFristPokemon = indexOfLastPokemon - postPerPageSelect;
  const currentPostPokemon = pokemon?.slice(indeOfFristPokemon, indexOfLastPokemon);


  return (
    // contenedor general de main screen
    <div className={`PokedexMainScreen ${colorChange ? "change-color" : ""}`}>
      <div className='main-screen'>
        {/* header */}
        <h1 className='main-screen__tittle'>Pokedex</h1>
        <p className='main-screen__text'>Welcome {nameUser}, here you can find your favorite pokemon</p>
        {/* configuración para cambiar el tipo de búsqueda */}
        <div className='main-screen__cantainer--type-pokemon'>
          <div className='type-pokemon__catainer'>
            <h5 className='type-pokemon__type'>type</h5>
            <input id="cheked" type="checkbox" />
            <label htmlFor="cheked" id='circle' onClick={() => setTypeInput(!typeInput)}><div></div></label>
            <h5 className='type-pokemon__pokemon'>pokemon</h5>
          </div>
        </div>
        {/* input de tipo selector para seleccionar el tipo de pokemon */}
        <form onSubmit={submit} className="main-screen__form" autoComplete='Off'>
          <div className='main-screen__container--select'>
            {typeOfInput()}
          </div>
        </form>
        {/* boton para ir hacia atras */}
        <button 
          onClick={goBack} 
          className='btn-exit'>
          <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
        </button>
        <div className='container__card'> 
        {/* componente de cards */}
          {
            selectCategory ? (
              currentPostPokemon?.map(e => (
                <PokedexCard url={e.pokemon?.url} key={e.pokemon?.name} />
                )) 
                ) : (
              currentPostPokemon?.map(e => (
                <PokedexCard url={e.url} key={e.name} />
                )) 
            )
          }
        </div>
        {/* boton para ir a la ventana de configuraciones */}
        <div className='page__settings' onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
        </div>
        <div className='pagination'>
          <PaginationPokemon postPerPage={postPerPageSelect} />
        </div>
      </div>
    </div>
  );
};

export default PokedexMainScreen;