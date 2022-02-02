import React, { ReactNode } from 'react'
import { framerPageTrans } from '@utils/framerVar'
import { AnimatePresence, motion } from 'framer-motion'

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div {...framerPageTrans}>{children}</motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
