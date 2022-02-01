import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { useModal } from '@src/context/ModalContext'

const Home: FC = () => {
  const { openSignInModal } = useModal()

  const handleOnClick = () => {
    openSignInModal()
  }

  return (
    <PageLayout>
      <button onClick={handleOnClick}>abc</button>
    </PageLayout>
  )
}

export default Home
