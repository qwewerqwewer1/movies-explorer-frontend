import React from 'react'
import './Profile.css'
import HeaderPage from '../HeaderPage/HeaderPage'

export default function Profile(props) {
  return (
    <>
    <HeaderPage/>
    <section className='profile'>
      <div className="profile__container">
        <h2 className="profile__container_greetings">Привет, {props.user}!</h2>
        <form className="profile__container_enter">
          <div className="profile__container_enter_name">
            <p className="profile__container_enter_text">Имя</p>
            <input maxLength="30" className="profile__container_enter_input" dir="rtl" type="text" placeholder="Your Name"/>
          </div>
          <div className="profile__container_enter_email">
            <p className="profile__container_enter_text">E-mail</p>
            <input maxLength="30" className="profile__container_enter_input" dir="rtl" type="email" placeholder="example@email.com"/>
          </div>
          <button className="profile__container_enter_button">Редактировать</button>
        </form>
        <button className="profile__container_button">Выйти из аккаунта</button>
      </div>
    </section>
    </>
  )
}
