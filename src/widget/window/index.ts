import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import type { Container, Element } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'

interface WindowProps {
  theme: Theme
  options: {
    title?: string
    content: Element
    canvas: Container
    width: number
    height: number
  }
}

export function createWindow({ theme, options }: WindowProps) {
  const { height, width } = options
  const group = SVG().group().draggable()
  const mask = options.canvas.mask()

  const title = group
    .rect(width, theme.window.titleSize)
    .dy(-theme.window.titleSize)
    .fill('white')
    .css('cursor', 'pointer')
    .stroke(theme.window.strokeOptions)
    .radius(theme.window.radius)

  group // frame
    .rect(width, height)
    .fill({ opacity: 0 })
    .stroke(theme.window.strokeOptions)
    .radius(theme.window.radius)

  const frameMask = group
    .rect(width, height)
    .fill('white')
    .stroke({ ...theme.window.strokeOptions, color: 'black' })
    .radius(theme.window.radius)
    .addTo(mask)

  options.content
    .maskWith(mask)
    .addTo(group)

  group
    .on('dragmove', () => {
      frameMask.move(title.x(), Number(title.y()) + theme.window.titleSize)
    })

  const closeControl = group
    .circle(theme.window.controlSize)
    .fill(theme.window.mainColor)
    .css('cursor', 'pointer')
    .dy(theme.window.controlGap)
    .dy(-theme.window.titleSize)
    .dx(theme.window.controlGap)
  const minControl = closeControl
    .clone()
    .addTo(group)
    .fill(theme.window.backColor)
    .dx(theme.window.controlSize + theme.window.controlGap)
  // max control
  minControl
    .clone()
    .addTo(group)
    .fill(theme.window.secondaryColor)
    .dx(theme.window.controlSize + theme.window.controlGap)

  closeControl.on('click', () => group.hide())

  return group
}
