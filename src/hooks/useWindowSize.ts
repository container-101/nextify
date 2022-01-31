import { useState, useEffect } from 'react'
import { IWindowSize } from '@src/core/interface'

export default function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
    mobile: undefined,
  })
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: mobile,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
