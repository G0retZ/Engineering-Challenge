import React from 'react'
import { TouchableWithoutFeedback, ViewProps } from 'react-native'
import styled from 'styled-components/native'
import Colors from '~/styles/Colors'
import rem from '~/styles/rem'
import { images } from '../assets/images'

import { Contact } from '../types'

interface OwnProps extends ViewProps {
  contact: Contact
  isSelected: boolean
  onSelected: () => void
}

export default (props: OwnProps) => {
  const getImage = (contact: Contact) => images[`${contact.firstName} ${contact.lastName}`]

  const onPress = () => {
    if (!props.isSelected) {
      props.onSelected()
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container {...props} isSelected={props.isSelected}>
        <AvatarImage resizeMode={'contain'} source={getImage(props.contact)} fadeDuration={0} />
      </Container>
    </TouchableWithoutFeedback>
  )
}

const Container = styled.View<{ isSelected: boolean }>`
  width: ${rem(80)}px;
  height: ${rem(80)}px;
  padding: ${rem(4)}px;
  background-color: ${(props) => (props.isSelected ? Colors.darkGreen30 : Colors.white0)};
  border-radius: ${rem(44)}px;
`

const AvatarImage = styled.Image`
  height: 100%;
  width: 100%;
`
