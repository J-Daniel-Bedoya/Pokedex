import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/PokedexCard.css'

const PokedexCard = () => {
  const navigate = useNavigate()
  const pokemonInfo = () => {
    navigate("/home/:name/info_pokemon/pokemon")
  } 

  return (
    <div className='container__card'>
      {/* card para mostra la información de los pokemones */}
      <div className='card-pokedex' onClick={pokemonInfo}>
        <h3 className='card__tittle'>Bulbasor</h3>
        <ul className='card__list'>
          <div className='card__container--list'>
            <li className='card__list--li card__list--type'><b>Types:</b> waiter</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--hp'><b>hp:</b> 79</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--attack'><b>attack:</b> 85</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--defense'><b>defense:</b> 100</li>
          </div>
          <div className='card__container--list'>
            <li className='card__list--li card__list--speed'><b>speed:</b> 89</li>
          </div>
        </ul>
      </div>
      

      
    </div>
  );
};

export default PokedexCard;