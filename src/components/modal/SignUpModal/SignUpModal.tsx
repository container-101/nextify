import React, { useState } from 'react'
import styles from './SignUpModal.module.scss'
import { SignUpInputShape } from '@interface/modal-input-shape'

const SignUpModal = () => {
  const [Inputs, setInputs] = useState<SignUpInputShape>({
    email: '',
    username: '',
    pwd: '',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
  }

  return <div className={styles.cnt}>{'signupModal'}</div>
}

export default SignUpModal
