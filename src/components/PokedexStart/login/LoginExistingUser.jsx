import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/loginFormsStyles/LoginExistingUser.css";

const LoginExistingUser = ({ setIsVisibelFormLoginUp }) => {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const submit = (form) => {
    localStorage.setItem("name", form.name_loginUp);
    const localeSotoragePassword = localStorage.getItem("password")
    if (form.password_loginUp === localeSotoragePassword) {
      localStorage.setItem("password", form.password_loginUp)
      console.log(form)
      navigate("/pokedex");
      dispatch(setNameActual(false));
    }else{
      alert("Contraseña incorrecta")
    }
  }

  return (
    <div className="forms">
      <h1>Hol</h1>
      <div className="forms__container">
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Name" {...register("name_loginUp")} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password_loginUp")}/>
          </Form.Group>

          <Form.Group className="forms__btns">
            <Button className="forms__btn--submit" variant="primary" type="submit">
              Submit
            </Button>
            <Button 
              className="forms__btn--cancel" 
              onClick={() => setIsVisibelFormLoginUp(false)} 
              variant="primary" 
              // type="button"
            >Cancel
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default LoginExistingUser;
