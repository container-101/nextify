import { Variants } from 'framer-motion'

export const modalVariants: Variants = {
  enter: {
    y: -500,
    opacity: 0,
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 500,
    opacity: 0,
  },
}

export const modalOverlayVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
