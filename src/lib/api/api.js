import axios from 'axios'

const api = {
  call: async (endpoint, data = {}) => {
    const url = process.env.REACT_APP_API_URL + endpoint.url
    const request = {
      url,
      method: endpoint.method,
      data,
    }
    try{
      const response = await axios(request)
      return response.data
    }
    catch(err){
      return err.response.data.data
    }
  },
}
export default api
