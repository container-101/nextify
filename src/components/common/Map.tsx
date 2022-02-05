import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

// Should use Layout:fixedHeight if you want to show full screen map
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
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
      })
    })
  }, [])

  return <div id="map" ref={googlemap} className="flex w-full h-full" />
}

export default Map
