import React, { FC } from 'react'
import { PopupLayout } from '@components/layout'
import styles from './HeaderPopup.module.scss'

interface HeaderPopupShape {
  isOpen: boolean
  onToggle?: () => void
}

const HeaderPopup: FC<HeaderPopupShape> = ({ children, isOpen, onToggle }) => {
  return (
    <PopupLayout className={styles.position} isOpen={isOpen} onToggle={onToggle}>
      {children}
    </PopupLayout>
  )
}

export default HeaderPopup
