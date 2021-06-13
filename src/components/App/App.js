import './App.css';
import Main from '../Main/Main';
// import Movies from '../Movies/Movies'
// import Profile from '../Profile/Profile'
// import Register from '../Register/Register'
// import Login from '../Login/Login'
// import PageNotFound from '../PageNotFound/PageNotFound'


// const user = 'Анатолий'

function App() {
  return (
    <div className="page">
      {/* временное решение для пока нет роутов */}
      {/* <Profile user={user} /> */}
      <Main />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <PageNotFound /> */}
    </div>
  );
}

export default App;
