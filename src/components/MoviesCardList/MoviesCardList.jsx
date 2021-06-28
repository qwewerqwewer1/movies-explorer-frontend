import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

// const dataFilms = fetch('https://api.nomoreparties.co/beatfilm-movies')
//   .then((response) => { return response.json()})
//   .then(data => console.log(data));

export default function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        { props.dataFilms.map( film => {return <MoviesCard film={film} key={film.toString()}/>} ) }
      </div>  
      
    </section>
  )  
}