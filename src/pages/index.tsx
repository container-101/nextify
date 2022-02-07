import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { Button } from '@components/common'
import { useSignInModal, useSignUpModal } from '@src/context/ModalContext'

const HomePage: FC = () => {
  const openSignInModal = useSignInModal()
  const openSignUpModal = useSignUpModal()

  return (
    <PageLayout>
      <div className="flex justify-center">
        <div className="inline-flex flex-col space-y-10">
          <Button btnSize="large" btnStyles="primary" onClick={() => openSignInModal()}>
            SignIn
          </Button>
          <Button btnSize="large" btnStyles="primary" onClick={() => openSignUpModal()}>
            SignUp
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

export default HomePage
