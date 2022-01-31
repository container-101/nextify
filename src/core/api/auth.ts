import axios from 'axios'
import { IUser } from '../interface/user-info'

export const login = async (
  email: string,
  password: string
): Promise<{ user: IUser; token: string }> => {
  const { data } = await axios.post('/auth/guest/login', {
    email,
    password,
  })
  return data
}
