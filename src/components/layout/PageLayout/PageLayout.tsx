import React, { FC, useEffect, useRef } from 'react'
import Footer from './Footer'
import Header from './Header'
import PageTransition from './PageTransition'
import BottomNavigation from './BottomNavigation'
import classNames from 'classnames'
import useWindowSize from '@src/hooks/useWindowSize'
interface Props {
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
  headerTransparent?: boolean
  headerFixed?: boolean
}

const PageLayout: FC<Props> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
  headerTransparent = false,
  headerFixed = false,
}) => {
  const headerRef = useRef<HTMLDivElement>(null)
  // change app height when window size changes
  useWindowSize(500, () => {
    if (!headerRef.current) return
    const headerHeight = headerRef.current ? getComputedStyle(headerRef.current).height : '0px'
    document.documentElement.style.setProperty(
      '--app-height',
      `${window.innerHeight - parseInt(headerHeight, 10)}px`
    )
  })

  // assign app header heigh
  useEffect(() => {
    const headerHeight = headerRef.current ? getComputedStyle(headerRef.current).height : '0px'
    document.documentElement.style.setProperty('--app-header-height', headerHeight)
    document.documentElement.style.setProperty(
      '--app-height',
      `${window.innerHeight - parseInt(headerHeight, 10)}px`
    )
  }, [])

  return (
    <div id="page-layout">
      <Header ref={headerRef} fixed={headerFixed} transparent={headerTransparent} />
      <main
        className={classNames(
          'z-0 flex flex-col w-full min-h-appHeight mx-auto',
          `${headerFixed && 'mt-appheaderHeight'}`,
          `${!fullWidth && 'max-w-appMaxWidth'}`,
          `${fixedHeight && 'overflow-hidden'}`
        )}
      >
        {!disableTransition ? <PageTransition>{children}</PageTransition> : <>{children}</>}
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  )
}

export default PageLayout
