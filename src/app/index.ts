import { SVG } from '@svgdotjs/svg.js'
import { createTheme } from '@/shared/theme'
import { createImage } from '@/entities/content-image'
import { constants, methods } from '@/shared'
import { createWindow } from '@/widget/window'
import { createStart } from '@/entities/start'

const { height, width } = constants.canvas
const canvas = SVG('#canvas').root()
// .addTo('#canvas')
// .size('100%', '100%')
// .viewbox(0, 0, width, height)

const theme = createTheme()
// const image = createImage(theme)
// image.addTo(canvas)

const titles = [
  'Kawazaki',
  'Cago',
  'Krico',
  'Estriper',
]
const title = methods.sample(titles)
const start = createStart({
  options: { title },
  theme,
})

start
  .dy(height - Number(start.height()))
  .addTo(canvas)

const iconsList = [
  {
    title: 'fxhash.xyz',
    iconText: 'fx',
  },
  {
    title: 'xshash.xyz',
    iconText: 'xs',
  },
]

// for (const iconOptions of iconsList) {
//   createIcon({ theme, iconOptions })
//     .addTo(canvas)
// }

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
    options: { title: 'fx', content: image, canvas },
    theme,
  })
  windowSvg.addTo(canvas)
}

// elementsFactory.sun({ theme, options: { variant: 'with-dots' } })
//   .cx(500)
//   .cy(500)
//   .addTo(canvas)

// elementsFactory.sun({ theme, options: { variant: 'with-lines' } })
//   .cx(100)
//   .cy(100)
//   .addTo(canvas)

// elementsFactory.tree({ theme, options: { variant: 'square' } })
//   .cx(200)
//   .cy(200)
//   .addTo(canvas)
// elementsFactory.tree({ theme, options: { variant: 'circle' } })
//   .cx(300)
//   .cy(200)
//   .addTo(canvas)
// elementsFactory.house({ theme, options: { variant: 'square' } })
//   .cx(400)
//   .cy(200)
//   .addTo(canvas)
// elementsFactory.cloud({ theme, options: { variant: 'base' } })
//   .cx(500)
//   .cy(500)
//   .addTo(canvas)

// elementsFactory.rain({ theme, options: { size: 40 } })
//   .move(100, 0)
//   .addTo(canvas)

// elementsFactory.rainbow({ theme, options: { size: 80, width: 20 } })
//   .move(200, 300)
//   .addTo(canvas)

// elementsFactory.river({ theme, options: { width: 100 } })
//   .move(0, 300)
//   .addTo(canvas)

// elementsFactory.hill({ theme, options: { variant: 'round', height: 300 } })
//   .move(0, 300)
//   .addTo(canvas)
// elementsFactory.hill({ theme, options: { variant: 'base', height: 100 } })
//   .move(0, 300)
//   .addTo(canvas)
// elementsFactory.hill({ theme, options: { variant: 'round', height: 400 } })
//   .move(0, 300)
//   .addTo(canvas)
