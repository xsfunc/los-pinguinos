import { sun } from './sun'
import { tree } from './tree'

export const elements = {
  sun: ['base', 'with-lines', 'with-dots', 'sunset'],
  tree: ['circle', 'square', 'triangle'],
  house: ['square', 'triangle'],
  mountain: ['base'],
  cloud: ['base'],
  rain: ['base'],
  hill: ['base'],
} as const

export const elementsFactory = {
  sun,
  tree,
}

export type { SunVariant } from './sun'
export type { TreeVariant } from './tree'
export type { MountainVariant } from './mountain'
