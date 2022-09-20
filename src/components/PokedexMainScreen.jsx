import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../assets/css/PokedexMainScreen.css'
import PokedexCard from './PokedexCard';

const PokedexMainScreen = () => {
  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  const {name} = useParams()
  // funcion para ir hacia salir de la sección
  const goBack = () => {
    navigate("/")
  }
  const submit = (form) => {

  }
  // funcion para ir a las cofiguraciones
  const settings = () => {
    navigate("/settings")
  }
  return (
    // contenedor general de main screen
    <div className='PokedexMainScreen'>
      <div className='main-screen'>
        {/* header */}
        <h1 className='main-screen__tittle'>Pokedex</h1>
        <p className='main-screen__text'>Welcome {name}, here you can find your favorite pokemon</p>
        {/* configuración para cambiar el tipo de búsqueda */}
        <div className='main-screen__cantainer--type-pokemon'>
          <div className='type-pokemon__catainer'>
            <h5 className='type-pokemon__type'>type</h5>
              <div className='type-pokemon__barra'>
                <div className='type-pokemon__circle'></div>
              </div>
            <h5 className='type-pokemon__pokemon'>pokemon</h5>
          </div>
        </div>
        {/* input de tipo selector para seleccionar el tipo de pokemon */}
        <form onSubmit={handleSubmit(submit)} className="main-screen__form">
          <div className='main-screen__container--select'>
            <select name="" id="" className='main-screen__select'>
              <option value="">All Pokemons</option>
              <option value="">Normal</option>
              <option value="">fighting</option>
              <option value="">flying</option>
              <option value="">poison</option>
              <option value="">ground</option>
              <option value="">rock</option>
              <option value="">bug</option>
              <option value="">ghost</option>
              <option value="">steel</option>
              <option value="">fire</option>
              <option value="">water</option>
              <option value="">grass</option>
              <option value="">electric</option>
              <option value="">psychic</option>
              <option value="">ice</option>
              <option value="">dragon</option>
              <option value="">dark</option>
              <option value="">fairy</option>
              <option value="">unknown</option>
              <option value="">shadow</option>
            </select>

          </div>
        </form>
        {/* boton para ir hacia atras */}
        <button onClick={goBack} className='btn-exit'><i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i></button>
        {/* componente de cards */}
        <PokedexCard />
        {/* boton para ir a la ventana de configuraciones */}
        <div className='page__settings' onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
        </div>
      </div>
    </div>
  );
};

export default PokedexMainScreen;