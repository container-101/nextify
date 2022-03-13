import React, { forwardRef, MutableRefObject } from 'react'
import { LinkWithLogo } from '@components/common'
import MobileNav from './MobileNav'

const Header = (props, ref: MutableRefObject<HTMLDivElement>) => {
  return (
    <header
      ref={ref}
      className={`z-10 fixed flex w-full top-0 justify-between bg-primary px-3 py-1`}
    >
      <LinkWithLogo priority path="/" logoSrc="/logo.svg" alt="logo" width={40} height={40} />
      <MobileNav />
    </header>
  )
}

export default forwardRef<HTMLDivElement>(Header)
