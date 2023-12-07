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
  }
}

export function mountain(props: MountainProps) {
  const mountainMap = {
    base: baseMountain,
  } as const
  const func = mountainMap[props.options.variant]
  return func(props)
}

function baseMountain({ theme }: MountainProps) {
  const size = methods.random(50, 80)
  const treeGroup = SVG().group()
  const vertices: ArrayXY[] = [
    [0, 0],
    [size / 2, -size],
    [size, 0],
  ]

  const splinePath = methods.spline(vertices, 1, true)
  const triangleCount = methods.random(2, 3)
  for (let i = 0; i < triangleCount; i++) {
    treeGroup
      .path(splinePath)
      .fill(theme.palette.tree)
      .stroke(theme.image.stroke)
      .dy(-i * size * 0.7)
  }

  return treeGroup
}
