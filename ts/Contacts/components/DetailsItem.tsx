import React from 'react'
import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
import rem from '~/styles/rem'
import { Body, BodySection, Headline } from '~/styles/TextStyles'
import { Contact } from '../types'

interface OwnProps extends ViewProps {
  contact: Contact
}

export default (props: OwnProps) => {
  const { contact } = props

  return (
    <Container {...props}>
      <HeaderTexts>
        <NameText>
          {contact.firstName} <LastNameText>{contact.lastName}</LastNameText>
        </NameText>
        <ProfessionText>{contact.profession}</ProfessionText>
      </HeaderTexts>
      <BodySection>About me</BodySection>
      <Biography>{contact.bio}</Biography>
    </Container>
  )
}

const Container = styled.View`
  align-items: flex-start;
  flex-direction: column;
  padding: ${rem(24)}px;
`

const HeaderTexts = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: ${rem(8)}px;
  margin-bottom: ${rem(32)}px;
`

const NameText = styled(Headline)``

const LastNameText = styled(Headline)`
  font-weight: 400;
`

const ProfessionText = styled(Body)`
  margin-top: ${rem(8)}px;
`

const Biography = styled(Body)`
  margin-top: ${rem(4)}px;
`
