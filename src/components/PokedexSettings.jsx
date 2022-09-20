import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../assets/css/PokedexSettings.css'

const PokedexSettings = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const exitSettings = () => {
    navigate(-1)
  }
  const submit = () =>{
    
  }
  return (
    <div className='PokedexSettings'>
      <div className='settings__container'>
        <button onClick={exitSettings} className="settings__exit"><i class="fa-solid fa-arrow-left"></i></button>
        <h1 className='settings__tittle'>Settings</h1>
        <div>
          <h3>Theme</h3>
        </div>
        <div>
          <h3>Items per page</h3>
          <form onSubmit={handleSubmit(submit)}>
            <select name="" id="">
              <option value="">4 items</option>
              <option value="">8 items</option>
              <option value="">12 items</option>
              <option value="">16 items</option>
              <option value="">20 items</option>
            </select>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default PokedexSettings;