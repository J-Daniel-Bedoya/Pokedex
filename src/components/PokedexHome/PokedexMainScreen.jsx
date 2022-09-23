import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PokedexCard from './PokedexCard';
import { useSelector, useDispatch } from 'react-redux';
import { currentPage } from '../../store/slices/currentPage.slice';
import PaginationPokemon from './PaginationPokemon';
import '../../assets/css/PokedexMainScreen.css'
import '../../assets/css/PokedexCard.css'

const PokedexMainScreen = () => {

  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  const {name} = useParams()
  const colorChange = useSelector(state => state.colorChange)
  const currentPageSelect = useSelector(state => state.currentPage)
  const postPerPageSelect = useSelector(state => state.postPerPage)
  const dispatch = useDispatch()

  const [typeInput, setTypeInput] = useState(false)
  const [stateInput, setStateInput] = useState(false)
  const [selectCategory, setSelectCategory] = useState(false)
  const [pokemon, setPokemon] = useState([])

  const infoPokemon = () => {
    const infoPokemon1 = useSelector(store => store.infoPokemon)
    return (
      <div>{infoPokemon1}</div>
    )
  }

  // funcion para ir hacia salir de la sección
  const goBack = () => {
    navigate("/")
  }
  const caracteresNumericos =  /^[0-9]+$/ 
  const submit = (form) => {
      const index = pokemon.findIndex(fil => fil.name === form.pokemon)
      const index2 = index + 1
      navigate(`/pokedex/info_pokemon/${index2}`)
  }
  // funcion para ir a las cofiguraciones
  const settings = () => {
    navigate("/settings")
  }
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155')
    .then(res => {
      setPokemon(res.data.results)
    })
  }, [])
  const selectCategoryApi = (name) => {
    setSelectCategory(true)
    axios.get(`https://pokeapi.co/api/v2/type/${name}`)
    .then(res => {
      setPokemon(res.data.pokemon)
      
    })
  }

  const indexOfLastPokemon = currentPageSelect * postPerPageSelect;
  const indeOfFristPokemon = indexOfLastPokemon - postPerPageSelect;
  const currentPostPokemon = pokemon?.slice(indeOfFristPokemon, indexOfLastPokemon);

  const pagination = (pageNumber) => dispatch(currentPage(pageNumber))

  const typeOfInput = () => {
    if (typeInput) {
      return (
        <div className='main-screen__text-pokemon'>
          <input  
            id='namePokemon' 
            className={stateInput ? "shrunken" : "namePokemon-input"}  
            type="text"
            {...register("pokemon")}
          />
          {/* <button className={animationSee ? `main-screen__btn-search--name-pokemon` : `Off`}>Submit</button> */}
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
            <option value="">All Pokemons</option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
          </select>
      )
    }
  }
  return (
    // contenedor general de main screen
    <div className={`PokedexMainScreen ${colorChange ? "change-color" : ""}`}>
      <div className='main-screen'>
        {/* header */}
        <h1 className='main-screen__tittle'>Pokedex</h1>
        <p className='main-screen__text'>Welcome {name}, here you can find your favorite pokemon</p>
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
        <form onSubmit={handleSubmit(submit)} className="main-screen__form">
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
          <PaginationPokemon postPerPage={postPerPageSelect} totalPagePokemon={pokemon?.length} pagination={pagination}/>
        </div>
      </div>
    </div>
  );
};

export default PokedexMainScreen;