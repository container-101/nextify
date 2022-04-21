import { GPSLocationShape } from '@src/interface/map-shape'
import { useCallback, useEffect, useState } from 'react'
import { geolocationOptions } from '@utils/geolocation'

const useGPSLocation = (options: PositionOptions = geolocationOptions) => {
  const [location, setLocation] = useState<GPSLocationShape>({
    latitude: 37.5053846,
    longitude: 126.9565713,
  })
  const [error, setError] = useState<string>('')

  const handleSuccess: PositionCallback = useCallback((pos) => {
    const { latitude, longitude } = pos.coords
    setLocation({ latitude, longitude })
  }, [])

  const handleError: PositionErrorCallback = useCallback((e) => {
    setError(e.message)
  }, [])

  const updateLocation = useCallback(() => {
    const { geolocation } = navigator
    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [handleError, handleSuccess, options])

  useEffect(() => {
    updateLocation()
  }, [handleError, handleSuccess, options, updateLocation])

  return { location, error }
}

export default useGPSLocation
