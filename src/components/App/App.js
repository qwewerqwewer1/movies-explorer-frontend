import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import { Route } from 'react-router-dom';

const user = 'Инокентий'

function App() {
  return (
    <div className="page">

      <Route exact path="/">
        <Main />
      </Route>

      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route path="/profile">
        <Profile user={user} />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>

      <Route path="/page-not-found">
        <PageNotFound />
      </Route>

    </div>
  );
}

export default App;
