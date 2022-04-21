import React, { FC } from 'react'
import ModalPortal from './ModalPortal'
import ModalBase from './ModalBase'
import { SignInModal, SignUpModal } from './Content'
import { ModalType } from '@src/interface/modal-type'
import { useRootDispatch, useRootState } from '@src/hooks/useRootState'
import { close } from '@src/store/modules/modal'

const selectRenderingModal: { [keys in ModalType]: JSX.Element } = {
  SIGNUP: <SignUpModal />,
  SIGNIN: <SignInModal />,
}

const ModalContainer: FC = () => {
  const modal = useRootState((state) => state.modal)
  const dispatch = useRootDispatch()

  return (
    <ModalPortal>
      <ModalBase
        title={modal.title}
        show={modal.name ? true : false}
        onClose={() => {
          dispatch(close())
        }}
      >
        {modal.name && selectRenderingModal[modal.name]}
      </ModalBase>
    </ModalPortal>
  )
}

export default ModalContainer
