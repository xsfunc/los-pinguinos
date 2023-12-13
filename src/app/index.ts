import { SVG } from '@svgdotjs/svg.js'
import { createTheme } from '@/shared/theme'
import { createImage } from '@/entities/content-image'
import { constants, methods } from '@/shared'
import { createWindow } from '@/widget/window'
import { createStart } from '@/entities/start'
import { randomPattern } from '@/entities/pattern'
import { penguin } from '@/entities/penguin'
import { createToast } from '@/entities/toast'

const titles = [
  'Kawazaki',
  'Cago',
  'Krico',
  'Estriper',
] as const
const { height, width } = constants.canvas
const canvas = SVG('#canvas').root()
const theme = createTheme()
const pattern = randomPattern(theme).addTo(canvas)

canvas // background
  .rect(width, height)
  .fill(pattern)

const windowCount = 1
for (let i = 0; i < windowCount; i++) {
  const image = createImage(theme)
  createWindow({
    theme,
    options: {
      width,
      height,
      content: image,
      canvas,
    },
  })
    .scale(0.9)
    .addTo(canvas)
}

const penguinName = methods.sample(titles)
const start = createStart({ options: { title: penguinName }, theme })
const pingo = penguin({ theme, options: { canvas, hasBra: penguinName === 'Estriper' } })
const hasToast = methods.random(0, 10) < 3

start
  .dy(height - Number(start.height()))
  .addTo(canvas)
pingo
  .move(10, height - Number(start.height()) - 102)

if (hasToast) {
  const toast = createToast({ theme })
  setTimeout(() => toast.hide(), 30000)
  toast
    .move(width - Number(toast.width()) - 10, height - Number(toast.height()) - Number(start.height()) - 10)
    .addTo(canvas)
}

$fx.features({
  'Penguin': penguinName,
  'Has notification': hasToast,
  'Palette': theme.palette.index,
})
