import './App.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function App() {
  return (
    <div className="page">
      <HeaderPage />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </div>
  );
}

export default App;
