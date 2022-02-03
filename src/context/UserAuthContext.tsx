import { useCallback, useState } from 'react'
import { UserInfoShape } from '@src/core/interface/user-info'
import constate from 'constate'
import { ToastError } from '@src/utils/toast'

const useUserAuth = () => {
  const [userInfo, setUserInfo] = useState<UserInfoShape>(null)

  const ValidateUser = useCallback(async () => {
    // do axios call and set UserInfo
    ToastError('Should Implement User Validation')
  }, [])
  return { userInfo, ValidateUser }
}

const [UserAuthProvider, useUserInfo, useUserValidate] = constate(
  useUserAuth,
  (value) => value.userInfo,
  (value) => value.ValidateUser
)

export { UserAuthProvider, useUserInfo, useUserValidate }
