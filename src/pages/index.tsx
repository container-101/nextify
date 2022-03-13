import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { Button } from '@src/components/common'
import { useSignInModal, useSignUpModal } from '@src/context/ModalContext'

const HomePage: FC = () => {
  const openSignUpModal = useSignUpModal()
  const openSignInModal = useSignInModal()

  return (
    <PageLayout disableTransition>
      <h1>Home Example</h1>
      <div className="flex flex-col space-y-10">
        <Button btnSize="small" onClick={() => openSignUpModal()}>
          Open SignUp Modal
        </Button>
        <Button btnSize="small" onClick={() => openSignInModal()}>
          Open SignIn Modal
        </Button>
      </div>
    </PageLayout>
  )
}

export default HomePage
