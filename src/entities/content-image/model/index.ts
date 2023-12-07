import { sun } from './sun'
import { tree } from './tree'
import { house } from './house'
import { mountain } from './mountain'

export const elements = {
  sun: ['base', 'with-lines', 'with-dots', 'sunset'],
  tree: ['circle', 'square', 'triangle'],
  house: ['square', 'triangle'],
  mountain: ['base'],
  cloud: ['base'],
  rain: ['base'],
  rainbow: ['base', 'big'],
  hill: ['base'],
  river: ['base'],
} as const

export const elementsFactory = {
  sun,
  tree,
  mountain,
  house,
}

export type { SunVariant } from './sun'
export type { TreeVariant } from './tree'
export type { MountainVariant } from './mountain'
export type { HouseVariant } from './house'
