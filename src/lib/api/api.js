import axios from 'axios'

const api = {
  call: async (endpoint, data = {}) => {
    const url = process.env.REACT_APP_API_URL + endpoint.url
    const request = {
      url,
      method: endpoint.method,
      data,
    }
    const response = await axios(request)
    return response.data
  },
}
export default api
