import React, { FC, memo } from 'react'
import { Marker } from 'react-map-gl'
import { MapBoxMarkerPropsShape } from '@interface/map-box-shape'
import styles from './MapBoxMarker.module.scss'
import { Image } from '..'

const MapBoxMarker: FC<MapBoxMarkerPropsShape> = ({
  latitude,
  longitude,
  profileImage,
  onClick,
}) => {
  return (
    <Marker latitude={latitude} longitude={longitude}>
      <button className={styles.marker} onClick={onClick}>
        <div className={styles.icon}>
          <Image src={profileImage} width={45} height={45} alt="img" />
        </div>
      </button>
    </Marker>
  )
}

export default memo(MapBoxMarker)
