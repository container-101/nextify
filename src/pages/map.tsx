import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { Map } from '@components/common'

const MapPage: FC = () => {
  return (
    <PageLayout fullWidth fixedHeight>
      <div className="h-screen">
        <Map />
      </div>
    </PageLayout>
  )
}

export default MapPage
