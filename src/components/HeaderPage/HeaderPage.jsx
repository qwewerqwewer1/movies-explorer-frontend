import './HeaderPage.css'
import {Link} from "react-router-dom";
import logo from '../../images/s_logo.svg'
import Navigation from '../Navigation/Navigation'

// временное решение для изминения состояния шапки ↓

// const loggedIn = true
const loggedIn = false

export default function HeaderPage() {
  return (
    <section className={loggedIn ? 'header-page header-page__loggged' : 'header-page'}>
      <div className="header-page__container">
        <Link to="/" className='logo-container'>
          <img className='logo-container__logo' alt='логотип' src={logo} />
        </Link>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </section>
  )
}
