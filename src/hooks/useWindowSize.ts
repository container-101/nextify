import { useState, useEffect } from 'react'
import { IWindowSize } from '@src/core/interface'
import _ from 'lodash'

const useWindowSize = (delay: number = 0): IWindowSize => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  })

  const handleResize = _.throttle(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, delay)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return windowSize
}

export default useWindowSize
