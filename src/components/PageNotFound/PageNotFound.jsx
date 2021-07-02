import React from 'react'
import './PageNotFound.css'

import { useHistory } from 'react-router-dom'

export default function PageNotFound() {

  const history = useHistory()

  function handleBackLink () {
    history.goBack()
  }

  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <p className="page-not-found__error">404</p>
        <p className="page-not-found__text">Cтраница не найдена :(</p>
        <p className="page-not-found__back"><a className="page-not-found__anchor" onClick={handleBackLink} href>Назад</a></p>
      </div>
    </section>
  )
}

