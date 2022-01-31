import React, { FocusEventHandler, useCallback, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './PopupLayout.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
  onClose?: () => void
}

export default function PopupLayout({ className, children, onClose }: Props): JSX.Element {
  const containerRef = useRef(null)

  useEffect(() => {
    containerRef?.current?.focus()
  }, [])

  const handleBlur: FocusEventHandler = useCallback(
    (e) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        onClose?.()
      }
    },
    [onClose]
  )

  return (
    <div ref={containerRef} className={classNames(className, styles.container)} onBlur={handleBlur}>
      <div className={styles.contents}>{children}</div>
    </div>
  )
}
