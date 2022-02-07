import React, { FC } from 'react'
import Zoom from 'react-reveal'

const CustomZoom: FC = ({ children }) => {
  return <Zoom>{children}</Zoom>
}

export default CustomZoom
