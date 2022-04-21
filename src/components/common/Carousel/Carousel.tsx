import { Children, FC, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { CarouselVars } from '@animations/carousel'

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Carousel: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const childArray = useMemo(() => Children.toArray(children), [children])
  const imageIndex = wrap(0, childArray.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute w-full h-full"
          custom={direction}
          variants={CarouselVars}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          {childArray[imageIndex]}
        </motion.div>
      </AnimatePresence>
      <div
        className="flex absolute bg-white top-[calc(50%-20px)] right-3 w-10 h-10 justify-center items-center select-none cursor-pointer font-bold text-2xl z-[2] rounded-full dark:bg-gray-800 dark:text-white"
        onClick={() => paginate(1)}
      >
        {'‣'}
      </div>
      <div
        className="flex absolute bg-white top-[calc(50%-20px)] left-3 -scale-100 translate w-10 h-10 justify-center items-center select-none cursor-pointer font-bold text-2xl z-[2] rounded-full dark:bg-gray-800 dark:text-white"
        onClick={() => paginate(-1)}
      >
        {'‣'}
      </div>
    </div>
  )
}

export default Carousel
