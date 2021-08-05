import React from 'react'
import './Profile.css'

import HeaderPage from '../HeaderPage/HeaderPage';
import FooterPage from '../FooterPage/FooterPage'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';

export default function Profile(props) {

  const {values, setValues, handleChange, errors, isValid} = useFormWithValidation();
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues(currentUser);
}, [currentUser, setValues]);

function handleEditProfileClick(e) {
  e.preventDefault();
  setIsFormDisabled(false);
}

function handleSubmit(e) {
  e.preventDefault();
  props.handleEditUserInfo(values.name, values.email);
}

React.useEffect(() => {
  setIsFormDisabled(props.isUpdateSuccess);
},[props.isUpdateSuccess, props.handleEditUserInfo])

React.useEffect(() => {
  if(props.isSaving) {
    setIsFormDisabled(true)
  }
}, [props.isSaving])

  return (
    <>
    <HeaderPage loggedIn={props.loggedIn} />
      <section className='profile'>
        <div className="profile__container">
          <h2 className="profile__container_greetings">Привет, {props.currentUser.name}!</h2>
          <form className="profile__container_enter" onSubmit={handleSubmit}>
            <div className="profile__container_enter">
              <div className="profile__container_enter_name">
                <p className="profile__container_enter_text">Имя</p>
                <input 
                  type="text"
                  name="name"
                  pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                  className="profile__container_enter_input" 
                  value={values.name || ''}
                  onChange={handleChange}
                  disabled={isFormDisabled}
                  required
                  maxLength="30" 
                  dir="rtl" 
                  placeholder="Your Name" />
              </div>
              <span className="auth__error">{errors.name}</span>
              <div className="profile__container_enter_email">
                <p className="profile__container_enter_text">E-mail</p>
                <input
                  type="email" 
                  name="email"
                  className="profile__container_enter_input"
                  value={values.email || ''}
                  onChange={handleChange}
                  disabled={isFormDisabled}
                  required 
                  maxLength="30" 
                  dir="rtl" 
                  placeholder="example@email.com"/>
              </div>
              <span className="auth__error">{errors.email}</span>
              <span className={`profile__form-message ${props.isUpdateSuccess ? 'profile__form-message_type_success' : 'profile__form-message_type_error'}`}>
                {props.message}</span>
              </div>
              {isFormDisabled ? 
              <button 
                className="profile__container_enter_button profile__button_type_edit" 
                onClick={handleEditProfileClick}>Редактировать
              </button> 
              :
              <button 
                type="submit" 
                disabled={props.currentUser.name === values.name || !isValid} 
                className={`profile__container_enter_button profile__button_type_save`}>Сохранить
              </button>}
          </form>
          <button onClick={props.handleLogout}className="profile__container_button">Выйти из аккаунта</button>
        </div>
      </section>
    <FooterPage />
    </>
  )
}
