import React, { memo, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.1, 1, 0.88, 1],
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default memo(PageTransition)
