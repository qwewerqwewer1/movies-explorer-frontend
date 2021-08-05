import React from 'react'
import './MoviesCard.css'
import {saveMovie, deleteMovie} from '../../utils/MainApi'

import { useLocation } from 'react-router-dom'

export default function MoviesCard(props) {

  let location = useLocation();

  const [isLikedAndAdd, setIsLikedAndAdd] = React.useState(false)
  // const [isSaved, setIsSaved] = React.useState(false);


  function switchStateCardFilm() {
    setIsLikedAndAdd(!isLikedAndAdd)
    !isLikedAndAdd ? saveMovie(props.movie) : deleteMovie()
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h3 className='movies-card__info_title'>{props.dataFilm.nameRU}</h3>
        <p className="movies-card__info_time">{props.dataFilm.duration}</p>
        <button type="button"
        
        onClick={switchStateCardFilm}
        className={location.pathname === '/saved-movies' && !isLikedAndAdd ? 'movies-card__info_like_delete' : 
        location.pathname === '/saved-movies' && isLikedAndAdd ? 'movies-card__info_like' :
        isLikedAndAdd ? 'movies-card__info_like_active' : 'movies-card__info_like'}></button>
      </div>
      <div className="movies-card__picture-container">
        <img 
        className="movies-card__picture-container movies-card__picture" 
        src={`https://api.nomoreparties.co${props.dataFilm.image.url}`} 
        alt="обложка фильма" />
      </div>
    </div>
  )
}