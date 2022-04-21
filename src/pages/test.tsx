import { Button } from '@src/components/common'
import Carousel from '@src/components/common/Carousel/Carousel'
import { PageLayout } from '@src/components/layout'
import { useRootDispatch } from '@src/hooks/useRootState'
import { open } from '@src/store/modules/modal'
import { images } from '@data/sample-images'
import { Image } from '@components/common'

const TestPage = () => {
  const dispatch = useRootDispatch()

  return (
    <PageLayout headerFixed>
      <div className="flex flex-col space-y-5">
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
        {/* Example for Carousel */}
        <div className="sm:w-[600px] w-full h-[300px]">
          <Carousel>
            {images.map((image, index) => {
              return (
                <div key={`carousel-item-${index}`}>
                  <Image src={image} layout="fill" alt="" />
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </PageLayout>
  )
}

export default TestPage
