import React, { FC } from 'react'
import { PageLayout } from '@components/layout'
import { Image } from '@src/components/common'
import { PageSEO } from '@src/components/common/SEO'
import siteMetadata from '@data/siteMetadata'

const LandingPage: FC = () => {
  return (
    <PageLayout>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="absolute top-0 left-0 w-full h-96 bg-primary md:h-3/5">
        <Image
          loading="eager"
          src="/static/banner.jpeg"
          layout="fill"
          objectFit="cover"
          alt="main_banner"
        />
      </div>
    </PageLayout>
  )
}

export default LandingPage
