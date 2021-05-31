import React from 'react'
import './NavTab.css'

export default function NavTab() {
  return (
    <section className='navigation'>
      <a className='navigation__link' href="http://localhost:3000">О проекте</a>
      <a className='navigation__link' href="http://localhost:3000">Технологии</a>
      <a className='navigation__link' href="http://localhost:3000">Студент</a>
    </section>
  )
}