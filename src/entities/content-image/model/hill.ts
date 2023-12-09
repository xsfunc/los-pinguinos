import { SVG } from '@svgdotjs/svg.js'
import type { elements } from '.'
import type { Theme } from '@/shared/theme'
import { constants, methods } from '@/shared'

export type HillVariant = typeof elements.hill[number]
interface HillProps {
  theme: Theme
  options: {
    variant: HillVariant
    height: number
  }
}
export function hill(props: HillProps) {
  const hillMap = {
    base: baseHill,
    round: roundHill,
  } as const
  const func = hillMap[props.options.variant]
  return func(props).draggable()
}

export function baseHill({ theme, options }: HillProps) {
  const color = methods.sample(theme.palette.hill)
  return SVG()
    .rect(constants.canvas.width, options.height)
    .fill(color)
    .stroke(theme.image.stroke)
    .draggable()
}

export function roundHill({ theme, options }: HillProps) {
  const color = methods.sample(theme.palette.hill)
  const dx = 0.5 * methods.random(-constants.canvas.width, constants.canvas.width)
  const dy = methods.random(0, options.height * 0.8)
  const group = SVG().group()
  baseHill({ theme, options })
    .addTo(group)
  group
    .rect(constants.canvas.width, options.height * 2)
    .fill(color)
    .radius(options.height / 2, options.height / 2)
    .stroke(theme.image.stroke)
    .move(dx, dy)
    .draggable()
  return group
}
