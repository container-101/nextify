import React, { FC } from 'react'
import ModalPortal from './ModalPortal'
import { ModalShape } from '@interface/modal-type'
import { SignInModal, SignUpModal } from '@components/modal'
import ModalBase from './ModalBase'
import { useCloseModal, useModalInfo, useModalTitle } from '@src/context/ModalContext'

const ModalContainer: FC = () => {
  const modalInfo = useModalInfo()
  const modalTitle = useModalTitle()
  const closeModal = useCloseModal()

  const SelectRenderingModal: { [keys in ModalShape]: JSX.Element } = {
    SIGNUP: <SignUpModal />,
    SIGNIN: <SignInModal />,
  }

  return (
    <ModalPortal>
      <ModalBase title={modalTitle} show={modalInfo ? true : false} onClose={closeModal}>
        {modalInfo ? SelectRenderingModal[modalInfo] : null}
      </ModalBase>
    </ModalPortal>
  )
}

export default ModalContainer
