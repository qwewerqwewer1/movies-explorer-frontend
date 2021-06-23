import React from 'react'
import './Techs.css'

export default function Techs() {
  return (
    <section className='techs'>
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__header">7 технологий</h3>
        <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="tech__stack-container">
          <p className="tech__stack">HTML</p>
          <p className="tech__stack">CSS</p>
          <p className="tech__stack">JS</p>
          <p className="tech__stack">React</p>
          <p className="tech__stack">Git</p>
          <p className="tech__stack">Express.js</p>
          <p className="tech__stack">mongoDB</p>
        </div>
      </div>
      
    </section>
  )
}
