import type { ArrayXY } from '@svgdotjs/svg.js'
import { SVG } from '@svgdotjs/svg.js'
import type { elements } from '.'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

export type TreeVariant = typeof elements.tree[number]
interface TreeProps {
  theme: Theme
  options: {
    variant: TreeVariant
  }
}

export function tree(props: TreeProps) {
  const treeMap = {
    circle: circleTree,
    square: squareTree,
    triangle: triangleTree,
  } as const
  const treeFunction = treeMap[props.options.variant]
  return treeFunction(props)
}

function circleTree({ theme }: TreeProps) {
  const size = methods.random(100, 200)
  const treeGroup = SVG().group()
  const leaves = treeGroup
    .circle(size)
    .fill(theme.palette.tree)
    .stroke(theme.image.stroke)

  treeGroup // trunk
    .line([[0, 0], [0, size]])
    .fill(theme.palette.tree)
    .stroke(theme.image.stroke)
    .y(leaves.cy())
    .cx(leaves.cx())

  return treeGroup
}

function squareTree({ theme }: TreeProps) {
  const width = methods.random(100, 200)
  const height = methods.random(100, 200)
  const treeGroup = SVG().group()
  const leaves = treeGroup
    .rect(width, height)
    .radius(width / 10)
    .fill(theme.palette.tree)
    .stroke(theme.image.stroke)

  treeGroup
    .line([[0, 0], [0, height / 1.4]])
    .fill(theme.palette.tree)
    .stroke(theme.image.stroke)
    .y(leaves.cy())
    .cx(leaves.cx())

  return treeGroup
}

function triangleTree({ theme }: TreeProps) {
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
