import { SVG } from '@svgdotjs/svg.js'
import type { elements } from '.'
import { methods } from '@/shared'
import type { Theme } from '@/shared/theme'

export type SunVariant = typeof elements.sun[number]
interface SunProps {
  theme: Theme
  options: {
    variant: SunVariant
  }
}

export function sun({ theme, options }: SunProps) {
  const minMax = getSunMinMaxSize(options.variant)
  const size = methods.random(...minMax)
  const sunGroup = SVG().group()

  const sun = sunGroup
    .circle(size)
    .fill(theme.palette.sun)
    .stroke(theme.image.stroke)

  if (options.variant === 'with-dots') {
    const dotsCount = 12
    const radius = size * 1.1
    for (let i = 0; i < dotsCount; i++) {
      const angle = (i / dotsCount) * 2 * Math.PI
      const x = sun.cx() + radius * Math.cos(angle)
      const y = sun.cy() + radius * Math.sin(angle)
      sunGroup
        .circle(10)
        .fill(theme.palette.sun)
        .stroke(theme.image.stroke)
        .center(x, y)
    }
  }

  if (options.variant === 'with-lines') {
    const linesCount = 12
    const length = size * 1.1
    for (let i = 0; i < linesCount; i++) {
      const angle = (i / linesCount) * 2 * Math.PI
      const x1 = sun.cx() + length / 2 * Math.cos(angle)
      const y1 = sun.cy() + length / 2 * Math.sin(angle)
      const x2 = sun.cx() + length * Math.cos(angle)
      const y2 = sun.cy() + length * Math.sin(angle)
      sunGroup
        .line(x1, y1, x2, y2)
        .fill(theme.palette.sun)
        .stroke(theme.image.stroke)
    }
  }

  return sunGroup
}

function getSunMinMaxSize(variant: SunVariant): [number, number] {
  if (variant === 'sunset')
    return [300, 500]
  return [50, 200]
}
