import React, { memo, ReactNode } from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -400, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 400, y: 0 },
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export default memo(PageTransition)
