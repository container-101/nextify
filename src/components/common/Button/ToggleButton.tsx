import React from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
import styles from './ToggleButton.module.scss'
import classNames from 'classnames'

interface ToggleButtonPropsShape {
  isOpen: boolean
  rightPosition?: boolean
  toggle: () => void
}

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const ToggleButton = ({ isOpen, rightPosition = false, toggle }: ToggleButtonPropsShape) => {
  return (
    <motion.div
      className={classNames(styles.content, styles.popup)}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <button
        className={classNames(styles.toggle, { [styles.right]: rightPosition })}
        onClick={toggle}
      >
        <svg viewBox="0 0 22 22">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
    </motion.div>
  )
}

export default ToggleButton
