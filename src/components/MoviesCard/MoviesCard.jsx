import React from 'react'
import './MoviesCard.css'
import i7 from '../../images/7.jpg'

import { useLocation } from 'react-router-dom'



export default function MoviesCard(props) {

  let location = useLocation();

  const [isLikedAndAdd, setIsLikedAndAdd] = React.useState(false)
  
  function switchStateCardFilm() {
    setIsLikedAndAdd(!isLikedAndAdd)
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
        <img className="movies-card__picture" src={i7} alt="обложка фильма" />
      </div>
    </div>
  )
}