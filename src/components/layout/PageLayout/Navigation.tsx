import { FC, useState } from 'react'
import { Link } from '@components/common'
import headerNavLinks from '@data/headerNavLinks'
import { motion } from 'framer-motion'
import IconButton from '@src/components/common/Icon/IconButton'
import classNames from 'classnames'
import { modalOverlayVariants } from '@src/animations/modal'

const SideMenuItem = ({ link, onToggleNav }) => {
  return (
    <motion.div
      className="px-12 py-4"
      whileHover={{ scale: 1.01 }}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}
    >
      <Link
        href={link.href}
        className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
        onClick={onToggleNav}
      >
        {link.title}
      </Link>
    </motion.div>
  )
}

const Navigation: FC<{
  direction?: 'left' | 'right'
}> = ({ direction = 'right' }) => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="flex items-center">
      <IconButton
        initial={false}
        name="hamburger"
        animate={navShow ? 'open' : 'close'}
        type="button"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      />

      {navShow && (
        <motion.div
          className="absolute top-appheaderHeight left-0 z-[998] w-screen h-screen"
          variants={modalOverlayVariants}
          onClick={onToggleNav}
        />
      )}

      <div
        className={classNames(
          `fixed z-[999] right-0 top-appheaderHeight h-full w-full`,
          `opacity-95 transform duration-300 ease-in-out bg-gray-200 dark:bg-gray-800`,
          navShow
            ? direction === 'right'
              ? 'translate-x-0 md:translate-x-3/4'
              : 'translate-x-0 md:-translate-x-3/4'
            : direction === 'right'
            ? 'translate-x-full'
            : '-translate-x-full'
        )}
      >
        <motion.nav
          className={classNames(
            'fixed mt-8 w-full h-full ',
            direction === 'right' ? 'text-left' : 'text-right'
          )}
        >
          {headerNavLinks.map((link) => (
            <SideMenuItem key={link.title} link={link} onToggleNav={onToggleNav} />
          ))}
        </motion.nav>
      </div>
    </div>
  )
}

export default Navigation
