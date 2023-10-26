import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import classes from './Home.module.css'

function Home() {

  return (
    <div className={classes.homeContainer}>
      <h2 className="homeHeader">The Best Social Network</h2>
      {/** Здесь нужно взять из контекста данные пользователя. Если у пользователя статус - active, то вывести
       * текст "Привет, _username_!". А если нет - то вывести "Добро пожаловать!"
       */}
      <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid et illum minima quibusdam natus dolore quas minus velit, vitae officiis voluptatem veniam reprehenderit, aut cumque doloribus debitis praesentium laborum.</h6>
      <div className={classes.headerButtonsContainer}>
        <Button text="Log In" />
        <Button text="Sign Up" />
      </div>
    </div>
  );
}

export default Home;