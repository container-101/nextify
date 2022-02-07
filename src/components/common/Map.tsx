import React, { Fragment, useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import useGPSLocation from '@src/hooks/useGPSLocation'
import { Button } from '.'

//
// Should use Layout:fixedHeight if you want to show full screen map
//
const Map = () => {
  const googlemap = useRef<HTMLDivElement>(null)
  const { location } = useGPSLocation()

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
      version: 'weekly',
    })
    loader.load().then(() => {
      const google = window.google
      new google.maps.Map(googlemap.current, {
        center: { lat: location.latitude, lng: location.longitude },
        zoom: 14,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        gestureHandling: 'greedy',
      })
    })
  }, [])

  return <div id="map" ref={googlemap} className="h-full" />
}

export default Map
