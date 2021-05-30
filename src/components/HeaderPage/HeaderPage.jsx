import './HeaderPage.css'
import logo from '../../images/s_logo.svg'


export default function HeaderPage() {
  return (
    <section className='header'>
      <div className='logo-container'>
        <img className='logo-container__logo' alt='logo_S' src={logo}/>
      </div>
      <div className='links'>
        <a href='http://localhost:3000' className='link__register'>Регистрация</a>
        <div className='link__enter-contaier'>
          <a href='http://localhost:3000' className='link__enter'>Войти</a>
        </div>
      </div>
    </section>
  )
}
