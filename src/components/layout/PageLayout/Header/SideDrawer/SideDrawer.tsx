import React, { FC, useRef } from 'react'
import { framerSidebar } from '@utils/framerVar'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '@hooks/useDimensions'
import SideNavigation from './SideDrawerNav'
import { ToggleButton } from '@components/common'
import styles from './SideDrawer.module.scss'
import classNames from 'classnames'

const SideMenu: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef<HTMLElement>(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={classNames(styles.container, { [styles.active]: isOpen })}
    >
      <motion.div className={styles.background} variants={framerSidebar} />
      <SideNavigation />
      <ToggleButton isOpen={isOpen} toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default SideMenu
