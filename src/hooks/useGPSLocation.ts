import { GPSLocationShape } from '@interface/map-box-shape'
import { useCallback, useEffect, useState } from 'react'

const useGPSLocation = (options: PositionOptions) => {
  const [location, setGPSLocation] = useState<GPSLocationShape>({
    latitude: 37.5053846,
    longitude: 126.9565713,
  })
  const [error, setError] = useState<string>('')

  const handleSuccess: PositionCallback = useCallback((pos) => {
    const { latitude, longitude } = pos.coords
    setGPSLocation({ latitude, longitude })
  }, [])

  const handleError: PositionErrorCallback = useCallback((e) => {
    setError(e.message)
  }, [])

  useEffect(() => {
    const { geolocation } = navigator
    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [handleError, handleSuccess, options])

  return { location, error }
}

export default useGPSLocation
