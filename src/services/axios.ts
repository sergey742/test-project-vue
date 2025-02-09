import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => {
    const data = response.data
    return data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default apiClient
