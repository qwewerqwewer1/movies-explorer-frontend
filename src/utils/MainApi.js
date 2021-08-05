const backApi = 'https://api.dmitriykovyazin.nomoredomains.icu';

function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}


//                                                      *Movies fetch
export function deleteMovie(token, movieId) {
  return fetch(`${backApi}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function saveMovie(token, movie) {
  return fetch(`${backApi}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailer: movie.trailer,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.thumbnail,
      movieId: movie.id
    })
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function getSavedMovie(token) {
  return fetch(`${backApi}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}


//                                                      *Users fetch
export function getUser() {
  return fetch(`${backApi}/users/me`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkStatus(res))
}

export function editUserData(token, name, email) {
  return fetch(`${backApi}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

//                                                      *Register && Auth fetch
export function postRegister(name, password, email) {
  return fetch(`${backApi}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      "name": name,
      "password": password,
      "email": email
    })
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function postAuthorize(password, email) {
  return fetch(`${backApi}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((response => response.json()))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    })
    .catch(err => console.log(err))
}

export function checkToken(token) {
  return fetch(`${backApi}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
};