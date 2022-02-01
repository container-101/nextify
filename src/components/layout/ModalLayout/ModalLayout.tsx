import React, { FC } from 'react'
import styles from './ModalLayout.module.scss'

interface IModalLayout {
  onClose: () => void
}

const ModalLayout: FC<IModalLayout> = ({ onClose, children }) => {
  return (
    <div className={styles.modal_con}>
      <div className={styles.contents}>{children}</div>
      <div className={styles.bottom}>
        <button
          type="button"
          onClick={() => {
            onClose()
          }}
        >
          모달 닫기
        </button>
      </div>
    </div>
  )
}

export default ModalLayout
