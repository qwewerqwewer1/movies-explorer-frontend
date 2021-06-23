import React from 'react'
import './PageNotFound.css'

export default function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <p className="page-not-found__error">404</p>
        <p className="page-not-found__text">Cтраница не найдена :(</p>
        <p className="page-not-found__back"><a className="page-not-found__anchor" href="http://localhost:3000">Назад</a></p>
      </div>
    </section>
  )
}

