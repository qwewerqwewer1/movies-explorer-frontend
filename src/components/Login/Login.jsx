import React from 'react'
import './Login.css'
import logo from '../../images/s_logo.svg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__container_logo">
          <Link to="/">
            <img className="login__logo" src={logo} alt="Логотип" />
          </Link>
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <fieldset className="login__form-fieldset">
            <p className="login__form-input-text">E-mail</p>
            <input type="email" className="login__form-input-field" required />
            <p className="login__form-input-text">Пароль</p>
            <input type="text" className="login__form-input-field" required />
            <button className="login__form-button">Войти</button>
          </fieldset>
        </form>
        <p className="login__question">Ещё не зарегистрированы? <Link className="login__redirect" to="/signup">Регистрация</Link></p>
      </div>
    </section>
  )
}
