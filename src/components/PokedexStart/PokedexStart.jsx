import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { storageDate } from "../../store/slices/colorStorageDate.slice";
import { useDispatch } from "react-redux";
import LoginNewUser from "./login/LoginNewUser";
import Login from "./login/Login";

const PokedexStart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storage = useSelector((state) => state.storageColor);
  const [isVisibelFormRegister, setIsVisibelFormRegister] = useState(false);
  const [isVisibelFormLoginUp, setIsVisibelFormLoginUp] = useState(false);
  // funcion para abrir la ventana de configuraciones
  const settings = () => {
    navigate("/settings");
  };

  let n = localStorage.getItem("color");
  useEffect(() => {
    dispatch(storageDate(n));
  }, [n]);

  return (
    <div className={storage}>
      <div className={`container__page`}>
        <div className="page__content-image">
          {/* header */}
          <h1 className="page__tittle">Hello trainer!</h1>
          <img
            src="https://i.ibb.co/tLTH5Rw/Ash-and-Greninja-POKEMON-XYZ-by-Alexalan-on-Deviant-Art.png"
            alt="ab"
          />
        </div>
        {/* formulario para preguntar sobre el nombre */}
        <div className="page__form">
          <h2 className="page__form--tittle">Give me your name to start</h2>

          <button
            className="page__form--change-register"
            onClick={() => setIsVisibelFormRegister(!isVisibelFormRegister)}
          >
            Register
          </button>
          {isVisibelFormRegister && (
            <LoginNewUser setIsVisibelFormRegister={setIsVisibelFormRegister} />
          )}
          <button
            className="page__form--change-loginUp"
            onClick={() => setIsVisibelFormLoginUp(!isVisibelFormLoginUp)}
          >
            LoginUp
          </button>
          {isVisibelFormLoginUp && (
            <Login setIsVisibelFormLoginUp={setIsVisibelFormLoginUp} />
          )}
          <div className="page__settings" onClick={settings}>
            <i className="fa-solid fa-gear page__settings--icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexStart;
