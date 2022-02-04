import { useState, useEffect, useRef } from 'react'
import { GPSLocationShape } from '@interface/map-shape'

const useWatchLocation = (options = {}) => {
  const [location, setLocation] = useState<GPSLocationShape>(null)
  const [error, setError] = useState<string>('')
  const locationWatchId = useRef(null)

  const handleSuccess: PositionCallback = (pos) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
    })
  }

  const handleError: PositionErrorCallback = (error) => {
    setError(error.message)
  }

  const cancelLocationWatch = () => {
    const { geolocation } = navigator

    if (locationWatchId.current && geolocation) {
      geolocation.clearWatch(locationWatchId.current)
    }
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    locationWatchId.current = geolocation.watchPosition(handleSuccess, handleError, options)

    return cancelLocationWatch
  }, [options])

  return { location, cancelLocationWatch, error }
}

export default useWatchLocation
