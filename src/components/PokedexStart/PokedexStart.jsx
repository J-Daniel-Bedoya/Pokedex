import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { storageDate } from "../../store/slices/colorPerPage.slice";
import { useDispatch } from "react-redux";
import { setNameActual } from "../../store/slices/nameActual.slice";
import "../../assets/css/PokedexStart.css";

const PokedexStart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const nameActualS = useSelector(state => state.nameActual)
  // const [nameActual, setNameActual] = useState(false) 

  // funcion para agregar la información del formulario
  useEffect(() => {
    if (nameActualS){
      navigate("/")
    }else{
      if (localStorage.getItem("name")) {
        navigate("/pokedex")
      }
    }
    
  }, [])
  const submit = () => {
    localStorage.setItem("name", userName);
    navigate("/pokedex");
    dispatch(setNameActual(false))
  };

  const storage = useSelector((state) => state.storageColor);
  // funcion para abrir la ventana de configuraciones
  const settings = () => {
    navigate("/settings");
  };

  let n = localStorage.getItem("color");
  useEffect(() => {
    dispatch(storageDate(n));
  }, [n]);

  return (
    <div className={`container__page ${storage}`}>
      <div className="page__content-image">
        {/* header */}
        <h1 className="page__tittle">Hello trainer!</h1>
        <img
          src="https://i.ibb.co/tLTH5Rw/Ash-and-Greninja-POKEMON-XYZ-by-Alexalan-on-Deviant-Art.png"
          alt=""
        />
      </div>
      {/* formulario para preguntar sobre el nombre */}
      <div className="page__form">
        <h2 className="page__form--tittle">Give me your name to start</h2>
        <input
          type="text"
          id="name"
          autoComplete="Off"
          placeholder="Your name"
          className="page__form--input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* boton de configuraciones */}
        <button className="btn-submit" onClick={submit}>
          <i className="fa-brands fa-telegram"></i>
        </button>
        <div className="page__settings" onClick={settings}>
          <i className="fa-solid fa-gear page__settings--icon"></i>
        </div>
      </div>
    </div>
  );
};

export default PokedexStart;
