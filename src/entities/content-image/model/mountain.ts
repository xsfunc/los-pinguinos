import type { ArrayXY } from '@svgdotjs/svg.js'
import { SVG } from '@svgdotjs/svg.js'
import type { elements } from '.'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

export type MountainVariant = typeof elements.mountain[number]
interface MountainProps {
  theme: Theme
  options: {
    variant: MountainVariant
    size: number
  }
}

export function mountain(props: MountainProps) {
  const mountainMap = {
    base: baseMountain,
  } as const
  const func = mountainMap[props.options.variant]
  return func(props).draggable()
}

function baseMountain({ theme, options }: MountainProps) {
  const { size } = options
  const vertices: ArrayXY[] = [
    [0, 0],
    [size / 2, -size],
    [size, 0],
  ]

  const splinePath = methods.spline(vertices, 1, true)
  return SVG()
    .path(splinePath)
    .fill(theme.palette.mountain)
    .stroke(theme.image.stroke)
    .draggable()
}
