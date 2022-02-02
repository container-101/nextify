import { Button, Map } from '@components/common'
import { useModal } from '@src/context/ModalContext'
import useGPSLocation from '@hooks/useGPSLocation'
import React, { FC, Fragment } from 'react'
import { geolocationOptions } from '@src/utils/geolocation'

const SpecPage: FC = () => {
  const { openSignInModal, openSignUpModal } = useModal()
  const { location, error } = useGPSLocation(geolocationOptions)

  return (
    <Fragment>
      {/* <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }}>
        <Button btnSize="medium" btnStyles="primary" onClick={() => openSignUpModal()}>
          open signup modal
        </Button>
        <Button btnSize="medium" btnStyles="primary" onClick={() => openSignInModal()}>
          open signin modal
        </Button>
      </div> */}
      <div style={{ width: '1000px' }}>
        <Map location={location} />
      </div>
    </Fragment>
  )
}

export default SpecPage
