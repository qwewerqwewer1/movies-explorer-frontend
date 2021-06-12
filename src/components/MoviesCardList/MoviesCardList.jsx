import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import MoreMovies from '../MoreMovies/MoreMovies'

import i1 from '../../images/1.jpg'
import i2 from '../../images/2.jpg'
import i3 from '../../images/3.jpg'
const dataFilms = [{nameRU: 'John', duration: '60', image: {i1}}, {nameRU: 'alex', duration: '10', image: {i2}}, {nameRU: 'Gven', duration: '40', image: {i3}}, {nameRU: 'John', duration: '60', image: {i1}}, {nameRU: 'John', duration: '60', image: {i1}}, {nameRU: 'John', duration: '60', image: {i1}}, {nameRU: 'John', duration: '60', image: {i1}}]

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