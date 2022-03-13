import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { GoogleMaps } from '@components/common'

const MapPage: FC = () => {
  return (
    <PageLayout fullWidth fixedHeight>
      <div className="h-appHeight">
        <GoogleMaps />
      </div>
    </PageLayout>
  )
}

export default MapPage
