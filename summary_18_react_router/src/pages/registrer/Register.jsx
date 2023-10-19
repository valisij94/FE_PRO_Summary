import React , { useState } from "react";
import Button from "../../components/button/Button.jsx";
import Input from '../../components/input/Input.jsx';
import classes from './Register.module.css'
import { UsersApi } from "../../appData/usersApi.js";
import { useNavigate } from "react-router-dom";

function Register() {
  //

  const [formState, setFormState] = useState( {
    login: '',
    pwd: '',
    name: '',
    email: ''
  } );

  const navigate = useNavigate();

  return (
    <div className={classes.registerContainer}>
      <h3 className="homeHeader">Welcome to the Best Social Network!</h3>
      <h6>Please provide your personal data</h6>
      <div className={classes.registerForm}>

        <Input
          type="text"
          value={formState.login}
          onChange={
            (event) => {
              setFormState( { ...formState, login: event.target.value } )
            }
          }
        />
        <Input
          type="text"
          value={formState.name}
          onChange={
            (event) => {
              setFormState( { ...formState, name: event.target.value } )
            }
          }/>
        <Input
          type="password"
          value={formState.pwd}
          onChange={
            (event) => {
              setFormState( { ...formState, pwd: event.target.value } )
            }
          }
        />
        <Input
          type="email"
          value={formState.email}
          onChange={
            (event) => {
              setFormState( { ...formState, email: event.target.value } )
            }
          }
        />
        <Button text="Register" onClick={ () => {
          UsersApi.addUser(formState.login, formState.pwd, formState.name, formState.email)
            .then( (res) => {
              navigate('/');
            })
        }}/>
      </div>
    </div>
  );
}

export default Register;