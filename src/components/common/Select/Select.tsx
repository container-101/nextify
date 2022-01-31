import React from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'

interface Props {
  className?: string
  contentName: string
  backgroundColor?: string
  children: JSX.Element[] | JSX.Element
  onClick?: () => void
}

export default function Select({ className, contentName, children }: Props): JSX.Element {
  return (
    <div className={classNames(className, styles.container)}>
      <span>{contentName}</span>
      <select className={styles.select}>{children}</select>
    </div>
  )
}
