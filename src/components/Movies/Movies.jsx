import React from 'react'
import './Movies.css'
import HeaderPage from '../HeaderPage/HeaderPage';
import SearchForm from '../SearchForm/SearchForm'
import MoviesList from '../MoviesCardList/MoviesCardList'
import FooterPage from '../FooterPage/FooterPage'

export default function Movies() {
  return (
    <div className="movies">
      <HeaderPage />
      <SearchForm />
      <MoviesList />
      <FooterPage />
    </div>
  )
}
