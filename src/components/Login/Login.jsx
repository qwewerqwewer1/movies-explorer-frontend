import React from 'react'
import './Login.css'
import logo from '../../images/s_logo.svg'

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__container_logo">
          <img className="login__logo" src={logo} alt="Логотип" />
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <fieldset className="login__form-fieldset">
            <p className="login__form-input-text">E-mail</p>
            <input type="email" className="login__form-input-field" required />
            <p className="login__form-input-text">Пароль</p>
            <input type="text" className="login__form-input-field" required />
            <button className="login__form-button">Зарегистрироваться</button>
          </fieldset>
        </form>
        <p className="login__question">Ещё не зарегистрированы? <a className="login__redirect" href="http://localhost:3000">Регистрация</a></p>
      </div>
    </section>
  )
}
