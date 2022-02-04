import React, { useEffect, useRef } from 'react'
import styles from './Map.module.scss'
import { Loader } from '@googlemaps/js-api-loader'

const Map = () => {
  const googlemap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
      version: 'weekly',
    })
    loader.load().then(() => {
      const google = window.google
      new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
    })
  }, [])

  return <div id="map" ref={googlemap} className={styles.map} />
}

export default Map
