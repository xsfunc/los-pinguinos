import { SVG } from '@svgdotjs/svg.js'
import { sun } from './sun'
import { tree } from './tree'
import { house } from './house'
import { mountain } from './mountain'
import { cloud } from './cloud'
import { rain } from './rain'
import { rainbow } from './rainbow'
import { river } from './river'
import { hill } from './hill'
import { elementsFactory as factory } from '.'
import { constants, methods } from '@/shared'
import type { Theme } from '@/shared/theme'

export const elements = {
  sun: ['base', 'with-lines', 'with-dots'],
  tree: ['circle', 'square', 'triangle'],
  house: ['square', 'triangle'],
  mountain: ['base'],
  cloud: ['base'],
  rain: ['base'],
  rainbow: ['base'],
  hill: ['base', 'round'],
  river: ['base'],
} as const

export const elementsFactory = {
  sun,
  tree,
  mountain,
  house,
  cloud,
  rain,
  rainbow,
  river,
  hill,
}

const layerCount = 5
const layerHeight = constants.canvas.height / layerCount
const layerWidth = constants.canvas.width

export function createImage(theme: Theme) {
  const composition = SVG().group()

  // sun
  const sunSize = methods.random(50, layerHeight * 2)
  const sunVariant = sunSize > 100
    ? methods.sample(elements.sun)
    : methods.sample(elements.sun.filter(v => v !== 'with-dots'))
  const sunDx = methods.random(0, layerWidth - sunSize)
  const sunDy = methods.random(0, layerHeight)
  factory.sun({
    theme,
    options: { variant: sunVariant, size: sunSize },
  })
    .addTo(composition)
    .move(sunDx, sunDy)

  // clouds
  const cloudCount = methods.random(0, 2)
  const isRain = methods.randomBoolean() && sunSize < 70
  for (let i = 0; i < cloudCount; i++) {
    const size = methods.random(80, 120)
    const dy = methods.random(0, layerHeight)
    const dx = methods.random(0, 100) + i * layerWidth / cloudCount
    const cloud = factory
      .cloud({ theme, options: { size } })
      .addTo(composition)
      .move(dx, dy)

    if (isRain) {
      const rainDy = dy + Number(cloud.height())
      const rainDx = dx + Number(cloud.width()) / 3
      factory
        .rain({ theme, options: { size: size / 3 } })
        .addTo(composition)
        .move(rainDx, rainDy)
    }
  }

  return composition
}

export type { HillVariant } from './hill'
export type { SunVariant } from './sun'
export type { TreeVariant } from './tree'
export type { MountainVariant } from './mountain'
export type { HouseVariant } from './house'
export type { CloudVariant } from './cloud'
