import React from 'react'
import { Link, Image } from '@components/common'
import styles from './BottomNavigation.module.scss'

const BottomNavigation = () => {
  return (
    <nav className={styles.cnt}>
      <div className={styles.con}>
        <Link href="/">
          <Image src="/logo.png" width={30} height={30} alt="home" />
        </Link>
      </div>
      <div className={styles.con}>
        <Link href="/account">
          <Image src="/logo.png" width={30} height={30} alt="home" />
        </Link>
      </div>
      <div className={styles.con}>
        <Link href="/noti">
          <Image src="/logo.png" width={30} height={30} alt="home" />
        </Link>
      </div>
      <div className={styles.con}>
        <Link href="/star">
          <Image src="/logo.png" width={30} height={30} alt="home" />
        </Link>
      </div>
    </nav>
  )
}

export default BottomNavigation
