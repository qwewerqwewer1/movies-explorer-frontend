import React from 'react'
import './Portfolio.css'
import portfolio__arrow from '../../images/portfolio__arrow.svg'


export default function Portfolio() {
  return (
    <>
      <p className="about-me__portfolio">Портфолио</p>
      <div className="about-me__portfolio_links">
        <a href="http://localhost:3000" className="about-me__portfolio_link">Статичный сайт
          <img className="about-me__portfolio_link_arrow" src={portfolio__arrow} alt="стрелка-ссылка"/>
        </a>
        <a href="http://localhost:3000" className="about-me__portfolio_link">Адаптивный сайт
          <img className="about-me__portfolio_link_arrow" src={portfolio__arrow} alt="стрелка-ссылка"/>
        </a>
        <a href="http://localhost:3000" className="about-me__portfolio_link none-underline">Одностраничное приложение
          <img className="about-me__portfolio_link_arrow" src={portfolio__arrow} alt="стрелка-ссылка"/>
        </a>
      </div>
    </>
  )
}
