import axios from 'axios'

const apiService = axios.create({
  baseURL: 'http://127.0.0.1:7001',
  // withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  login(value) {
    // const formData = new FormData()
    // formData.append('email', value.email)
    // formData.append('password', value.password)
    return apiService
      .post('/login', { email: value.email, password: value.password })
      .then((res) => res.data)
      .catch((error) => ({ error }))
  },
}

// export default apiService
