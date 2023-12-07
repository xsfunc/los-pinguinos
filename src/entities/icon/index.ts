import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

interface IconProps {
  theme: Theme
  iconOptions: {
    title: string
    iconText: string
  }
}

export function createIcon({ theme, iconOptions }: IconProps) {
  const group = SVG()
    .group()
    .draggable()

  const back = group
    .rect(theme.icon.size, theme.icon.size)
    .radius(theme.icon.radius)
    .fill('#ccc')

  const title = group
    .text(iconOptions.title)
    .amove(back.cx(), 0) // move text anchor to icon center
    .font({
      anchor: 'middle',
      family: 'Helvetica',
      size: theme.icon.fontSize,
    })
    .dy(theme.icon.size + theme.icon.fontSize)

  const icon = group
    .text(iconOptions.iconText)

  return group
    .dx(methods.getRandom(20, 800))
    .dy(methods.getRandom(20, 800))
}
