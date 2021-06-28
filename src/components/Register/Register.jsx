import React from 'react'
import './Register.css'
import logo from '../../images/s_logo.svg'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <div className="register__container_logo">
            <img className="login__logo" src={logo} alt="Логотип" />
          </div>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <fieldset className="register__form-fieldset">
            <p className="register__form-input-text">Имя</p>
            <input type="text" className="register__form-input-field" required />
            <p className="register__form-input-text">E-mail</p>
            <input type="email" className="register__form-input-field" required />
            <p className="register__form-input-text">Пароль</p>
            <input type="text" className="register__form-input-field" required />
            <button className="register__form-button">Зарегестрироваться</button>
          </fieldset>
        </form>
        <p className="register__question">Уже зарегистрированы? <Link className="register__redirect" to="/signin">Войти</Link></p>
      </div>
    </section>
  )
}
