//                                                                    *React
import './App.css';
import React from 'react';
import { Redirect, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//                                                                    *Components
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'

//                                                                    *Context
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

//                                                                    *Api
import * as api from '../../utils/MoviesApi'
import * as mongoApi from '../../utils/MainApi'

function App() {

  //                                                                  *constants
  let history = useHistory();
  let location = useLocation();

  //                                                                  *hooks useState
  const [isSaving, setIsSaving] = React.useState(false);
  const [editProfileMessage, setEditProfileMessage] = React.useState('');
  const [isUpdateSuccess, setIsUpdateSuccess] = React.useState(true);
  // const [editProfileMessage, setEditProfileMessage] = React.useState('');
  const [dataFilms, setDataFilms] = React.useState([])
  const [preloader, setPreloader] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({});
  // const [rememberUser, setRememberUser] = React.useState(false);
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState('');
  const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);

  //                                                                  *hooks useEffect

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setLoggedIn(true);
      history.push(location);
      mongoApi.getUser()
        .then(user => setCurrentUser(user))

      // .finally(res => console.log(res))
      // eslint-disable-next-line no-restricted-globals
    } else {
      history.push('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(currentUser)
  React.useEffect(() => {
    if (preloader)
      api.getMovies()
        .then(res => localStorage.setItem('data', JSON.stringify(res)))
        .then(setDataFilms(JSON.parse(localStorage.getItem('data'))))
        .catch(err => console.log(err))
        .finally(setPreloader(false))
  }, [preloader])

  //                                                                  *any functions

  function handleEditUserInfo(name, email) {
    const token = localStorage.getItem('token')
    mongoApi.editUserData(token, name, email)
      .then((newUser) => {
        if (newUser._id) {
          setCurrentUser(newUser);
          setIsUpdateSuccess(true);
          setIsSaving(true);
          setEditProfileMessage('Профиль обновлен успешно!');
        } else if (newUser.message) {
          setEditProfileMessage(newUser.message);
          setIsUpdateSuccess(false);
        }
        return
      })
      .catch(() => {
        setEditProfileMessage('При обновлении профиля произошла ошибка');
        setIsUpdateSuccess(false);
      })
  }

  function handleRegister(name, email, password) {
    mongoApi.postRegister(name, email, password)
      .then((res) => {
        console.log(res)
        if (!res.message) {
          setRegisterErrorMessage('')
          handleLogin(email, password);
          history.push('/signin')
        } else if (res.error === 'Bad Request') {
          setRegisterErrorMessage(`${res.validation.body.message}`);
        } else if (res.message) {
          setRegisterErrorMessage(res.message);
        }
      })
      .catch(() => {
        setRegisterErrorMessage('Что-то пошло не так...');
      })
  }

  function handleLogin(password, email) {
    mongoApi.postAuthorize(password, email)
      .then((res) => {
        console.log(res)
        if (res.token) {
          localStorage.setItem('token', res.token);
          setLoginErrorMessage('');
          setLoggedIn(true);
          history.push('/movies');
        } else if (res.error === 'Bad Request') {
          setLoginErrorMessage('Введены невалидные данные');
        } else if (res.message) {
          setLoginErrorMessage(res.message);
        }
      })
      .catch((err) => {
        setLoginErrorMessage('Что-то пошло не так...');
        console.log(err);
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser('');
    setLoggedIn(false);
    history.push('/signin');
  }

  function clearAllErrorMessages() {
    setRegisterErrorMessage('');
    setLoginErrorMessage('');
    // setEditProfileMessage('');
  }

  //                                                                    *App functions
  // function handleMovieLike(movie) {
  //   const isLiked = movie.likes.some(i => i === currentUser._id);
  //   const likeRequest = !isLiked ? api.saveMovie(movie._id) : api.deleteMovie(movie._id);
  //   likeRequest
  //     .then((newMovieCard) => {
  //       const newMovieCards = newMovieCard.map(c => c._id === movie._id ? newMovieCards : c);
  //       setDataFilms(newMovieCards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }


  //                                                                    *App components
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>

          <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>

          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            preloader={preloader}
            setPreloader={setPreloader}
            dataFilms={dataFilms}>
          </ ProtectedRoute>


          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn} >
          </ProtectedRoute>

          <ProtectedRoute
            path="/profile"
            component={Profile}
            handleEditUserInfo={handleEditUserInfo}
            isSaving={isSaving}
            message={editProfileMessage}
            isUpdateSuccess={isUpdateSuccess}
            currentUser={currentUser}
            handleLogout={handleLogout}
            loggedIn={loggedIn}>
          </ProtectedRoute>

          <Route path="/signin">
            <Login
              loginErrorMessage={loginErrorMessage}
              handleLogin={handleLogin}
              preloader={preloader}
              clearAllErrorMessages={clearAllErrorMessages} />
          </Route>

          <Route path="/signup">
            <Register
              registerErrorMessage={registerErrorMessage}
              handleRegister={handleRegister}
              preloader={preloader}
              clearAllErrorMessages={clearAllErrorMessages} />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;