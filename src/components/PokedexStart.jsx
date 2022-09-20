import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assets/css/PokedexStart.css'


const PokedexStart = () => {

  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()

  const submit = (form) => {
    navigate(`/home/${form.name}`)
  } 
  const settings = () => {
    navigate("/settings")
  }
  return (
    <div className='container__page'>
      <div className='page__content-image'>
        <h1 className='page__tittle'>Hello trainer!</h1>
        <img src="https://i.ibb.co/tLTH5Rw/Ash-and-Greninja-POKEMON-XYZ-by-Alexalan-on-Deviant-Art.png" alt="" />
      </div>
      <form onSubmit={handleSubmit(submit)} className='page__form'>
        <h2 className='page__form--tittle'>Give me your name to start</h2>
        <input 
          type="text" 
          id="name"
          placeholder='Your name'
          className='page__form--input'
          {...register("name")}
          
        />
        <button className='btn-submit'><i className="fa-brands fa-telegram"></i></button>
        <div className='page__settings' onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
        </div>
      </form>
      

    </div>
  );
};

export default PokedexStart;