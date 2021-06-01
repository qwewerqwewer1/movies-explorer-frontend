import './App.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import FooterPage from '../FooterPage/FooterPage'

function App() {
  return (
    <div className="page">
      <HeaderPage />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <FooterPage />
    </div>
  );
}

export default App;
