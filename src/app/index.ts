import { SVG } from '@svgdotjs/svg.js'
import { createTheme } from '@/shared/theme'
import { createImage } from '@/entities/content-image'
import { constants, methods } from '@/shared'
import { createWindow } from '@/widget/window'
import { createStart } from '@/entities/start'
import { randomPattern } from '@/entities/pattern'
import { penguin } from '@/entities/penguin'
import { createToast } from '@/entities/toast'
import { createError } from '@/entities/error'

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
  const content = createImage(theme)
  const mask = canvas.mask()
  createWindow({
    theme,
    options: {
      width,
      height,
      mask,
      content,
    },
  })
    .scale(0.9)
    .addTo(canvas)
}

const hasError = methods.randomBoolean(0.05)
if (hasError) {
  const errorCount = methods.random(1, 3)
  const width = 250
  const height = 100
  const cx = 400
  const cy = methods.random(500, 600)

  for (let i = 0; i < errorCount; i++) {
    const offset = 20 * i
    const content = createError({ theme, options: { height, width } })
    createWindow({
      theme,
      options: {
        width,
        height,
        content,
      },
    })
      .addTo(canvas)
      .move(cx + offset, cy + offset)
  }
}

const penguinName = methods.sample(titles)
const start = createStart({ options: { title: penguinName }, theme })
const pingo = penguin({ theme, options: { canvas, hasBra: penguinName === 'Estriper' } })
const hasToast = methods.randomBoolean(0.3)

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
  'Has error': hasError,
  'Palette': theme.palette.index,
})
