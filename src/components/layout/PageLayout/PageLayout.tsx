import classNames from 'classnames'
import React, { FC } from 'react'
import styles from './PageLayout.module.scss'

interface Props {
  className?: string
  fullWidth?: boolean
  fixedHeight?: boolean
  hideMobileHeader?: boolean
  removeFooter?: boolean
  backwardURL?: string
  backwardEnabled?: boolean
  primaryHeader?: boolean
}

const PageLayout: FC<Props> = ({ className, children, fullWidth = false, fixedHeight = false }) => {
  return (
    <div className={classNames(styles.container, className)}>
      {fixedHeight && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
      <div
        className={classNames(styles.content, {
          [styles['full-width']]: fullWidth,
          [styles['fixed-height']]: fixedHeight,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default PageLayout
