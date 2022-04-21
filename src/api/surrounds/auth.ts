import axios from 'axios'

export const signin = async (email: string, password: string) => {
  try {
    const { data } = await axios.post('/signin', {
      email: email,
      password: password,
    })
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    return data
  } catch (err) {
    throw err
  }
}

export const signup = async (username: string, email: string, password: string) => {
  try {
    const { data } = await axios.post('/signup', {
      username,
      email,
      password,
    })
    return data
  } catch (err) {
    throw err
  }
}
