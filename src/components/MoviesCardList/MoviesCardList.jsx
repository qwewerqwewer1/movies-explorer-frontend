import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import MoreMovies from '../MoreMovies/MoreMovies'

const dataFilms = [
  {nameRU: 'Alex', duration: '11'},
  {nameRU: 'Bob', duration: '22'},
  {nameRU: 'Caytilin', duration: '33'},
  {nameRU: 'Duke', duration: '44'},
  {nameRU: 'Eve', duration: '55'},
  {nameRU: 'Flin', duration: '66'},
  {nameRU: 'Jay', duration: '77'},
]

// const dataFilms = fetch('https://api.nomoreparties.co/beatfilm-movies')
//   .then((response) => { return response.json()})
//   .then(data => console.log(data));

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        { dataFilms.map( film => {return <MoviesCard film={film} key={film.toString()}/>} ) }
      </div>
      <MoreMovies/>
    </section>
  )  
}