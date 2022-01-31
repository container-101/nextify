import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Select from './Select'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Select>

export const Primary = (args) => (
  <Select contentName="E-mail" {...args}>
    <option value="0">woodi.daily@gmail.com</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Select>
)

export const Secondary = (args) => (
  <Select contentName="Country/Region" {...args}>
    <option value="0">South Korea(+82)</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Select>
)
