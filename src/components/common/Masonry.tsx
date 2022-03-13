import React from 'react'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const CustomMasonry = () => {
  const items = [
    { id: 1, name: 'My First Item' },
    { id: 2, name: 'Another item' },
    { id: 3, name: 'Third Item' },
    { id: 4, name: 'Here is the Fourth' },
    { id: 5, name: 'High Five' },
  ]

  // Convert array to JSX items
  const elems = items.map(function (item) {
    return <div key={item.id}>{item.name}</div>
  })

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex -ml-7 w-auto"
      columnClassName="pl-7 bg-clip-padding"
    >
      {elems}
    </Masonry>
  )
}

export default CustomMasonry
