import React, { useRef, useState } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'
import Colors from '~/styles/Colors'
import rem from '~/styles/rem'
import { Title } from '~/styles/TextStyles'

import { contacts as allContacts } from '../assets/contacts.json'
import Avatars from '../components/NewAvatars'
import Details from '../components/NewDetails'
import { Contact } from '../types'

const contacts: Contact[] = allContacts

export default () => {
  const scrollPosition = useRef(new Animated.Value(0))
  const jumpPosition = useRef(new Animated.Value(0))
  const scrollEvent = useRef(
    Animated.event([{ realIndex: scrollPosition.current }], {
      useNativeDriver: false,
    })
  )
  const [avatarsGuided, setAvatarsGuided] = useState(false)
  const [detailsGuided, setDetailsGuided] = useState(false)
  const [detailsElevation, setDetailsElevation] = useState(2)

  const onScroll = (event: { realIndex: number }) => {
    if (event.realIndex >= 0 && event.realIndex <= contacts.length - 1) {
      scrollEvent.current(event)
    }
  }

  const onAvatarsScrollState = (state: boolean) => {
    setDetailsGuided(state)
    setDetailsElevation(state ? 1 : 2)
  }

  const onScroDetailsllState = (state: boolean) => {
    setAvatarsGuided(state)
    setDetailsElevation(state ? 1 : 2)
  }

  const onJump = (index: number) => {
    scrollEvent.current({ realIndex: index })
    jumpPosition.current.setValue(index)
  }

  return (
    <Container>
      <TitleContainer>
        <TitleText>Contacts</TitleText>
      </TitleContainer>
      <AvatarsCard>
        <AvatarsList
          items={contacts}
          isGuided={avatarsGuided}
          currentPosition={scrollPosition.current}
          jumpPosition={jumpPosition.current}
          onScrollState={onAvatarsScrollState}
          onScrollPosition={onScroll}
          onJumpToIndex={onJump}
        />
      </AvatarsCard>
      <DetailsCard elevation={detailsElevation}>
        <DetailsList
          items={contacts}
          isGuided={detailsGuided}
          currentPosition={scrollPosition.current}
          jumpPosition={jumpPosition.current}
          onScrollState={onScroDetailsllState}
          onScrollPosition={onScroll}
        />
      </DetailsCard>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.lightGray};
`

const TitleContainer = styled.SafeAreaView`
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.lightGray};
`

const TitleText = styled(Title)`
  margin-top: ${rem(24)}px;
  margin-bottom: ${rem(12)}px;
`

const AvatarsCard = styled.View`
  flex-direction: row;
  elevation: 2;
  background-color: ${Colors.white};
  padding-top: ${rem(16)}px;
  padding-bottom: ${rem(16)}px;
`

const AvatarsList = styled(Avatars)``

const DetailsCard = styled.View<{ elevation: number }>`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.white};
  elevation: ${(props) => props.elevation};
`

const DetailsList = styled(Details)`
  height: 100%;
`
