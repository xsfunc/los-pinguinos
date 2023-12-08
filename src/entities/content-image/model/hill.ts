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
  return SVG()
    .rect(constants.canvas.width, options.height)
    .fill(color)
    .radius(options.height / 2, options.height / 2)
    .stroke(theme.image.stroke)
    .draggable()
}
