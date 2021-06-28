import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        { props.dataFilms.map( film => {return <MoviesCard film={film} key={film.id}/>} ) }
      </div>  
      
    </section>
  )  
}