import { SVG } from '@svgdotjs/svg.js'
import type { elements } from '.'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

export type CloudVariant = typeof elements.cloud[number]
interface MountainProps {
  theme: Theme
  options: {
    variant: CloudVariant
  }
}

export function cloud(props: MountainProps) {
  const cloud = {
    base: baseCloud,
  } as const
  const func = cloud[props.options.variant]
  return func(props)
}

function baseCloud({ theme }: MountainProps) {
  const width = methods.random(80, 120)
  const height = width / 2
  const inaccuracy = height / 10
  const cloudGroup = SVG().group()

  const main = cloudGroup
    .rect(width, height)
    .radius(height / 2)
    .fill(theme.palette.cloud)
    .stroke(theme.image.stroke)

  cloudGroup
    .circle(height)
    .cx(main.cx())
    .cy(main.y() as number + inaccuracy)
    .fill(theme.palette.cloud)
    .stroke(theme.image.stroke)
    .insertBefore(main)

  if (methods.randomBoolean()) {
    const moveX = methods.sample([inaccuracy, -inaccuracy])
    main.dx(moveX)
  }

  return cloudGroup.draggable()
}
