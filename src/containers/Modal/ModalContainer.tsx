import React, { FC } from 'react'
import { useModal } from '@src/context/ModalContext'
import ModalPortal from './ModalPortal'
import { TModal } from '@interface/modal-type'
import { SignInModal } from '@components/modal'
import ModalBase from './ModalBase'

const ModalContainer: FC = () => {
  const { modal, modalTitle, closeModal } = useModal()

  const SelectRenderingModal: { [keys in TModal]: JSX.Element } = {
    SIGNUP: <div>abc</div>,
    SIGNIN: <SignInModal />,
  }

  return (
    <ModalPortal>
      <ModalBase title={modalTitle} show={modal ? true : false} onClose={closeModal}>
        {modal ? SelectRenderingModal[modal] : null}
      </ModalBase>
    </ModalPortal>
  )
}

export default ModalContainer
