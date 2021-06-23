import React from "react";
import './Navigation.css';
import logo_acc from'../../images/acc-human.svg'


export default function Navigation(props) {
  const [isMenuShow, setIsMenuShow] = React.useState(false);

  function handleCloseMenuButtonClick() {
    setIsMenuShow(false);
  }

  function handleOpenMenuButtonClick() {
  setIsMenuShow(true);
  }

  return (
    <div className={props.loggedIn ? 'header__navigation' : 'header__navigation header__navigation_position_right'}>
      <div className={props.loggedIn ? 'header__movies-navigation' : 'header__movies-navigation no-display'}>
        <a href="/movies" className="header__link header__link_type_movies">Фильмы</a>
        <a href="/saved-movies" className="header__link header__link_type_movies">Сохранённые фильмы</a>
      </div>
      <div className="header__login-navigation">
        <a href="/signup" className={props.loggedIn ? 'header__link header__link_type_register no-display' : 'header__link header__link_type_register'}>Регистрация</a>
        {props.loggedIn ? 
        <div className="header__link_type_container">
          <a href="/profile" className="header__link header__link_type_account">Аккаунт<img className="header__link_type_account-img" src={logo_acc} alt="logo_acc" /></a>
        </div> : <a href="/signin" className="header__link header__link_type_login">Войти</a>}
      </div>
      <button className={props.loggedIn ? 'header__burger-button' : 'header__burger-button no-display'} onClick={handleOpenMenuButtonClick}></button>
      <div className={isMenuShow ? 'header__burger-menu visible' : 'header__burger-menu'}>
        <button className="header__burger-menu-close-button" onClick={handleCloseMenuButtonClick}></button>
        <div className={isMenuShow ? 'header__burger-menu-container visible' : 'header__burger-menu-container'}>
          <div className="header__burger-menu-links">
            <a href="/" className="header__burger-menu-link">Главная</a>
            <a href="/movies" className="header__burger-menu-link">Фильмы</a>
            <a href="/saved-movies" className="header__burger-menu-link">Сохранённые фильмы</a>
          </div>
            <a href="/profile" className="header__burger-menu-link header__burger-menu-link_type_account"><p className="header__burger-menu-link_type_account-paragraph">Аккаунт</p><img className="header__link_type_account-img" src={logo_acc} alt="logo_acc" /></a>
        </div>
      </div>
    </div>
  ) 
}