import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'

interface RainbowProps {
  theme: Theme
  options: {
    size: number
    width: number
  }
}

export function rainbow({ theme, options }: RainbowProps) {
  const group = SVG().group()

  for (let i = theme.palette.rainbow.length; i > 0; i--) {
    group
      .circle(options.size + i * options.width * 2)
      .fill(theme.palette.rainbow[i - 1])
      .stroke(theme.image.stroke)
      .center(0, 0)
  }
  group
    .circle(options.size)
    .fill(theme.palette.sky)
    .stroke(theme.image.stroke)
    .center(0, 0)

  return group
}
