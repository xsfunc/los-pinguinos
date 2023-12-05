import './style.css'
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'

const draw = SVG()
  .addTo('body')
  .size(1000, 1000)

const rect = draw
  .rect(100, 100)
  .fill('red')

rect.draggable()
