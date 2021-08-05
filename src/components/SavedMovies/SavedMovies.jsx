import React from 'react'
import './SavedMovies.css'

import HeaderPage from '../HeaderPage/HeaderPage';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import FooterPage from '../FooterPage/FooterPage'
import Searchform from '../SearchForm/SearchForm'
import { getSavedMovie } from '../../utils/MainApi';


export default function SavedMovies(props) {

  const [dataFilms, setDataFilms] = React.useState([])

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    getSavedMovie(token)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`)
      }})
    .then(res => setDataFilms(res))
    .catch(err => console.log(err))
  })
  
  return (
    <>
      <HeaderPage loggedIn={props.loggedIn} />
        <section className="saved-movies">
          <Searchform/>
          <MoviesCardList dataFilms={dataFilms}/>
        </section>
      <FooterPage />
    </>
  )
}
