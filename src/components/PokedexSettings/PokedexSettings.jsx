import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { color } from '../../store/slices/Color.slice'; 
import { postPerPage } from '../../store/slices/postPerPage.slice';
import '../../assets/css/PokedexSettings.css'

const PokedexSettings = () => {
  const navigate = useNavigate()

  const colorChange = useSelector(state => state.colorChange)
  const dispatch = useDispatch()
  const submit = (form) =>{
    dispatch(postPerPage(form))
  }
  // funcion para ir hacia atra en las paginas
  const settings = () => {
    navigate(-1)
  }

  return (
    // contenido general de la ventana de configuraciones
    <div className={`PokedexSettings ${colorChange ? "change-color" : ""}`}>
      <div className='settings__container'>
        <h1 className='settings__tittle'>Settings</h1>
        {/* conguración del color de la página */}
        <div className='settings__theme'>
          <p className='theme__tittle'>Theme</p>
          <div className='theme__cotainer'>
            <div className='theme__light-dark'>
              <h4 className='theme__light'>Light</h4>
              <input id="cheked" type="checkbox" />
              <label onClick={() => dispatch(color())} htmlFor="cheked" id='circle'><div></div></label>
              <h4 className='theme__dark'>Dark</h4>
            </div>
          </div>
        </div>
        {/* configuración de todas las car que se pueden mostrar en la página */}
        <div className={`items-page `}>
          <p className='items-page__tittle'>Items per page</p>
          <form onSubmit={submit} className="items-page__form">
            <select name="" id="" className={`items-page__select`} onChange={e => submit(e.target.value)}>
              <option value="">Selecionar tamaño</option>
              <option value="4">4 items</option>
              <option value="8">8 items</option>
              <option value="12">12 items</option>
              <option value="16">16 items</option>
              <option value="20">20 items</option>
            </select>
          </form>
        </div>
      </div>
      {/* boton para ir a la ventana de cofiguraciones */}
      <div className='page__settings' onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
      </div>
    </div>
  );
};

export default PokedexSettings;