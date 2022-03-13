import { useState, useEffect } from 'react'
import { IWindowSize } from '@src/core/interface'
import { throttle } from 'lodash-es'

const useWindowSize = (delay: number = 0, callback?: () => void): IWindowSize => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  })

  const handleResize = throttle(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    callback?.()
  }, delay)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      console.log('resize handler released')
      window.removeEventListener('resize', handleResize)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}

export default useWindowSize
