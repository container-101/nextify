import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import { Image, Link } from '@components/common'
import SideMenu from './SideMenu/SideMenu'
import styles from './Header.module.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => {
      return !prev
    })
  }, [])

  return (
    <>
      <header className={styles.container}>
        <div className={(styles.content, styles.logo)}>
          <div className={styles.item}>
            <Link href="/">
              <span className={styles.logo_img}>
                <Image width={36} height={36} src={'/logo.svg'} alt="logo" />
              </span>
            </Link>
          </div>
        </div>
        <div className={classNames(styles.content, styles.popup)}>
          <div className={styles.item} onClick={toggleOpen}>
            {'contents'}
          </div>
        </div>
      </header>
      <SideMenu onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Header
