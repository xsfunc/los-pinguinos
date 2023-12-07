import { methods } from '.'

export type Theme = ReturnType<typeof createTheme>

export function createTheme() {
  return {
    palette: createPalette(),
    image: createImageOptions(),
    icon: createIconOptions(),
    window: createWindowOptions(),
  } as const
}

function createPalette() {
  return {
    stroke: 'black',
    sun: 'orange',
    tree: 'green',
  }
}

function createImageOptions() {
  return {
    stroke: { width: 4, color: 'black' },
  }
}

function createIconOptions() {
  const size = methods.getRandom(40, 80)
  const fontSize = methods.getRandom(15, 20)
  return {
    radius: methods.getRandom(0, size / 2),
    fontSize,
    size,
  }
}

function createWindowOptions() {
  const controlSize = methods.getRandom(15, 25)
  const controlGap = controlSize / 3
  const titleHeight = controlSize + controlGap * 2
  const radius = methods.getRandom(0, titleHeight / 2)
  const strokeOptions = {
    width: methods.getRandom(0, 4),
    color: 'black',
  }

  return {
    strokeOptions,
    titleSize: titleHeight,
    controlSize,
    controlGap,
    radius,
  } as const
}
