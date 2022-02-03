import React, { useMemo } from 'react'
import { Image, Link, ToggleButton } from '@components/common'
import SideMenu from './SideDrawer/SideDrawer'
import styles from './Header.module.scss'
import { useCycle } from 'framer-motion'
import HeaderPopup from './HeaderPopup'

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const HeaderContent = useMemo(() => {
    const HeaderContentMemo = () => {
      return <div>abc</div>
    }
    return HeaderContentMemo
  }, [])

  return (
    <>
      <header className={styles.cnt}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.img}>
              <Image width={40} height={40} src="/logo.svg" alt="logo" />
            </span>
          </Link>
        </div>
        <div className={styles.popup}>
          <ToggleButton isOpen={isOpen} rightPosition toggle={() => toggleOpen()}></ToggleButton>
          <HeaderPopup isOpen={isOpen} onToggle={() => toggleOpen()}>
            <HeaderContent />
          </HeaderPopup>
        </div>
      </header>
      <SideMenu />
    </>
  )
}

export default Header
