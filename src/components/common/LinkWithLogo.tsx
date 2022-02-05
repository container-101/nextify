import { FC, memo } from 'react'
import { Link, Image } from '.'

interface LinkWithLogoShape {
  path: string
  logoSrc: string
  alt: string
  width: number
  height: number
}

const LinkWithLogo: FC<LinkWithLogoShape> = ({ path, logoSrc, alt, width, height }) => {
  return (
    <div className="flex justify-center align-center">
      <Link href={path} className={`w-${width / 4} h-${height / 4}`}>
        <Image className="cursor-pointer" src={logoSrc} width={width} height={height} alt={alt} />
      </Link>
    </div>
  )
}

export default memo(LinkWithLogo)
