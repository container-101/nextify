import React, { createContext, FC, useCallback, useContext, useState } from 'react'
import { TModal } from '@interface/modal-type'

interface IModalContext {
  modal: TModal | null
  modalOption: any
  modalTitle: string | null
  openSignUpModal: () => void
  openSignInModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext>({
  modal: null,
  modalOption: null,
  modalTitle: null,
  openSignUpModal: () => {},
  openSignInModal: () => {},
  closeModal: () => {},
})

export const useModal = (): IModalContext => useContext(ModalContext)

export const ModalProvider: FC = ({ children }) => {
  const [modal, setModal] = useState<TModal | null>(null)
  const [modalTitle, setModalTitle] = useState<string>(null)
  const [modalOption, setModalOption] = useState<any>(null)

  const closeModal = useCallback(() => {
    setModal(null)
    setModalTitle(null)
    setModalOption(null)
  }, [])

  const openModal = useCallback(
    (modal: TModal, modalTitle?: string, modalOption?: any) => {
      closeModal()
      setModal(modal)
      setModalTitle(modalTitle)
      setModalOption(modalOption)
    },
    [closeModal]
  )

  const openSignUpModal = useCallback(
    (modalTitle?: string) => {
      openModal('SIGNUP', modalTitle, {})
    },
    [openModal]
  )

  const openSignInModal = useCallback(
    (modalTitle?: string) => {
      openModal('SIGNIN', modalTitle, {})
    },
    [openModal]
  )

  return (
    <ModalContext.Provider
      value={{ modal, modalTitle, modalOption, openSignUpModal, openSignInModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
