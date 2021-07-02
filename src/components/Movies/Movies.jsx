import React from 'react'
import './Movies.css'
import HeaderPage from '../HeaderPage/HeaderPage';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreMovies from '../MoreMovies/MoreMovies'
import FooterPage from '../FooterPage/FooterPage'

const dataFilms = [
  {nameRU: 'Alex', duration: '11', id:'0'},
  {nameRU: 'Bob', duration: '22', id:'1'},
  {nameRU: 'Caytilin', duration: '33', id:'2'},
  {nameRU: 'Duke', duration: '44', id:'3'},
  {nameRU: 'Eve', duration: '55', id:'4'},
  {nameRU: 'Flin', duration: '66', id:'5'},
  {nameRU: 'Jay', duration: '77', id:'6'},
]

export default function Movies() {
  
const loggedIn = true

//background url обычного лайка из import './Movies.css'
const dislikedAndDeleted = 'movies-card__info_like' 
// background url закрашенного лайка import './Movies.css'
const likedAndAdded = 'movies-card__info_like_active'


  return (
    <div className="movies">
      <HeaderPage loggedIn={loggedIn}/>
      <SearchForm />
      <MoviesCardList 
      dislikedAndDeleted={dislikedAndDeleted} 
      likedAndAdded={likedAndAdded} 
      dataFilms={dataFilms}/>
      <MoreMovies />
      <FooterPage />
    </div>
  )
}
