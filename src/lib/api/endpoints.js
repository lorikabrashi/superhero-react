const endpoints = {
  home: { url: '/', method: 'GET' },
  register: { url: '/register', method: 'POST' },
  verify: { url: '/users/verify', method: 'PUT' },
  login: {url: '/login', method: 'POST'},
  forgotPassword: {url: '/forgot-password-request', method: "POST"},
  resetPassword: {url: '/users/forgot-password', method: "PUT"}
}

export default endpoints
