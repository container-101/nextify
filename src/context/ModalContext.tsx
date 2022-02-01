import React, { createContext, FC, useCallback, useContext, useState } from 'react'
import { TModal } from '@interface/modal-type'

interface IModalContext {
  modal: TModal | null
  modalOption: any
  openSignUpModal: () => void
  openSignInModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext>({
  modal: null,
  modalOption: null,
  openSignUpModal: () => {},
  openSignInModal: () => {},
  closeModal: () => {},
})

export const useModal = (): IModalContext => useContext(ModalContext)

export const ModalProvider: FC = ({ children }) => {
  const [modal, setModal] = useState<TModal | null>(null)
  const [modalOption, setModalOption] = useState<any>()

  const closeModal = useCallback(() => {
    setModal(null)
    setModalOption(null)
  }, [])

  const openModal = useCallback(
    (modal: TModal, modalOption?: any) => {
      closeModal()
      setModal(modal)
      setModalOption(modalOption)
    },
    [closeModal]
  )

  const openSignUpModal = useCallback(() => {
    openModal('SIGNUP', {})
  }, [openModal])

  const openSignInModal = useCallback(() => {
    openModal('SIGNIN', {})
  }, [openModal])

  return (
    <ModalContext.Provider
      value={{ modal, modalOption, openSignUpModal, openSignInModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
