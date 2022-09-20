import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../assets/css/PokedexMainScreen.css'
import PokedexCard from './PokedexCard';

const PokedexMainScreen = () => {
  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  const {name} = useParams()

  const goBack = () => {
    navigate("/")
  }
  const submit = (form) => {

  }
  const settings = () => {
    navigate("/settings")
  }
  return (
    <div className='PokedexMainScreen'>
      <div className='main-screen'>
        <h1 className='main-screen__tittle'>Pokedex</h1>
        <p className='main-screen__text'>Welcome {name}, here you can find your favorite pokemon</p>

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
        <button onClick={goBack} className='btn-exit'><i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i></button>
        <PokedexCard />
        <div className='page__settings' onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
        </div>
      </div>
    </div>
  );
};

export default PokedexMainScreen;