import React from 'react'
import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import HeaderPage from '../HeaderPage/HeaderPage'
import FooterPage from '../FooterPage/FooterPage'
import SearchForm from '../SearchForm/SearchForm'

const dataFilms = [
  {nameRU: 'Alex', duration: 11, id:1},
  {nameRU: 'Bob', duration: 22, id:2},
]

export default function SavedMovies() {

  const loggedIn = true 
  //тут background url крестика из savedMovies.css на 2 строке
 

  return (
    <section className="saved-movies">
      <HeaderPage loggedIn={loggedIn}/>
      <SearchForm/>
      <MoviesCardList 
      dataFilms={dataFilms} />
      <FooterPage/>
    </section>
  )
}
