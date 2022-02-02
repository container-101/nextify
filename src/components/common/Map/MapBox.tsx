import React, { FC, useState } from 'react'
import ReactMapGL, { Popup, FlyToInterpolator } from 'react-map-gl'
import type { GPSLocationShape } from '@interface/map-box-shape'
import styles from './MapBox.module.scss'
import useWindowSize from '@src/hooks/useWindowSize'

interface MapShape {
  location: GPSLocationShape
}

const Map: FC<MapShape> = ({ location }) => {
  const { width, height } = useWindowSize(1000)
  const [viewPort, setViewPort] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    zoom: 13,
  })

  return (
    <div className={styles.mapbox}>
      <ReactMapGL
        {...viewPort}
        width={width}
        height={height}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        transitionInterpolator={new FlyToInterpolator()}
        onViewportChange={(viewport) => setViewPort(viewport)}
      />
    </div>
  )
}

export default Map
