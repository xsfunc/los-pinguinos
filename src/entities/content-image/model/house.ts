import type { ArrayXY } from '@svgdotjs/svg.js'
import { SVG } from '@svgdotjs/svg.js'
import type { elements } from '.'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

export type HouseVariant = typeof elements.house[number]
interface HouseProps {
  theme: Theme
  options: {
    variant: HouseVariant
  }
}

export function house(props: HouseProps) {
  const houseMap = {
    square: squareHouse,
    triangle: triangleHouse,
  } as const
  const func = houseMap[props.options.variant]
  return func(props)
}

function squareHouse({ theme }: HouseProps) {
  const width = methods.random(100, 200)
  const height = methods.random(100, 200)
  const houseGroup = SVG().group()
  const main = houseGroup
    .rect(width, height)
    .radius(width / 10)
    .fill(theme.palette.house.main)
    .stroke(theme.image.stroke)

  houseGroup // window
    .rect(width / 4, width / 4)
    .fill(theme.palette.house.window)
    .stroke(theme.image.stroke)
    .radius(4)
    .y(height / 2)
    .cx(main.cx())

  return houseGroup
}

function triangleHouse({ theme }: HouseProps) {
  const size = methods.random(50, 80)
  const houseGroup = SVG().group()
  const vertices: ArrayXY[] = [
    [0, 0],
    [size / 2, -size],
    [size, 0],
  ]
  const splinePath = methods.spline(vertices, 1, true)
  const main = houseGroup
    .path(splinePath)
    .fill(theme.palette.house.main)
    .stroke(theme.image.stroke)

  houseGroup // window
    .rect(size / 4, size / 4)
    .fill(theme.palette.house.window)
    .stroke(theme.image.stroke)
    .radius(size / 8)
    .y(-size / 5)
    .cx(main.cx())

  return houseGroup
}
