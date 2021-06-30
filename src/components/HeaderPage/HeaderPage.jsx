import './HeaderPage.css'
import {Link} from "react-router-dom";
import logo from '../../images/s_logo.svg'
import Navigation from '../Navigation/Navigation'

export default function HeaderPage(props) {
  return (
    <section className={props.loggedIn ? 'header-page header-page__loggged' : 'header-page'}>
      <div className="header-page__container">
        <Link to="/" className='logo-container'>
          <img className='logo-container__logo' alt='логотип' src={logo} />
        </Link>
        <Navigation loggedIn={props.loggedIn}/>
      </div>
    </section>
  )
}
