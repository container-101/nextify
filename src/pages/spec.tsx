import { Button, Map } from '@components/common'
import { useModal } from '@src/context/ModalContext'
import useGPSLocation from '@hooks/useGPSLocation'
import React, { FC } from 'react'
import { geolocationOptions } from '@src/utils/geolocation'
import { PageLayout } from '@components/layout'

const SpecPage: FC = () => {
  const { openSignInModal, openSignUpModal } = useModal()
  const { location, error } = useGPSLocation(geolocationOptions)

  return (
    <PageLayout fullWidth fixedHeight>
      {/* <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }}>
        <Button btnSize="medium" btnStyles="primary" onClick={() => openSignUpModal()}>
          open signup modal
        </Button>
        <Button btnSize="medium" btnStyles="primary" onClick={() => openSignInModal()}>
          open signin modal
        </Button>
      </div> */}
      <Map location={location} />
    </PageLayout>
  )
}

export default SpecPage
