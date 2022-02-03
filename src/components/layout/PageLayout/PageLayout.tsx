import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './PageLayout.module.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import PageTransition from './PageTransition/PageTransition'
import BottomNavigation from './BottomNavigation/BottomNavigation'

interface Props {
  fullWidth?: boolean
  fixedHeight?: boolean
  hideMobileHeader?: boolean
  removeFooter?: boolean
  backwardURL?: string
  backwardEnabled?: boolean
  primaryHeader?: boolean
  disableTransition?: boolean
}

const PageLayout: FC<Props> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  removeFooter = false,
  disableTransition = false,
}) => {
  return (
    <main className={styles.container}>
      {fixedHeight && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
      <Header />
      <div
        className={classNames(styles.content, {
          [styles['full-width']]: fullWidth,
          [styles['fixed-height']]: fixedHeight,
        })}
      >
        {!disableTransition ? <PageTransition>{children}</PageTransition> : <>{children}</>}
      </div>
      {!removeFooter || !fixedHeight || <Footer />}
      {/* <BottomNavigation /> */}
    </main>
  )
}

export default PageLayout
