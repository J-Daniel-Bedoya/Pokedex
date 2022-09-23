import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import '../../assets/css/PokedexCard.css'

const PokedexCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get(url)
    .then(res => {
      setPokemon(res.data)
    }) 
  }, [url])
  const pokemonInfo = (id) => {
    navigate(`/pokedex/info_pokemon/${id}`)
  } 

  return (
    <>
      {/* card para mostra la información de los pokemones */}
      <div className='card-pokedex' onClick={() => pokemonInfo(pokemon.id)}>
        <h3 className='card__tittle'>{pokemon?.name}</h3>
        <ul className='card__list'>
          <div className='card__container--list'>
            <li 
              className='card__list--li card__list--type'>
              <b>Types:</b> {pokemon.types?.map(e => (
                <p className='p-type' key={e.type.url}>{e.type.name},</p>
              ))}
            </li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--hp'>
              <b>hp:</b> {pokemon.stats?.[0].base_stat}</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--attack'><b>attack:</b> {pokemon.stats?.[1].base_stat}</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--defense'><b>defense:</b> {pokemon.stats?.[2].base_stat}</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--speed'><b>speed:</b> {pokemon.stats?.[5].base_stat}</li>
          </div>
          <div className='pokemon__container--img'>
            <img id='pokemon__img' 
              src={pokemon.sprites?.other["dream_world"].front_default} alt={pokemon.name}/>
          </div>
        </ul>
      </div>
      

      
    </>
  );
};

export default PokedexCard;