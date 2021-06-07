import React from 'react'
import './Navigation.css'

export default function Navigation(props) {
  return (
      <section className='links'>
        <a href='http://localhost:3000' className='link__register'>Регистрация</a>
        <a href='http://localhost:3000' className='link__enter'>Войти</a>
      </section>
  )
}
