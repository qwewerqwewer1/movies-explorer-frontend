import React from 'react'
import './MoviesCard.css'
// import filmPic from '../../images/1.jpg'

export default function MoviesCard(props) {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h3 className='movies-card__info_title'>{props.film.nameRU}</h3>
        <p className="movies-card__info_time">{props.film.duration}</p>
        <button type="button" className="movies-card__info_like"></button>
      </div>
      <div className="movies-card__picture">
        <img src={props.film.image} alt="обложка фильма" />
      </div>
    </div>
  )
}
