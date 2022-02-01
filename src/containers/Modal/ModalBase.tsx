import classNames from 'classnames'
import React, { FC } from 'react'
import styles from './ModalBase.module.scss'

interface IModalBase {
  show: boolean
  onClose: () => void
}

const ModalBase: FC<IModalBase> = ({ show, onClose, children }) => {
  return (
    <div className={classNames(styles.cnt, { [styles.active]: show })}>
      <div
        className={styles.overlay}
        onClick={() => {
          onClose()
        }}
      />
      {children}
    </div>
  )
}

export default ModalBase
