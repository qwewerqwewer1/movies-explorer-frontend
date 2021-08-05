import React from 'react'
import './SearchForm.css'

export default function SearchForm(props) {

  const [search, setSearch] = React.useState('');
  const [isSearchValid, setIsSearchValid] = React.useState(true);

  function handleSearchChange(e) {
    setSearch(e.target.value);
    setIsSearchValid(e.target.checkValidity())
}

function handleSubmit(e) {
  e.preventDefault()
  props.setPreloader(true)
}

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__container_input" 
          onSubmit={handleSubmit}>
          <input 
          name="search" 
          value={search || ''} 
          onChange={handleSearchChange} 
          className="search-form__input"
          
          type="text" placeholder="Фильм" required/>
          <span className={`search-form-error ${isSearchValid ? 'search-form-error_hidden' : ''}`}>
            Нужно ввести ключевое слово
          </span>
          <button type="submit" className="search-form__input_link"></button>
        </form>
      
      <div className="search-form__checkbox">
        <p className="search-form__checkbox_text">Короткометражки</p>
        <label className="search-form__switch">
          <input type="checkbox" className="search-form__checkbox_original" />
          <span className="search-form__slider"></span>
        </label>
      </div>
      </div>
    </section>
  )
}
