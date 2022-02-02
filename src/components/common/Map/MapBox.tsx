import React, { FC, useEffect, useState } from 'react'
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl'
import type { GPSLocationShape } from '@interface/map-box-shape'
import styles from './MapBox.module.scss'

interface MapShape {
  mapWidth?: string
  mapHeight?: string
  location: GPSLocationShape
}

const Map: FC<MapShape> = ({ mapWidth = '100%', mapHeight = '100%', location }) => {
  const [viewPort, setViewPort] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    width: mapWidth,
    height: mapHeight,
    zoom: 13,
  })

  return (
    <div className={styles.mapbox}>
      <ReactMapGL
        {...viewPort}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        transitionInterpolator={new FlyToInterpolator()}
        onViewportChange={(viewport) => setViewPort(viewport)}
      />
    </div>
  )
}

export default Map
