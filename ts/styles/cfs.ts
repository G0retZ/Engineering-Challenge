import { PixelRatio } from 'react-native'

import rem from './rem'

export const cfsAbsolute = (value: number, round = true) => (props: any) => {
  const cfsValue = props.theme.cfs ? props.theme.cfs(value) : value
  return round ? PixelRatio.roundToNearestPixel(cfsValue) : cfsValue
}

export const cfs = (value: number, round = true) => cfsAbsolute(rem(value, round), round)
