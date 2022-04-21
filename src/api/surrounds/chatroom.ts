import axios from 'axios'

export const createChatroom = async (title: string, latitude: number, longitude: number) => {
  try {
    const { data } = await axios.post('/api/user/signin', {
      title,
      latitude: latitude.toString(),
      longitude: latitude.toString(),
    })
    return data
  } catch (err) {
    throw err
  }
}
