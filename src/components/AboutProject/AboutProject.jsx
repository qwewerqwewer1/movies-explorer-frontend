import React from 'react'
import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <div className='project__containers'>
        <div className='project__container-info'>
          <h3 className='project__container-info_title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__container-info_paragpraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__container-info'>
          <h3 className='project__container-info_title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__container-info_paragpraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__steps">
          <p className="project__step-one">1 неделя</p>
          <p className="project__step-four">4 недели</p>
          <p className="project__description-backend">Back-end</p>
          <p className="project__description-frontend">Front-end</p>
        </div>
    </section>
  )
}
