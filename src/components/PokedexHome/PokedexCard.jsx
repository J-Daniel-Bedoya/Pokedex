import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonObject } from '../../store/slices/pokemonObject.slice';
import colors from '../../../public/colors.json';
import types from '../../../public/types.json';
import icons from '../../../public/icons.json'
import axios from 'axios';
import '../../assets/css/PokedexCard.css';

const PokedexCard = ({url}) => {
  // const pokemon = useSelector(state => state.pokemonObjec)
  const [pokemon, setPokemon] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setPokemon(res.data)
      dispatch(pokemonObject(res.data))
    }) 
    // console.log(pokemon)
  }, [url])

  const pokemonInfo = (id) => {
    navigate(`/pokedex/info_pokemon/${id}`)
  } 
  
  const colorsFont = () => {
    let color = null
    types.map((e, index) => {
      if (pokemon.types?.[0].type.name === e) {
        color = colors[index]
      }
    })
    return color
  }
  const colorsFont1 = () => {
    let color = null
    types.map((e, index) => {
      if (pokemon.types?.[1].type.name === e) {
        color = colors[index]
      }
    })
    return color
  }
  const typeComplete = () =>{
    const arrayIcon = []
    types.map((icon, index) => {
      if (pokemon.types?.[0]?.type.name === icon) {
        arrayIcon.push(icons[index])
      }
    })
    const arrayIcon1 = []
    types.map((icon, index) => {
      if (pokemon.types?.[1]?.type.name === icon) {
        arrayIcon1.push(icons[index])
      }
    })
    if (pokemon.types?.length > 1){
      return (
        <div className="card__type--text-content">
          <div className='card__type--text card__scale'>
            <i className={`fa-solid ${arrayIcon[0]} icon-card`} style={{background: colorsFont()}}></i>
            <p className='pokemon__type--description' >{pokemon.types?.[0]?.type.name}</p> 
          </div>
          <div className='card__type--text card__scale'>
            <i className={`fa-solid ${arrayIcon1[0]} icon-card`} style={{background: colorsFont1()}}></i>
            <p className='pokemon__type--description'>{pokemon.types?.[1]?.type.name}</p>
          </div>
        </div>
        
        )
      }else {
      return (
        <div className="card__type--complete card__scale">
          <i className={`fa-solid ${arrayIcon[0]} icon-card`} style={{background: colorsFont()}}></i>
          <p className='pokemon__type--description'>{pokemon.types?.[0]?.type.name}</p>
        </div>
      )
    }
  }

  return (
    <>
      {/* card para mostra la información de los pokemones  #EAEBEC   #0C0E10*/}
      <div 
        className='card-pokedex' 
        onClick={() => pokemonInfo(pokemon.id)} 
        style={{background: `radial-gradient(${colorsFont()}, #0C0E10)`}}>

        <img id='pokemon__img' src={pokemon.sprites?.other["dream_world"].front_default} alt={pokemon.name}/>
        <h3 className='card__tittle'>{pokemon?.name}</h3>
        <p style={{background: `linear-gradient(${colorsFont()}, #011111)`}}>#{pokemon.id}</p>
        <div className='card__pokedex--container'>
          <ul className='card__list'>
            <hr className='card__barra--tittle--hr'/>
            <div className='card__type--info-text'>
              <b>Type</b>
              {typeComplete()}
            </div>
            <div className='card__content'>
              <div className='card__container--list'>
                <li className='card__list--li card__list--hp'><p>hp</p></li>
                <p>{pokemon.stats?.[0].base_stat}</p>
              </div>
              <div className='card__container--list'>
                <li className='card__list--li card__list--attack'><p>attack</p></li>
                <p>{pokemon.stats?.[1].base_stat}</p>
              </div>
              <div className='card__container--list'>
                <li className='card__list--li card__list--defense'><p>defense</p></li>
                <p>{pokemon.stats?.[2].base_stat}</p>
              </div>
              <div className='card__container--list'>
                <li className='card__list--li card__list--speed'><p>speed</p></li>
                <p>{pokemon.stats?.[5].base_stat}</p>
              </div>
            </div>
            <img id='pokemon__img2' src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name}/>
          </ul>
        </div>
        <div className='prueva'>
          <div className='prueva1'></div>
        </div>

      </div>
    </>
  );
};

export default PokedexCard;