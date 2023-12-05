import { SVG } from '@svgdotjs/svg.js'

// const themes = ['minimal', 'round', 'stroke', 'square', 'brutal']

export function createWindow() {
  return SVG()
    .rect(100, 100)
    .fill('red')
    .draggable()
}
