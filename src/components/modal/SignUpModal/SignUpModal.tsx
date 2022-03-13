import React, { useCallback, useState } from 'react'
import styles from './SignUpModal.module.scss'
import { SignUpInputShape } from '@interface/modal-input-shape'
import { Button, InputBox } from '@components/common'

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

  const handleSubmit = useCallback(() => {
    // do something
  }, [])

  return (
    <div className={styles.cnt}>
      <InputBox
        type="id"
        name="username"
        label="Username"
        placeholder="아이디"
        value={Inputs.username}
        onChange={handleOnChange}
      />
      <InputBox
        type="email"
        name="email"
        label="Email"
        placeholder="이메일"
        value={Inputs.email}
        onChange={handleOnChange}
      />
      <InputBox
        type="password"
        name="password"
        label="Password"
        placeholder="패스워드"
        value={Inputs.password}
        onChange={handleOnChange}
      />
      <Button fullWidth btnStyles="primary" type="submit" onClick={handleSubmit}>
        Sign Up
      </Button>
    </div>
  )
}

export default SignUpModal
