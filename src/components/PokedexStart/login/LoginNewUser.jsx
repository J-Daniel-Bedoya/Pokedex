import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { storageDate } from "../../../store/slices/colorStorageDate.slice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setNameActual } from "../../../store/slices/nameActual.slice";
import { Button, Form } from "react-bootstrap";
import "../../../assets/css/loginFormsStyles/LoginNewUser.css";

const LoginNewUser = ({setIsVisibelFormRegister}) => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const nameActualS = useSelector((state) => state.nameActual);
  useEffect(() => {
    if (nameActualS) {
      navigate("/");
    } else {
      if (localStorage.getItem("name")) {
        navigate("/pokedex");
      }
    }
  }, []);
  // funcion para agregar la información del formulario
  const submit = (form) => {
    localStorage.setItem("name", form.name);
    if (form.create_password === form.repeat_password) {
      localStorage.setItem("password", form.repeat_password)
      navigate("/pokedex");
      dispatch(setNameActual(false));
    }else{
      alert("Las contraseñas no coinciden")
    }
  };



  return (
    <div className="form">
      <div className="form__container">
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" {...register("name")}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("create_password")}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("repeat_password")}/>
          </Form.Group>
          <Form.Group className="form__btns">
            <Button className="form__btn--submit" variant="primary" type="submit">
              Submit
            </Button>
            <Button 
              className="form__btn--cancel" 
              onClick={() => setIsVisibelFormRegister(false)} 
              variant="primary" 
            >Cancel
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default LoginNewUser;
