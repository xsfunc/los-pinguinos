import { SVG } from '@svgdotjs/svg.js'
import { createWindow } from '@/widget/window'
import { createTheme } from '@/shared/theme'
import { createIcon } from '@/entities/icon'
import { createNote } from '@/entities/content-note'
import { elementsFactory } from '@/entities/content-image'

const canvas = SVG()
  .addTo('#canvas')
  .size('100%', '100%')

const theme = createTheme()

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

for (const iconOptions of iconsList) {
  createIcon({ theme, iconOptions })
    .addTo(canvas)
}

const windowCount = 0
for (let i = 0; i < windowCount; i++) {
  const windowSvg = createWindow({ theme, options: { title: 'fx' } })
  const note = createNote({ theme })
  windowSvg.addTo(canvas)
  note.addTo(windowSvg)
}

elementsFactory.sun({ theme, options: { variant: 'with-dots' } })
  .cx(500)
  .cy(500)
  .addTo(canvas)

elementsFactory.sun({ theme, options: { variant: 'with-lines' } })
  .cx(100)
  .cy(100)
  .addTo(canvas)

elementsFactory.tree({ theme, options: { variant: 'square' } })
  .cx(200)
  .cy(200)
  .addTo(canvas)
elementsFactory.tree({ theme, options: { variant: 'circle' } })
  .cx(300)
  .cy(200)
  .addTo(canvas)
elementsFactory.tree({ theme, options: { variant: 'triangle' } })
  .cx(400)
  .cy(200)
  .addTo(canvas)
