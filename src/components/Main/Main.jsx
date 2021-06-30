import React from 'react'
import HeaderPage from '../HeaderPage/HeaderPage';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import Project from '../Project/Project';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import FooterPage from '../FooterPage/FooterPage'

const loggedIn = false

export default function Main() {
  return (
    <>
      <HeaderPage loggedIn={loggedIn}/>
      <Promo />
      <NavTab />
      <Project />
      <Techs />
      <AboutMe/>
      <FooterPage />
    </>
  )
}
