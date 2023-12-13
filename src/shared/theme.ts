import { methods } from '.'

export type Theme = ReturnType<typeof createTheme>

const palettes = [
  {
    stroke: '#001219',
    sun: '#ee9b00',
    tree: '#386641',
    mountain: '#bc4749',
    cloud: '#f2e8cf',
    sky: '#94d2bd',
    river: '#0a9396',
    hill: [
      '#6a994e',
      '#a7c957',
      '#588157',
    ],
    house: {
      main: '#9b2226',
      window: '#0a9396',
    },
  },
  {
    stroke: '#03045e',
    sun: '#023e8a',
    tree: '#0077b6',
    mountain: '#90e0ef',
    cloud: '#caf0f8',
    sky: '#ade8f4',
    river: '#48cae4',
    hill: [
      '#00b4d8',
      '#00b4d8',
      '#0096c7',
    ],
    house: {
      main: '#caf0f8',
      window: '#023e8a',
    },
  },
  {
    stroke: '#590d22',
    sun: '#c9184a',
    tree: '#c9184a',
    mountain: '#800f2f',
    cloud: '#fff0f3',
    sky: '#ffccd5',
    river: '#ff758f',
    hill: [
      '#ff758f',
      '#ff4d6d',
      '#c9184a',
    ],
    house: {
      main: '#800f2f',
      window: '#ffb3c1',
    },
  },
  {
    stroke: '#343a40',
    sun: '#fbf8cc',
    tree: '#98f5e1',
    mountain: '#a3c4f3',
    cloud: '#fde4cf',
    sky: '#8eecf5',
    river: '#a3c4f3',
    hill: [
      '#b9fbc0',
      '#98f5e1',
    ],
    house: {
      main: '#cfbaf0',
      window: '#a3c4f3',
    },
  },
  {
    stroke: '#0b2545',
    sun: '#f7b801',
    tree: '#134074',
    mountain: '#3d348b',
    cloud: '#f7ede2',
    sky: '#8da9c4',
    river: '#7678ed',
    hill: [
      '#13315c',
      '#8da9c4',
    ],
    house: {
      main: '#f18701',
      window: '#f35b04',
    },
  },
  {
    stroke: '#333d29',
    sun: '#7f4f24',
    tree: '#a4ac86',
    mountain: '#936639',
    cloud: '#a68a64',
    sky: '#c2c5aa',
    river: '#a4ac86',
    hill: [
      '#656d4a',
      '#414833',
    ],
    house: {
      main: '#f18701',
      window: '#f35b04',
    },
  },
  {
    stroke: '#212529',
    sun: '#6c757d',
    tree: '#495057',
    mountain: '#ced4da',
    cloud: '#dee2e6',
    sky: '#f8f9fa',
    river: '#e9ecef',
    hill: [
      '#343a40',
      '#495057',
    ],
    house: {
      main: '#6c757d',
      window: '#f35b04',
    },
  },
  {
    stroke: '#3a0ca3',
    sun: '#f72585',
    tree: '#b5179e',
    mountain: '#7209b7',
    cloud: '#4895ef',
    sky: '#4cc9f0',
    river: '#4361ee',
    hill: [
      '#7209b7',
      '#560bad',
    ],
    house: {
      main: '#b5179e',
      window: '#f35b04',
    },
  },
  {
    stroke: '#65010c',
    sun: '#cb1b16',
    tree: '#ef3c2d',
    mountain: '#f26a4f',
    cloud: '#f29479',
    sky: '#fedfd4',
    river: '#9dcee2',
    hill: [
      '#4091c9',
      '#1368aa',
    ],
    house: {
      main: '#cb1b16',
      window: '#9dcee2',
    },
  },
  {
    stroke: '#004b23',
    sun: '#70e000',
    tree: '#38b000',
    mountain: '#008000',
    cloud: '#9ef01a',
    sky: '#ccff33',
    river: '#9ef01a',
    hill: [
      '#007200',
      '#006400',
    ],
    house: {
      main: '#9ef01a',
      window: '#38b000',
    },
  },
  {
    stroke: '#735d78',
    sun: '#fad2e1',
    tree: '#bee1e6',
    mountain: '#fff1e6',
    cloud: '#cddafd',
    sky: '#f0efeb',
    river: '#dfe7fd',
    hill: [
      '#fff1e6',
      '#fde2e4',
    ],
    house: {
      main: '#fad2e1',
      window: '#dfe7fd',
    },
  },
]

const {
  choice: palette,
  index: paletteIndex,
} = methods.sampleWithIndex(palettes)

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
    ...palette,
    index: paletteIndex,
    rainbow: [
      '#ee9b00',
      '#ca6702',
      '#bb3e03',
      '#ae2012',
      '#9b2226',
    ],
  }
}

function createImageOptions() {
  return {
    stroke: {
      width: methods.random(5, 10),
      color: palette.stroke,
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
    width: methods.random(5, 10),
    color: palette.stroke,
    linecap: 'round',
  }

  return {
    strokeOptions,
    titleSize: titleHeight,
    controlSize,
    controlGap,
    radius,
    backColor: palette.river,
    mainColor: palette.sun,
    secondaryColor: palette.mountain,
  } as const
}
