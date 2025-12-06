import axios from 'axios'

// Central Axios instance pointing to json-server backend
const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export default api


