import React from 'react'
import './Register.css'
import logo from '../../images/s_logo.svg'

export default function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__container_logo">
          <img className="register__logo" src={logo} alt="Логотип" />
        </div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <fieldset className="register__form-fieldset">
            <p className="register__form-input-text">Имя</p>
            <input type="text" className="register__form-input-field" required />
            <p className="register__form-input-text">E-mail</p>
            <input type="email" className="register__form-input-field" required />
            <p className="register__form-input-text">Пароль</p>
            <input type="text" className="register__form-input-field" required />
            <button className="register__form-button">Войти</button>
          </fieldset>
        </form>
        <p className="register__question">Уже зарегистрированы? <a className="register__redirect" href="http://localhost:3000">Войти</a></p>
      </div>
    </section>
  )
}
