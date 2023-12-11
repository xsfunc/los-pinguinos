import { SVG } from '@svgdotjs/svg.js'
import type { Theme } from '@/shared/theme'
import { methods } from '@/shared'

export function randomPattern(theme: Theme) {
  return methods.sample([
    cross,
    circles,
    lines,
    waves,
  ])(theme)
}

export function waves(theme: Theme) {
  const initial = {
    scale: methods.random(1, 3),
    rotate: methods.random(0, 180),
    strokeWidth: theme.window.strokeOptions.width,
  }

  const size = [120, 20]
  const { scale, rotate, strokeWidth } = initial
  const backgroundColor = theme.window.backColor
  const wavesColor = theme.window.mainColor
  const pattern = SVG()
    .pattern(...size)
    .transform({ scale, rotate })
    .attr({
      patternUnits: 'userSpaceOnUse',
      id: crypto.randomUUID(),
    })
  pattern.rect(...size).fill(backgroundColor)
  pattern.path('M-50.129 12.685C-33.346 12.358-16.786 4.918 0 5c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685')
    .stroke(wavesColor)
    .stroke({ width: strokeWidth })
    .fill('none')

  return pattern
}

export function lines(theme: Theme) {
  const initial = {
    scale: methods.random(1, 3),
    rotate: methods.random(0, 180),
    strokeWidth: theme.window.strokeOptions.width,
  }

  const size = [20, 40]
  const { scale, rotate, strokeWidth } = initial
  const backPaint = theme.window.backColor
  const paint2 = theme.window.mainColor
  const paint3 = theme.window.secondaryColor
  const pattern = SVG()
    .pattern(...size)
    .transform({ scale, rotate })
    .attr({
      patternUnits: 'userSpaceOnUse',
      id: crypto.randomUUID(),
    })
  pattern.rect(...size).fill(backPaint)
  pattern.path('M0 10h20z')
    .stroke(paint2)
    .stroke({ width: strokeWidth })
    .fill('none')
  pattern.path('M0 30h20z')
    .stroke(paint3)
    .stroke({ width: strokeWidth })
    .fill('none')
  return pattern
}

export function cross(theme: Theme) {
  const initial = {
    size: [methods.random(20, 40), methods.random(20, 40)],
    rotate: methods.random(0, 180),
  }

  const { size, rotate } = initial
  const backPaint = theme.palette.sky
  const pattern = SVG()
    .pattern(...size)
    .transform({ scale: 1, rotate })
    .attr({
      patternUnits: 'userSpaceOnUse',
      id: crypto.randomUUID(),
    })
  pattern.rect(...size).fill(backPaint)
  pattern.path('M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z')
    .stroke(theme.window.strokeOptions)
    .fill('none')

  return pattern
}

function circles(theme: Theme) {
  const initial = {
    scale: methods.random(1, 10),
    rotate: 0,
    strokeWidth: 1,
  }

  const size = [40, 40]
  const { scale, rotate } = initial
  const backgroundColor = theme.window.backColor
  const circle1 = theme.window.mainColor
  const circle2 = theme.window.secondaryColor
  const pattern = SVG()
    .pattern(...size)
    .transform({ scale, rotate })
    .attr({
      patternUnits: 'userSpaceOnUse',
      id: crypto.randomUUID(),
    })
  pattern.rect(...size).fill(backgroundColor)
  pattern.path('M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z')
    .fill(circle1)
  pattern.path('M20 25a5 5 0 110-10 5 5 0 010 10z')
    .fill(circle2)

  return pattern
}
