import React, { ChangeEvent, useState } from 'react'
import styles from './SignInModal.module.scss'
import { ModalLayout } from '@components/layout'

interface IProps {
  onClose: () => void
}

interface IInputs {
  email: string
  pwd: string
}

const SignInModal = ({ onClose }: IProps) => {
  const [Inputs, setInputs] = useState<IInputs>({
    email: '',
    pwd: '',
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
  }

  return (
    <ModalLayout onClose={onClose}>
      <div className={styles.cnt}>{'abc'}</div>
    </ModalLayout>
  )
}

export default SignInModal
