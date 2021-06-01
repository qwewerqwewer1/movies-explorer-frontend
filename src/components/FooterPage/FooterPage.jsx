import React from 'react'
import './FooterPage.css'

export default function FooterPage() {
  return (
    <section className="footer-page">
      <p className="footer-page__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer-page__container">
        <p className="footer-page__container_mark">&copy; 2021</p>
        <div className="footer-page__container_links">
          <a className="footer-page__container_link" href="http://localhost:3000">Яндекс.Практикум</a>
          <a className="footer-page__container_link" href="http://localhost:3000">Github</a>
          <a className="footer-page__container_link" href="http://localhost:3000">VK</a>
        </div>
      </div>
    </section>
  )
}
