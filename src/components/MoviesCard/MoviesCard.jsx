import React from 'react'
import './MoviesCard.css'
import i7 from '../../images/7.jpg'



export default function MoviesCard(props) {

  const [like, setLike] = React.useState(false)
  const switchLikeClass = like ? 'movies-card__info_like_active' : '';
  
  function toggleLike() {
    setLike(!like)
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h3 className='movies-card__info_title'>{props.dataFilm.nameRU}</h3>
        <p className="movies-card__info_time">{props.dataFilm.duration}</p>
        <button type="button" 
        onClick={toggleLike}
        className={`movies-card__info_like ${switchLikeClass}`}></button>
      </div>
      <div className="movies-card__picture-container">
        <img className="movies-card__picture" src={i7} alt="обложка фильма" />
      </div>
    </div>
  )
}
