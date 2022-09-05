const endpoints = {
  home: { url: '/', method: 'GET' },
  register: { url: '/register', method: 'POST' },
  verify: { url: '/users/verify', method: 'PUT' },
  login: { url: '/login', method: 'POST' },
  forgotPassword: { url: '/forgot-password-request', method: 'POST' },
  resetPassword: { url: '/users/forgot-password', method: 'PUT' },
  superheros: { url: '/superhero/all', method: 'GET' },
  favoriteList: { url: '/users/favorite-list', method: 'GET' },
  updateFavorite: { url: '/users/update-favorite', method: 'POST' },
  singleSuperhero: { url: '/superhero/', method: 'GET' },
  editSuperhero: { url: '/superhero/', method: 'POST' },
}

export default endpoints
