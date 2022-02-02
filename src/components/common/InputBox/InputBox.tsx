import classNames from 'classnames'
import React, { FC, ChangeEventHandler, MouseEventHandler } from 'react'
import styles from './InputBox.module.scss'

interface InputBoxShape {
  type: 'id' | 'email' | 'password'
  name: string
  value: string | number
  label: string
  error?: boolean
  placeholder?: string
  readOnly?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
}

const InputBox: FC<InputBoxShape> = ({
  type,
  name,
  value,
  label,
  error = false,
  placeholder,
  readOnly,
  onChange,
  onClick,
}) => {
  return (
    <div className={classNames(styles.cnt, { [styles.err]: error })}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  )
}

export default InputBox