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
    sun: '#FB4D3D',
    tree: '#305252',
    mountain: '#1b4332',
    cloud: '#EDE6F2',
    sky: '#8ACDEA',
    hill: [
      '#a3b18a',
      '#588157',
      '#3a5a40',
      '#344e41',
      '#606c38',
    ],
    house: {
      main: '#DA4167',
      window: '#F0BCD4',
    },
    river: {
      water: '#42BFDD',
      wave: '#084B83',
    },
    rainbow: [
      '#FF69EB',
      '#FF86C8',
      '#FFA3A5',
      '#FFBF81',
      '#FFDC5E',
    ],
  }
}

function createImageOptions() {
  return {
    stroke: {
      width: methods.random(5, 10),
      color: '#283618',
      linecap: 'round',
    },
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
