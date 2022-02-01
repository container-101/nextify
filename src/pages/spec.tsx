import { Button } from '@src/components/common'
import { useModal } from '@src/context/ModalContext'
import React, { FC } from 'react'

const SpecPage: FC = () => {
  const { openSignInModal, openSignUpModal } = useModal()

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }}>
      <Button btnSize="medium" btnStyles="primary" onClick={() => openSignUpModal()}>
        open signup modal
      </Button>
      <Button btnSize="medium" btnStyles="primary" onClick={() => openSignInModal()}>
        open signin modal
      </Button>
    </div>
  )
}

export default SpecPage
