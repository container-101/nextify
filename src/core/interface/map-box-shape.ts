export interface GPSLocationShape {
  latitude: number
  longitude: number
}

export interface MapBoxMarkerPropsShape {
  latitude: number
  longitude: number
  profileImage?: string | null
  onClick?: () => void
}
