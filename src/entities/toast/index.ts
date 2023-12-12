import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

interface ToastProps {
  theme: Theme
}

const users = ['andreasrau', 'Piter Pasma', 'mrkswcz', 'teaboswell', 'mjlindow', 'ciphrd', 'zancan', 'williamapan', 'Yazid', 'lunarean', 'markknol', 'xsfunc', 'msoriaro'] as const

export function createToast({ theme }: ToastProps) {
  const group = SVG().group()
  const user = methods.sample(users)
  const message = user === 'zancan'
    ? 'Go touch grass'
    : methods.sample(['gn', 'gm', 'REKT', 'azertyuiop', 'fxhash2.0 lfg'])

  group
    .rect(240, 70)
    .radius(theme.window.radius)
    .fill(theme.window.backColor)
    .stroke(theme.window.strokeOptions)

  const userText = group
    .text(`from ${user}:`)
    .fill(theme.window.strokeOptions.color)
    .font({
      anchor: 'start',
      family: 'monospace',
      weight: 'bold',
      size: 20,
    })
    .move(10, 10)
  userText.clone()
    .text(message)
    .addTo(group)
    .dy(20)

  return group
}
