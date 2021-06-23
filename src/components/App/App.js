import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'


const user = 'Анатолий'

function App() {
  return (
    <div className="page">
      {/* <Profile user={user} /> */}
      {/* <Main /> */}
      <Movies />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <PageNotFound /> */}
    </div>
  );
}

export default App;
