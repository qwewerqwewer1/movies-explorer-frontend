import React from 'react'
import './AboutMe.css'
import Portfolio from '../Portfolio/Portfolio'
import photo from '../../images/me_two.jpg'


export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <p className="about-me__info_name">Дмитрий</p>
          <p className="about-me__info_profession">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__info_activity">
          Я родился в г. Южно-Сахалинск, проживал в Крыму и переехал в г. Краснодар. Учился на 
          юриста в Академии Ген. Прокуратуры РФ, но на 3 курсе по ряду причин ушел работать 
          в IT. В 2018 г. призвался на службу в ФС ВНГ РФ. Я люблю слушать музыку, 
          а ещё увлекаюсь её написанием. С 2019 года начал обучаться в 
          «Яндекс Практикуме» во время службы, очень сильно увлекся и решил продолжить обучение 
          на платной основе. После прохождения курса по веб-разработке, хочу обучаться
          еще более углубленно на реальных заказах будущими коллегами.</p>
          <div className="about-me__info_links">
            <a className="about-me__info_link" href="http://localhost:3000">VK</a>
            <a className="about-me__info_link" href="http://localhost:3000">Github</a>
          </div>
        </div>
        <img className="about-me__photo" src={photo} alt="Фото разработчика сайта"></img>
      </div>
      <Portfolio />
    </section>
  )
}