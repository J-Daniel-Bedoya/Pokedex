import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import colors from '../../../public/colors.json';
import types from '../../../public/types.json';
import '../../assets/css/PokemonInfo.css'

const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()
  const settings = () => {
    navigate("/settings")
  }
  const atras = (e) => {
    e.preventDefault()
    navigate(-1)
  }
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
      setPokemon(res.data)
      
    })
  }, [id]) 
  
  const colorsFont = () => {
    let color = null
    types.map((e, index) => {
      if (pokemon.types?.[0].type.name === e) {
        color = colors[index]
      }
    })
    return color
  }
  const colorsFont2 = () => {
    let color = null
    types.map((e, index) => {
      if (pokemon.types?.[1]?.type.name === e) {
        color = colors[index]
      }
    })
    return color
  }
  const typeComplete = () =>{
    if (pokemon.types?.length > 1){
      return "pokemon__type--text"
    }
    else{
      return "pokemon__type--complete"
    }
  }
  const typeComplete2 = () =>{
    if (pokemon.types?.length > 1){
      return "pokemon__type--text"
    }
    else{
      return ""
    }
  }

  return (
    // contenedor general
    <div className='PokemonInfo' style={{background: colorsFont()}}>
      <div className='pokemon'>
        {/* <img className='pokemon__logo' src="../../assets/img/International_Pokémon_logo.svg.png" alt="" /> */}
        <div className='pokemon__logo'></div>
        <div className='pokemon__catainer--grup' key={pokemon.name}>
          <div className='pokemon__info' >
            {/* información principal - primera card */}
            <div className='pokemon__info--principal' >
              <img className='pokemon__img' src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
              <div className='pokemon__container--weight'>
                <b className='b1'>{pokemon.height}</b>
                <h3 className='pokemon__weight weight'>Weight</h3>
                <hr className='pokemon__info-principal--barra'/>
              </div>
              <div className='pokemon__container--height'>
                <b className='b2'>{pokemon.weight}</b>
                <h3 className='pokemon__weight height'>Height</h3>
                <hr className='pokemon__info-principal--barra'/>
              </div>
              <div className='pokemon__container--name'>
                <p className='pokemon__name'>{pokemon.name}</p>
                <div className='pokemon__id'><p className='p'># {pokemon.id}</p></div>
              </div>
            </div>
            {/* segunda y tercera card type and abilities */}
            <div className='pokemon__type--abilities'>
              <div className='pokemon__type' >
                <hr className='pokemon__barra--type'/>
                <p className='pokemon__type--tittle'>Type</p>
                <div className='pokemon__type--container-description'>
                  <div className={typeComplete()} style={{background: colorsFont()}}>
                    <p className='pokemon__type--description' >{pokemon.types?.[0]?.type.name}</p> 
                  </div>
                  <div className={typeComplete2()} style={{background: colorsFont2()}}>
                    <p className='pokemon__type--description'>{pokemon.types?.[1]?.type.name}</p>
                  </div>
                </div> 
              </div>
              <div className='pokemon__abilities'> 
                <hr className='pokemon__barra--abilities'/>
                <p className='pokemon__abilities--tittle'>Abilities</p>
                <div className='pokemon__abilities--cotainer-description'>
                  <div className='pokemon__abilities--text'>
                    <p className='pokemon__abilities--description'>{pokemon.abilities?.[0]?.ability.name}</p>  
                  </div>
                  <div className='pokemon__abilities--text'>
                    <p className='pokemon__abilities--description'>{pokemon.abilities?.[1]?.ability.name}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* tercera card stats base */}
            <div className='pokemon__stats'> 
              <hr className='pokemon__stats--barra'/>
              <h2 className='pokemon__stats--tittle'>stats base</h2>
              <div className='pokemon__stats--container'>
                <div className='pokemon__stats--cotainer-statistics'>
                  <div className='pokemon__stats--statistics'>
                    <p className='pokemon__statistics--text'>hp:</p>
                  </div>
                  <div className='pokemon__div--barra'>
                    <div className='pokemon__font-barra'>
                      <p>{pokemon.stats?.[0].base_stat}/150</p>
                      <div className='pokemon__animation--barras'></div>
                    </div>
                  </div>
                </div>
                <div className='pokemon__stats--cotainer-statistics'>
                  <div className='pokemon__stats--statistics'>
                    <p className='pokemon__statistics--text'>speed:</p>
                  </div>
                  <div className='pokemon__div--barra'>
                    <div className='pokemon__font-barra'>
                      <p>{pokemon.stats?.[5].base_stat}/150</p>
                      <div className='pokemon__animation--barras'></div>
                    </div>
                  </div>
                </div>
                <div className='pokemon__stats--cotainer-statistics'>
                  <div className='pokemon__stats--statistics'>
                    <p className='pokemon__statistics--text'>attack:</p>
                  </div>
                  <div className='pokemon__div--barra'>
                    <div className='pokemon__font-barra'>
                      <p>{pokemon.stats?.[1].base_stat}/150</p>
                      <div className='pokemon__animation--barras'></div>
                    </div>
                  </div>
                </div>
                <div className='pokemon__stats--cotainer-statistics'>
                  <div className='pokemon__stats--statistics'>
                    <p className='pokemon__statistics--text'>defense:</p>
                  </div>
                  <div className='pokemon__div--barra'>
                    <div className='pokemon__font-barra'>
                      <p>{pokemon.stats?.[2].base_stat}/150</p>
                      <div className='pokemon__animation--barras'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* información secundaria encounters and movements */}
          <div className='pokemon__info--secundaria'>
            <div className='pokemon__encounters'>
              <i className="fa-solid fa-location-pin"></i> 
              <p className='pokemon__encounters--p'>Encounters</p>
            </div>
            <div className='pokemon__movements'>
              <hr className='pokemon__movements--hr1'/>
              <h3 className='pokemon__movements--tittle'>Movements</h3>
              {
                pokemon.moves?.map(e => (
                  <div className='pokemon__movements--cotainer-p'>
                    <p key={e.url} className="pokemon__movements--p">{e.move.name}</p>
                    <hr className='pokemon__movements--hr2'/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <button 
          onClick={atras} 
          className='btn-exit'>
          <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      <div className='page__settings' onClick={settings}>
        <i className="fa-solid fa-gear page__settings--icon"></i>
      </div>
    </div>
  );
};

export default PokemonInfo;