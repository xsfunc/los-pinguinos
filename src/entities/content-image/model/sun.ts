import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import type { elements } from '.'
import type { Theme } from '@/shared/theme'

export type SunVariant = typeof elements.sun[number]
interface SunProps {
  theme: Theme
  options: {
    variant: SunVariant
    size: number
  }
}

export function sun({ theme, options }: SunProps) {
  const size = options.size
  const sunGroup = SVG().group()
  const sun = sunGroup
    .circle(size)
    .fill(theme.palette.sun)
    .stroke(theme.image.stroke)

  if (options.variant === 'with-dots') {
    const dotsCount = 12
    const radius = size * 0.6
    for (let i = 0; i < dotsCount; i++) {
      const angle = (i / dotsCount) * 2 * Math.PI
      const x = sun.cx() + radius * Math.cos(angle)
      const y = sun.cy() + radius * Math.sin(angle)
      sunGroup
        .circle(size / 10)
        .fill(theme.palette.sun)
        .stroke(theme.image.stroke)
        .center(x, y)
    }
  }

  if (options.variant === 'with-lines') {
    const linesCount = 12
    const length = size * 0.6
    for (let i = 0; i < linesCount; i++) {
      const angle = (i / linesCount) * 2 * Math.PI
      const x1 = sun.cx() + length * Math.cos(angle)
      const y1 = sun.cy() + length * Math.sin(angle)
      const x2 = sun.cx() + length * 1.2 * Math.cos(angle)
      const y2 = sun.cy() + length * 1.2 * Math.sin(angle)
      sunGroup
        .line(x1, y1, x2, y2)
        .fill(theme.palette.sun)
        .stroke(theme.image.stroke)
    }
  }

  return sunGroup.draggable()
}
