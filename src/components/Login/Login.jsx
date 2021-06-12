import React from 'react'
import './Login.css'
import logo from '../../images/s_logo.svg'

export default function Login() {
  return (
    <section className="login">
      <div className="register__container">
        <div className="register__container_logo">
          <img className="register__logo" src={logo} alt="Логотип" />
        </div>
        <h2 className="register__title">Рады видеть!</h2>
        <form className="register__form">
          <fieldset className="register__form-fieldset">
            <p className="register__form-input-text">E-mail</p>
            <input type="email" className="register__form-input-field" required />
            <p className="register__form-input-text">Пароль</p>
            <input type="text" className="register__form-input-field" required />
            <button className="register__form-button">Зарегистрироваться</button>
          </fieldset>
        </form>
        <p className="register__question">Ещё не зарегистрированы? <a className="register__redirect" href="http://localhost:3000">Регистрация</a></p>
      </div>
    </section>
  )
}
