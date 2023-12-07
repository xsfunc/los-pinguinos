import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import { methods } from '@/shared'
import type { Theme } from '@/shared/theme'

interface WindowProps {
  theme: Theme
  options: {
    title: string
  }
}

export function createWindow({ theme, options }: WindowProps) {
  const width = methods.getRandom(500, 900)
  const height = methods.getRandom(300, Math.min(width, 600))
  const group = SVG()
    .group()
    .draggable()

  const frame = group
    .rect(width, height)
    .css('cursor', 'pointer')
    .fill('#ccc')
    .stroke(theme.window.strokeOptions)
    .radius(theme.window.radius)

  const title = group
    .rect(width, theme.window.titleSize)
    .fill('white')
    .css('cursor', 'pointer')
    .stroke(theme.window.strokeOptions)
    .radius(theme.window.radius)

  const closeControl = group
    .circle(theme.window.controlSize)
    .fill('red')
    .css('cursor', 'pointer')
    .dy(theme.window.controlGap)
    .dx(theme.window.controlGap)
  const minControl = closeControl
    .clone()
    .addTo(group)
    .fill('yellow')
    .dx(theme.window.controlSize + theme.window.controlGap)
  const maxControl = minControl
    .clone()
    .addTo(group)
    .fill('green')
    .dx(theme.window.controlSize + theme.window.controlGap)

  return group
}
