export function getMovies() {
  return fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    })
}