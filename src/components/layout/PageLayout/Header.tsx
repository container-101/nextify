import { forwardRef, MutableRefObject } from 'react'
import Navigation from './Navigation'
import IconButton from '@src/components/common/Icon/IconButton'
import Router from 'next/router'
import { ThemeSwitch } from '@src/components/common'
import classnames from 'classnames'

type Props = {
  fixed?: boolean
  transparent?: boolean
}

const Header = (
  { fixed = false, transparent = false }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  return (
    <header
      ref={ref}
      className={classnames(
        `z-10 flex justify-between items-center align-middle w-full top-0 px-3 py-2 bg-white dark:bg-gray-900`,
        fixed ? 'fixed' : 'relative',
        transparent ? 'transparent' : 'bg-gray-300 dark:bg-gray-700'
      )}
    >
      <IconButton
        name="logo"
        width={40}
        height={40}
        onClick={() => {
          Router.push('/')
        }}
      />
      <div className="flex">
        <ThemeSwitch />
        <Navigation />
      </div>
    </header>
  )
}

export default forwardRef(Header)
