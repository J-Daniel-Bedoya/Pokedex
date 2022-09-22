import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../assets/css/PokemonInfo.css'

const PokemonInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const settings = () => {
    navigate("/settings")
  }
  const atras = () => {
    navigate(-1)
  }

  return (
    // contenedor general
    <div className='PokemonInfo'>
      <div className='pokemon'>
        <img className='pokemon__logo' src="https://i.ibb.co/Nm8JMSB/Pokemon-Logo.jpg" alt="" />
        <div className='pokemon__catainer--grup'>
          <div className='pokemon__info'>
            {/* información principal - primera card */}
            <div className='pokemon__info--principal'>
              <img className='pokemon__img' src="" alt="" />
              <div className='pokemon__container--weight'>
                <b className='b1'>87</b>
                <h3 className='pokemon__weight weight'>Weight</h3>
                <hr className='pokemon__info-principal--barra'/>
              </div>
              <div className='pokemon__container--height'>
                <b className='b2'>100</b>
                <h3 className='pokemon__weight height'>Height</h3>
                <hr className='pokemon__info-principal--barra'/>
              </div>
              <div className='pokemon__container--name'>
                <p className='pokemon__name'>name</p>
                <div className='pokemon__id'><p className='p'># 5</p></div>
              </div>
            </div>
            {/* segunda y tercera card type and abilities */}
            <div className='pokemon__type--abilities'>
              <div className='pokemon__type'>
                <hr className='pokemon__barra--type'/>
                <p className='pokemon__type--tittle'>Type</p>
                <div className='pokemon__type--container-description'>
                  <div className='pokemon__type--text'>
                    <p className='pokemon__type--description'>Grass</p> 
                  </div>
                  <div className='pokemon__type--text'>
                    <p className='pokemon__type--description'>...</p>
                  </div>
                </div>
              </div>
              <div className='pokemon__abilities'> 
                <hr className='pokemon__barra--abilities'/>
                <p className='pokemon__abilities--tittle'>Abilities</p>
                <div className='pokemon__abilities--cotainer-description'>
                  <div className='pokemon__abilities--text'>
                    <p className='pokemon__abilities--description'>Overgrow</p>  
                  </div>
                  <div className='pokemon__abilities--text'>
                    <p className='pokemon__abilities--description'>...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* tercera card stats base */}
            <div className='pokemon__stats'> 
              <h2 className='pokemon__stats--tittle'>stats base</h2>
              <p className='pokemon__stats--hp'>hp</p>
                <div></div>
              <p className='pokemon__stats--speed'>speed</p>
                <div></div>
              <p className='pokemon__stats--attack'>attack</p>
                <div></div>
              <p className='pokemon__stats--defense'>defense</p>
                <div></div>
            </div>
          </div>
          {/* información secundaria encounters and movements */}
          <div className='pokemon__info--secundaria'>
            <div className='pokemon__encounters'>Encounters</div>
            <div className='pokemon__movements'>Movements</div>
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