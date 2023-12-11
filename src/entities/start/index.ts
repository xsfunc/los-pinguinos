import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'
import { constants } from '@/shared'

interface StartProps {
  theme: Theme
  options: {
    title: string
  }
}

export function createStart({ theme, options }: StartProps) {
  const height = theme.window.controlSize * 2
  const buttonWidth = 150
  const group = SVG().group()
  const gap = 15

  group // panel
    .rect(constants.canvas.width, height)
    .radius(theme.window.radius)
    .fill(theme.palette.sky)
  const buttonFrame = group
    .rect(buttonWidth, height)
    .radius(theme.window.radius)
    .fill(theme.palette.house.main)
    .stroke(theme.window.strokeOptions)

  group
    .text(options.title)
    .font({
      anchor: 'start',
      family: 'monospace',
      weight: 'bold',
      size: 20,
    })
    .dx(gap)
    .cy(buttonFrame.cy())

  const time = group
    .text(getTimeText())
    .font({
      anchor: 'start',
      family: 'monospace',
      weight: 'bold',
      size: 20,
    })
    .cy(buttonFrame.cy())

  time.dx(constants.canvas.width - time.bbox().width - gap)
  setInterval(() => time.text(getTimeText()), 1000)
  return group
}

function getTimeText() {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(Date.now())
}
