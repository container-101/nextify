import { motion, MotionProps } from 'framer-motion'
import React, { FC } from 'react'
import HamburgerSVG from './assets/Hamburger'
import SettingSVG from './assets/Setting'

export type SVGTypes = 'hamburger' | 'settings'

interface Props extends MotionProps {
  name: SVGTypes
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}

const Icon: FC<Props> = ({ name, type = 'button', className, onClick, ...props }) => {
  const IconSelector: { [keys in SVGTypes]: JSX.Element } = {
    hamburger: <HamburgerSVG />,
    settings: <SettingSVG />,
  }

  return (
    <motion.button className={className} type={type} onClick={onClick} {...props}>
      {IconSelector[name]}
    </motion.button>
  )
}

export default Icon
