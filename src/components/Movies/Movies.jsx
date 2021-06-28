import React from 'react'
import './Movies.css'
import HeaderPage from '../HeaderPage/HeaderPage';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreMovies from '../MoreMovies/MoreMovies'
import FooterPage from '../FooterPage/FooterPage'

const dataFilms = [
  {nameRU: 'Alex', duration: '11'},
  {nameRU: 'Bob', duration: '22'},
  {nameRU: 'Caytilin', duration: '33'},
  {nameRU: 'Duke', duration: '44'},
  {nameRU: 'Eve', duration: '55'},
  {nameRU: 'Flin', duration: '66'},
  {nameRU: 'Jay', duration: '77'},
]

export default function Movies() {
  return (
    <div className="movies">
      <HeaderPage />
      <SearchForm />
      <MoviesCardList dataFilms={dataFilms}/>
      <MoreMovies />
      <FooterPage />
    </div>
  )
}
