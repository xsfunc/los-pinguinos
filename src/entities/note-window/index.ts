import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import { notes } from './notes'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

interface IconProps {
  theme: Theme
}

export function createNote({ theme }: IconProps) {
  const note = methods.sample(notes)
  const group = SVG()
    .group()
    .draggable()

  group
    .text(add => note?.forEach(line => add.tspan(line).newLine()))
    .font({
      anchor: 'start',
      family: 'Helvetica',
      size: theme.icon.fontSize,
    })

  return group
}
