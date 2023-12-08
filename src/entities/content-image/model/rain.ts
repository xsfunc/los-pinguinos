import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

interface RainProps {
  theme: Theme
  options: {
    size: number
    gap?: number
    angle?: number
    count?: number
  }
}

export function rain({ theme, options }: RainProps) {
  const group = SVG().group()
  const angle = options.angle || methods.sample([45, -45, 60, -60])
  const gap = options.gap || options.size / 3
  const count = options.count || 10
  const element = group
    .line([0, 0, options.size, 0])
    .stroke(theme.image.stroke)
    .rotate(angle)

  for (let i = 1; i < count; i++) {
    const clone = element.clone()
      .dy(gap * i)
      .addTo(group)
    if (i % 2 !== 0)
      clone.dx(options.size + gap)
  }

  return group
}
