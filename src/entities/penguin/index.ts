import type { Container } from '@svgdotjs/svg.js'
import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'

interface PenguinProps {
  theme: Theme
  options: {
    canvas: Container
    hasBra?: boolean
  }
}

export function penguin({ theme, options }: PenguinProps) {
  const group = SVG().group().addTo(options.canvas)
  const mask = options.canvas.mask()

  const maskBody = group
    .rect(100, 100)
    .radius(10)
    .fill('white')
    .addTo(mask)
  const fullBody = group
    .rect(100, 200)
    .radius(50)
    .fill(theme.window.strokeOptions.color)
  const whiteBody = group
    .rect(80, 200)
    .radius(10)
    .fill('white')
    .dy(40)
    .cx(fullBody.cx())
  const leftEye = group
    .circle(40)
    .move(10, 25)
    .fill('white')
  group // leftPupil
    .circle(15)
    .center(leftEye.cx(), leftEye.cy())
  group // leftPupilPoint
    .circle(5)
    .fill('white')
    .center(leftEye.cx() + 3, leftEye.cy())
  const rightEye = leftEye
    .clone()
    .addTo(group)
    .dx(40)
  group // rightPupil
    .circle(15)
    .center(rightEye.cx(), rightEye.cy())
  group // rightPupilPoint
    .circle(5)
    .fill('white')
    .center(rightEye.cx() + 3, rightEye.cy())
  const leftLeg = group
    .circle(30)
    .fill('orange')
    .cy(maskBody.bbox().y2)
    .dx(10)
    .maskWith(mask)
  leftLeg // right leg
    .clone()
    .addTo(group)
    .dx(50)
    .maskWith(mask)
  group // nose
    .circle(10)
    .fill('orange')
    .cy(leftEye.cy())
    .cx(fullBody.cx())

  if (options.hasBra) {
    group
      .rect(100, 5)
      .fill(theme.palette.sun)
      .move(0, 65)
    group
      .circle(16)
      .move(25, 60)
      .fill(theme.palette.sun)
    group
      .circle(16)
      .move(55, 60)
      .fill(theme.palette.sun)
  }
  group
    .circle(20)
    .move(0, 55)
    .fill(theme.window.strokeOptions.color)
    .clone()
    .addTo(group)
    .move(100 - 20, 55)

  fullBody.maskWith(mask)
  whiteBody.maskWith(mask)

  return {
    move: (x: number, y: number) => {
      maskBody.move(x, y)
      group.move(x, y)
    },
  }
}
