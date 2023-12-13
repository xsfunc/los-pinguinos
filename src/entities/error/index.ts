import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

interface ToastProps {
  theme: Theme
  options: {
    height: number
    width: number
  }
}

export function createError({ theme, options }: ToastProps) {
  const code = methods.random(0, 499)
  const text = SVG()
    .text(`Error code: 0x${code.toString(16)}`)
    .fill(theme.window.strokeOptions.color)
    .font({
      anchor: 'middle',
      family: 'monospace',
      weight: 'bold',
      size: 20,
    })
    .center(options.width / 2, options.height / 2)

  return text
}
