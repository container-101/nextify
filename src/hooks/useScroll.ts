import { useState, useEffect } from 'react'
import { debounce } from 'lodash-es'

export function useScroll(delay: number = 15) {
  const [scrollY, setScrollY] = useState<number>(0)

  const listener = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay))
    return () => window.removeEventListener('scroll', listener)
  })

  return {
    scrollY,
  }
}
