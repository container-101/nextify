import axios from 'axios'

export const getUserProfileByEmail = async (email: string) => {
  try {
    const { data } = await axios.get(`/user/${email}`)
    return data
  } catch (error) {
    throw error
  }
}

export const editUserName = async (username: string) => {
  try {
    const { data } = await axios.put('/user', {
      username: username,
    })
    return data
  } catch (error) {
    throw error
  }
}
