import React, { useCallback, useState } from 'react'
import styles from './SignUpModal.module.scss'
import { SignUpInputShape } from '@interface/modal-input-shape'
import { Button } from '@components/common'

const SignUpModal = () => {
  const [Inputs, setInputs] = useState<SignUpInputShape>({
    email: '',
    username: '',
    password: '',
  })

  const handleOnChange = useCallback((e) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  const handleSubmit = useCallback(() => {}, [])

  return (
    <div className={styles.cnt}>
      <label htmlFor="username">Username</label>
      <input
        type="id"
        name="username"
        placeholder="아이디"
        onChange={handleOnChange}
        value={Inputs.username}
      />
      <label htmlFor="email">Email</label>
      <input
        type="id"
        name="email"
        placeholder="이메일"
        onChange={handleOnChange}
        value={Inputs.email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="패스워드"
        onChange={handleOnChange}
        value={Inputs.password}
      />
      <Button fullWidth btnStyles="primary" type="submit" onClick={handleSubmit}>
        Sign Up
      </Button>
    </div>
  )
}

export default SignUpModal
