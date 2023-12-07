import { SVG } from '@svgdotjs/svg.js'
import { createWindow } from '@/widget/window'
import { createTheme } from '@/shared/theme'
import { createIcon } from '@/entities/icon'
import { createNote } from '@/entities/note-window'

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

const windowCount = 2
for (let i = 0; i < windowCount; i++) {
  const windowSvg = createWindow({ theme })
  const note = createNote({ theme })
  windowSvg.addTo(canvas)
  note.addTo(windowSvg)
}
