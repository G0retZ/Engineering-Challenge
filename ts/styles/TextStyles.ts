import styled from 'styled-components/native'

import { cfs } from './cfs'
import colors from './Colors'

export const Headline = styled.Text`
  color: ${colors.black};
  font-size: ${cfs(32)}px;
  font-weight: 700;
  font-style: normal;
`

export const Title = styled.Text`
  color: ${colors.black};
  font-size: ${cfs(24)}px;
  font-weight: 700;
  font-style: normal;
`

export const Body = styled.Text`
  color: ${colors.black};
  font-size: ${cfs(16)}px;
  font-weight: 400;
  font-style: normal;
`

export const BodySection = styled(Body)`
  font-weight: 700;
`
