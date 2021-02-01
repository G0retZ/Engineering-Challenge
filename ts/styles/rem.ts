import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width: windowWidth } = Dimensions.get('window')

const width = Platform.select({
  ios: windowWidth,
  android: windowWidth,
  default: 414, // Width of iPhone 12
})

let base = 0.8

if (width > 719) {
  base = 1.2
} else if (width > 539) {
  base = 1.1
} else if (width > 413) {
  base = 1
} else if (width > 374) {
  base = 0.9
} else if (width > 319) {
  base = 0.8
}

export default (unit: number, round = true) => (round ? PixelRatio.roundToNearestPixel(base * unit) : base * unit)
