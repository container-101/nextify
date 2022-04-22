import classNames from 'classnames'
import React, { FC, memo } from 'react'

const ShimmerWrapper: FC<{
  children: React.ReactNode
  fullWidth?: boolean
}> = ({ children, fullWidth }) => {
  return (
    <div className={classNames('rounded-md p-4 w-full', fullWidth ? '' : 'max-w-sm')}>
      <div className="animate-pulse flex space-x-4">{children}</div>
    </div>
  )
}

export default memo(ShimmerWrapper)
