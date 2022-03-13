import React, { FC } from 'react'
import { Image } from '@components/common'

interface Props {
  items: any[]
  width: number
}

const ImageList: FC<Props> = ({ items, width }) => {
  return (
    <div className="flex flex-nowrap overflow-scroll">
      {items.map((item, idx) => {
        return (
          <div key={`carousel-list-item-${idx}`} className={`min-w-[400px]`}>
            <Image width={width} height={width} src={item.url} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default ImageList
