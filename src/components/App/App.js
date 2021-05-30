import './App.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

function App() {
  return (
    <div className="page">
      <HeaderPage />
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
}

export default App;
