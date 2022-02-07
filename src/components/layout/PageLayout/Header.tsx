import React, { useMemo } from 'react'
import { LinkWithLogo } from '@components/common'
import { useCycle } from 'framer-motion'
import { PopupLayout } from '..'
import MobileNav from './MobileNav'

const HeaderPopup = ({ children, isOpen, onToggle }) => {
  return (
    <PopupLayout className="top-12" isOpen={isOpen} onToggle={onToggle}>
      {children}
    </PopupLayout>
  )
}

const Header = ({ className }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const HeaderContent = useMemo(() => {
    const HeaderContentMemo = () => {
      return <div>abc</div>
    }
    return HeaderContentMemo
  }, [])

  return (
    <header
      className={`z-40 flex fixed w-full top-0 justify-between ${className} py-3 bg-primary-500 lg:px-20 lg:py-2.5`}
    >
      <LinkWithLogo priority path="/" logoSrc="/logo.svg" alt="logo" width={40} height={40} />
      <MobileNav />
    </header>
  )
}

export default Header
