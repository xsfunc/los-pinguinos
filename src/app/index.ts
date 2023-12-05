import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import { createWindow } from '@/widget/window'

const canvas = SVG()
  .addTo('body')
  .size(1000, 1000)
  .fill('#ccc')

const windowCount = 2
for (let i = 0; i < windowCount; i++) {
  const windowSvg = createWindow()
  windowSvg.addTo(canvas)
}
