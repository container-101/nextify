import React, { useState } from 'react'
import { SignInInputShape } from '@interface/modal-input-shape'
import styles from './SignInModal.module.scss'

const SignInModal = () => {
  const [Inputs, setInputs] = useState<SignInInputShape>({
    email: '',
    password: '',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
  }

  return <div className={styles.cnt}></div>
}

export default SignInModal
