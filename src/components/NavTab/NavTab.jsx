import React from 'react'
import './NavTab.css'

export default function NavTab() {
  return (
    <section className='navigation'>
      <div className="navigation__container">
        <a className='navigation__link' href="#project" >О проекте</a>
        <a className='navigation__link' href="#techs">Технологии</a>
        <a className='navigation__link' href="#about-me">Студент</a>
      </div> 
    </section>
  )
}
