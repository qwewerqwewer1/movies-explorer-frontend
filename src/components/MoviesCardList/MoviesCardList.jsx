import React from 'react'
import './MoviesCardList.css'
import { useLocation } from 'react-router'

import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'



export default function MoviesCardList(props) {
  
  let location = useLocation()

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {props.preloader ? <Preloader/> : ''}

        {
        (location.pathname === '/movies' && props.dataFilms !== null) 
        ?
        props.dataFilms.map(dataFilm => {
          return (
          <MoviesCard
          dataFilm={dataFilm}
          likedAndAdded={props.likedAndAdded}
          dislikedAndDeleted={props.dislikedAndDeleted}
          switchStateCardFilm={props.switchStateCardFilm}
          key={dataFilm.id}/>)})
        :
        (location.pathname === '/saved-movies' && props.savedDataFilms !== undefined) ? 
          props.savedDataFilms.map(savedDataFilm => {
          return (
          <MoviesCard
          savedDataFilms={savedDataFilm}
          likedAndAdded={props.likedAndAdded}
          dislikedAndDeleted={props.dislikedAndDeleted}
          key={savedDataFilm.id}/>)}) : 'Вы еще ничего не добавили в избранное'

          }
      </div>  
    </section>
  )  
}