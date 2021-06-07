import React from 'react'
import './SearchForm.css'


export default function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
      <div className="search-form__container_input">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <a href="http://localhost:3000" className="search-form__input_link"> </a>
      </div>
      <div className="search-form__checkbox">
        <p className="search-form__checkbox_text">Короткометражки</p>
        <label className="search-form__switch">
          <input type="checkbox" className="search-form__checkbox_original"/>
          <span className="search-form__slider"></span>
        </label>
      </div>
      </div>
    </section>
  )
}
