import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { Image } from '@src/components/common'
import { PageSEO } from '@src/components/common/SEO'
import siteMetadata from '@data/siteMetadata'

import { Button } from '@src/components/common'
import { useRootDispatch } from '@src/hooks/useRootState'
import { open } from '@src/store/modules/modal'

const LandingPage: FC = () => {
  const dispatch = useRootDispatch()

  return (
    <PageLayout fullWidth>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="relative w-full h-2/5 xl:h-3/5 bg-primary">
        <Image
          loading="eager"
          src="/static/banner.jpeg"
          layout="fill"
          objectFit="cover"
          alt="main_banner"
        />
      </div>
      <div className="max-w-appMaxWidth mx-auto px-4">
        <div className="flex gap-2">
          <Button
            onClick={() => {
              dispatch(
                open({
                  name: 'SIGNIN',
                  title: 'Sign In',
                })
              )
            }}
          >
            Open Signin
          </Button>
          <Button
            onClick={() => {
              dispatch(
                open({
                  name: 'SIGNUP',
                  title: 'Sign Up',
                })
              )
            }}
          >
            Open Signup
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

export default LandingPage
