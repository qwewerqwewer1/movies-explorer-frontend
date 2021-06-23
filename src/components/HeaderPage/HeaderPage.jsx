import './HeaderPage.css'
import logo from '../../images/s_logo.svg'

import Navigation from '../Navigation/Navigation'
// временное решение
const loggedIn = true

export default function HeaderPage() {
  return (
    <section className={loggedIn ? 'header-page header-page__loggged' : 'header-page'}>
      <div className="header-page__container">
        <div className='logo-container'>
          <img className='logo-container__logo' alt='логотип' src={logo} />
        </div>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </section>
  )
}
