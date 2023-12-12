import { SVG } from '@svgdotjs/svg.js'
import { createTheme } from '@/shared/theme'
import { createImage } from '@/entities/content-image'
import { constants, methods } from '@/shared'
import { createWindow } from '@/widget/window'
import { createStart } from '@/entities/start'
import { randomPattern } from '@/entities/pattern'
import { penguin } from '@/entities/penguin'

const titles = [
  'Kawazaki',
  'Cago',
  'Krico',
  'Estriper',
]
const { height, width } = constants.canvas
const canvas = SVG('#canvas').root()
const theme = createTheme()
const pattern = randomPattern(theme).addTo(canvas)

canvas // background
  .rect(width, height)
  .fill(pattern)

const windowCount = 1
for (let i = 0; i < windowCount; i++) {
  // const group = canvas.group().draggable()
  // const rect = group.rect(10, 10).fill('red')
  const image = createImage(theme)
  // .addTo(group)
  // const mask = canvas.mask()
  // const maskRect = group.rect(1000, 1000).fill('white').addTo(mask)
  // image.maskWith(mask)
  // group
  //   .scale(0.8)
  //   .on('dragmove', (e) => {
  //     maskRect.move(rect.x(), rect.y())
  //   })
  const windowSvg = createWindow({
    theme,
    options: {
      width,
      height,
      content: image,
      canvas,
    },
  })
  windowSvg
    .scale(0.9)
    .addTo(canvas)
}

const title = methods.sample(titles)
const start = createStart({ options: { title }, theme })
const pingo = penguin({ theme, options: { canvas } })

start
  .dy(height - Number(start.height()))
  .addTo(canvas)
pingo
  .move(10, height - Number(start.height()) - 102)
