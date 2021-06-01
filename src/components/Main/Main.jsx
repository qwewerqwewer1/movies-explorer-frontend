import React from 'react'
import HeaderPage from '../HeaderPage/HeaderPage';
// import Promo from '../Promo/Promo';
// import NavTab from '../NavTab/NavTab';
// import AboutProject from '../AboutProject/AboutProject';
// import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';
import FooterPage from '../FooterPage/FooterPage'
// import Portfolio from '../Portfolio/Portfolio'
import SearchForm from '../SearchForm/SearchForm'

export default function Main() {
  return (
    <>
      <HeaderPage />
      {/* <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe/>
      <Portfolio /> */}
      <SearchForm />
      <FooterPage />
    </>
  )
}
