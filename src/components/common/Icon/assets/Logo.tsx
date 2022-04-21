import classnames from 'classnames'
import { FC } from 'react'
import Svg from '../../SVG/Svg'

const LogoSVG: FC<{
  className?: string
  width?: number
  height?: number
}> = ({ className, ...props }) => {
  return (
    <Svg
      {...props}
      className={classnames('text-gray-900 dark:text-gray-100', className)}
      viewBox="0 0 128 128"
      fill="currentColor"
    >
      <g transform="translate(0.000000,116.000000) scale(0.100000,-0.100000)">
        <path
          d="M523 1126 c-181 -44 -334 -202 -372 -384 -35 -166 15 -330 138 -453
199 -199 503 -199 702 0 199 199 199 503 0 702 -126 126 -299 176 -468 135z
m259 -57 c191 -64 308 -227 308 -429 0 -256 -194 -450 -450 -450 -256 0 -450
194 -450 450 0 200 116 364 305 429 82 28 204 28 287 0z"
        />
        <path
          d="M533 1006 c-104 -34 -194 -114 -241 -214 -23 -49 -27 -70 -27 -152 0
-87 3 -101 32 -161 39 -80 111 -150 191 -187 49 -23 70 -27 152 -27 87 0 101
3 161 32 80 39 150 111 187 191 23 49 27 70 27 152 0 82 -4 103 -27 152 -37
79 -108 152 -185 190 -54 26 -79 32 -146 35 -51 2 -98 -2 -124 -11z m89 -93
c2 -44 7 -58 18 -58 11 0 16 14 18 58 3 53 5 57 27 57 53 0 136 -42 190 -95
53 -54 95 -137 95 -190 0 -22 -4 -24 -57 -27 -44 -2 -58 -7 -58 -18 0 -11 14
-16 58 -18 53 -3 57 -5 57 -27 0 -53 -42 -136 -95 -190 -54 -53 -137 -95 -190
-95 -22 0 -24 4 -27 58 -2 43 -7 57 -18 57 -11 0 -16 -14 -18 -57 -3 -54 -5
-58 -27 -58 -53 0 -136 42 -190 95 -53 54 -95 137 -95 190 0 22 4 24 58 27 43
2 57 7 57 18 0 11 -14 16 -57 18 -54 3 -58 5 -58 27 0 13 9 50 21 80 38 103
166 203 261 204 26 1 27 -1 30 -56z"
        />
        <path
          d="M664 839 c-8 -13 12 -32 64 -61 17 -9 42 -35 57 -58 26 -42 47 -48
53 -16 11 57 -146 180 -174 135z"
        />
        <path
          d="M513 754 c-3 -9 5 -26 21 -43 19 -20 26 -38 26 -67 0 -54 31 -84 86
-84 33 0 46 -7 74 -35 37 -38 70 -46 70 -17 0 10 -16 33 -35 52 -29 28 -35 41
-35 75 0 55 -31 85 -86 85 -30 0 -47 6 -64 25 -27 29 -48 32 -57 9z m157 -89
c26 -32 -13 -81 -47 -59 -35 22 -23 74 17 74 10 0 23 -7 30 -15z"
        />
      </g>
    </Svg>
  )
}

export default LogoSVG
