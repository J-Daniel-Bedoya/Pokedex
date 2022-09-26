import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nameSucces } from '../../store/slices/userName.slice';
import '../../assets/css/PokedexStart.css'


const PokedexStart = () => {

  const {register, handleSubmit, reset} = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  // funcion para agregar la información del formulario 
  const submit = () => {
    dispatch(nameSucces(userName))
    navigate('/pokedex')
  } 
  const colorChange = useSelector(state => state.colorChange)
  // funcion para abrir la ventana de configuraciones
  const settings = () => {
    navigate("/settings")
  }
  return (

    <div className={
      `container__page ${colorChange ? "change-color" : ""}`
      }>
      <div className='page__content-image'>
        {/* header */}
        <h1 className='page__tittle'>Hello trainer!</h1>
        <img src="https://i.ibb.co/tLTH5Rw/Ash-and-Greninja-POKEMON-XYZ-by-Alexalan-on-Deviant-Art.png" alt="" />
      </div>
      {/* formulario para preguntar sobre el nombre */}
      <div className='page__form'>
        <h2 className='page__form--tittle'>Give me your name to start</h2>
        <input 
          type="text" 
          id="name"
          autoComplete='Off'
          placeholder='Your name'
          className='page__form--input'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          
        />
        {/* boton de configuraciones */}
        <button className='btn-submit' onClick={submit}><i className="fa-brands fa-telegram"></i></button>
        <div className='page__settings' onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
        </div>
      </div>
      

    </div>
  );
};

export default PokedexStart;