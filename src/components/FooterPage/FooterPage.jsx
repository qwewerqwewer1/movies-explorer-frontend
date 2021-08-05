import React from 'react'
import './FooterPage.css'

export default function FooterPage(props) {
  return (
    <section className="footer-page">
      <p className="footer-page__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer-page__container">
        <p className="footer-page__container_mark">&copy; 2021</p>
        <div className="footer-page__container_links">
          <a className="footer-page__container_link" target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer-page__container_link" target="_blank" rel="noreferrer" href="https://github.com/qwewerqwewer1">Github</a>
          <a className="footer-page__container_link" target="_blank" rel="noreferrer" href="https://vk.com/qwewerqwewer">VK</a>
        </div>
      </div>
    </section>
  )
}
