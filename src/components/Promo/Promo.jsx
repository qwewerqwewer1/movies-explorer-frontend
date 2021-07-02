import React from 'react'
import './Promo.css'
import promo_logo from '../../images/promo_logo.svg'
// Учебный проект студента факультета Веб-разработки
export default function Promo() {
  return (
    <section className="promo">
      <img className="promo__image" src={promo_logo} alt="Background promo logo" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  )
}
