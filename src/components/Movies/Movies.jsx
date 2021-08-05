import React from 'react'
import './Movies.css'

import HeaderPage from '../HeaderPage/HeaderPage';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreMovies from '../MoreMovies/MoreMovies'
import FooterPage from '../FooterPage/FooterPage'

export default function Movies(props) {
  
  return (
    <>
    <HeaderPage loggedIn={props.loggedIn} />
      <div className="movies">
        <SearchForm setPreloader={props.setPreloader} handleSubmit={props.handleSubmit} />
        <MoviesCardList switchStateCardFilm={props.switchStateCardFilm} preloader={props.preloader} dataFilms={props.dataFilms}/>
        <MoreMovies />
      </div>
    <FooterPage />
    </>
  )
}
