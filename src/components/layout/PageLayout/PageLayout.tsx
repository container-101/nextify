import React, { FC, useMemo } from 'react'
import Footer from './Footer'
import Header from './Header/Header'
import PageTransition from './PageTransition'
import BottomNavigation from './BottomNavigation'
import classNames from 'classnames'
import MobileNav from './MobileNav'

interface Props {
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}

const PageLayout: FC<Props> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
}) => {
  const maxWidth = useMemo(() => 'px-4', [])

  return (
    <div className="h-screen">
      <Header className={`${maxWidth}`} />
      <main
        className={classNames(
          'flex flex-col h-full pt-16',
          `${fullWidth ? 'w-full' : maxWidth}`,
          `${fixedHeight && 'overflow-hidden h-full'}`
        )}
      >
        <div className="w-full flex-grow">
          {!disableTransition ? <PageTransition>{children}</PageTransition> : <>{children}</>}
        </div>
      </main>
      {!fixedHeight && <Footer className={`${maxWidth}`} />}
      <BottomNavigation />
    </div>
  )
}

export default PageLayout
