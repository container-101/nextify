import React from 'react'
import { ComponentMeta } from '@storybook/react'

import ShimmerWrapper from './Shimmer'

export default {
  title: 'Components/Shimmer',
  component: ShimmerWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ShimmerWrapper>

export const Shimmering = () => {
  return (
    <div className="flex flex-col space-y-2">
      <ShimmerWrapper>
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </ShimmerWrapper>
      <ShimmerWrapper>
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </ShimmerWrapper>
    </div>
  )
}
