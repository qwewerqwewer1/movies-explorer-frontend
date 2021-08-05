import React from 'react'
import './Register.css'
import logo from '../../images/s_logo.svg'
import { Link } from 'react-router-dom'
import { useFormWithValidation } from '../../hooks/useForm'

export default function Register(props) {

  const {values, handleChange, errors, isValid} = useFormWithValidation();

  function handleRegister(e) {
    e.preventDefault();
    props.handleRegister(values.name, values.password, values.email);
    props.clearAllErrorMessages();
}

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <div className="register__container_logo">
            <img className="login__logo" src={logo} alt="Логотип" />
          </div>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleRegister}>
          <fieldset className="register__form-fieldset">

            <p className="register__form-input-text">Имя</p>
            <input 
              minLength='4'
              type="text" 
              className="register__form-input-field" 
              name="name" 
              pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
              value={values.name || ''} onChange={handleChange}
              required />
            <span className="register__error auth__error">{errors.name}</span>

            <p className="register__form-input-text">E-mail</p>
            <input 
              type="email" 
              className="register__form-input-field" 
              name="email" 
              value={values.email || ''} 
              onChange={handleChange} 
              required />
            <span className="register__error auth__error">{errors.email}</span>

            <p className="register__form-input-text">Пароль</p>
            <input 
              type="password" 
              className="register__form-input-field" 
              name="password"
              value={values.password || ''} 
              onChange={handleChange}
              minLength="8"
              required />
            <span className="register__error auth__error">{errors.password}</span>

            <button disabled={!isValid} type="submit" className={`${isValid ? 'register__form-button' : 'register__form-button-invalid'}`}>Зарегестрироваться</button>
            <span className="register__submit-error">{props.registerErrorMessage}</span>
          </fieldset>
        </form>
        <p className="register__question">Уже зарегистрированы? <Link className="register__redirect" to="/signin">Войти</Link></p>
      </div>
    </section>
  )
}
