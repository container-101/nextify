import axios from 'axios'

export const uploadProfileImage = async (image) => {
  try {
    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.put('/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return data
  } catch (error) {
    throw error
  }
}
