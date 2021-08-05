import React from 'react'
import HeaderPage from '../HeaderPage/HeaderPage';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import Project from '../Project/Project';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import FooterPage from '../FooterPage/FooterPage'

export default function Main(props) {
  return (
    <>
    <HeaderPage loggedIn={props.loggedIn} />
      <Promo />
      <NavTab />
      <Project />
      <Techs />
      <AboutMe/>
    <FooterPage />
    </>
  )
}
