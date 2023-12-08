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
    mountain: 'tomato',
    cloud: 'white',
    house: {
      main: 'red',
      window: 'blue',
    },
  }
}

function createImageOptions() {
  return {
    stroke: { width: 4, color: 'black' },
  }
}

function createIconOptions() {
  const size = methods.random(40, 80)
  const fontSize = methods.random(15, 20)
  return {
    radius: methods.random(0, size / 2),
    fontSize,
    size,
  }
}

function createWindowOptions() {
  const controlSize = methods.random(15, 25)
  const controlGap = controlSize / 3
  const titleHeight = controlSize + controlGap * 2
  const radius = methods.random(0, titleHeight / 2)
  const strokeOptions = {
    width: methods.random(0, 4),
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
