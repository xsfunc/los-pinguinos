import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'
import { constants } from '@/shared'

interface RiverProps {
  theme: Theme
  options: {
    width: number
  }
}

export function river({ theme, options }: RiverProps) {
  const group = SVG().group()

  group
    .rect(constants.canvas.width, options.width)
    .fill(theme.palette.river.water)
    .stroke(theme.image.stroke)

  const waveSize = constants.canvas.width / 10
  const gapY = options.width / 10
  const gapX = options.width / 2
  const count = 10
  const waveGroup = SVG().group().addTo(group)
  const wave = waveGroup
    .line([0, 0, waveSize, 0])
    .stroke(theme.image.stroke)
  for (let i = 0; i < count; i++) {
    wave.clone()
      .dy(gapY * i)
      .dx(gapX * i)
      .addTo(waveGroup)
  }
  waveGroup
    .clone()
    .dx(constants.canvas.width / 3)
    .addTo(group)

  return group.draggable()
}
