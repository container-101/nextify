import React, { FC } from 'react'
import classNames from 'classnames'
import { SocialIcon } from 'react-social-icons'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={styles.bg}>
      <footer className={styles.container}>
        <div className={styles.content}>
          <div className={styles.item}>
            <h5>Mircats in Container101</h5>
            <h5>Contact : mircat.woodi@container101.org</h5>
            <h5>Chuang-ang Univ. Software Majoring</h5>
            <h5>© Copyright 2022 by Mircats in Container101. All rights reserved</h5>
          </div>
        </div>
        <div className={classNames(styles.content, styles.social_icons)}>
          <SocialIcon url="https://github.com" />
        </div>
      </footer>
    </div>
  )
}

export default Footer
