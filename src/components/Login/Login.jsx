import React from 'react'
import './Login.css'
import logo from '../../images/s_logo.svg'
import { Link } from 'react-router-dom'
import { useFormWithValidation } from '../../hooks/useForm'

export default function Login(props) {

  const {values, handleChange, errors, isValid} = useFormWithValidation();

  function handleLogin(e) {
    e.preventDefault();
    props.handleLogin(values.password, values.email);
    props.clearAllErrorMessages();
} 
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__container_logo">
          <Link to="/">
            <img className="login__logo" src={logo} alt="Логотип" />
          </Link>
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleLogin}>
          <fieldset className="login__form-fieldset">
            
            <p className="login__form-input-text">E-mail</p>
            <input 
              type="email" 
              className="login__form-input-field" 
              name="email" 
              value={values.email || ''} 
              onChange={handleChange}  
              required />
            <span className="login__error auth__error">{errors.email}</span>

            <p className="login__form-input-text">Пароль</p>
            <input 
              type="text" 
              className="login__form-input-field" 
              name="password"
              value={values.password || ''} 
              onChange={handleChange}
              minLength="8" required />
            <span className="login__error auth__error">{errors.password}</span>
            <button disabled={!isValid} type='submit' className={`${isValid ? "login__form-button" : "login__form-button-invalid"}`}>Войти</button>
            <span className="login__submit-error">{props.loginErrorMessage}</span>
          </fieldset>
        </form>
        <p className="login__question">Ещё не зарегистрированы? <Link className="login__redirect" to="/signup">Регистрация</Link></p>
      </div>
    </section>
  )
}
