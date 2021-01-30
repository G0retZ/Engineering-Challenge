/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import styled from 'styled-components/native'
import { cfs } from './styles/cfs'
import rem from './styles/rem'

export default () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollContainer contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionTitle>Step One</SectionTitle>
              <SectionDescription>
                Edit <Highlight>App.js</Highlight> to change this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>Read the docs to discover what to do next:</SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollContainer>
      </SafeAreaView>
    </>
  )
}

const ScrollContainer = styled(ScrollView)`
  background-color: ${Colors.lighter};
`

const Body = styled.View`
  background-color: ${Colors.white};
`

const SectionContainer = styled.View`
  margin-top: ${rem(32)}px;
  padding-left: ${rem(24)}px;
  padding-right: ${rem(24)}px;
`

const SectionTitle = styled.Text`
  font-size: ${cfs(24)}px;
  font-weight: 600;
  color: ${Colors.black};
`

const SectionDescription = styled.Text`
  margin-top: ${rem(8)}px;
  font-size: ${cfs(18)}px;
  font-weight: 400;
  color: ${Colors.black};
`

const Highlight = styled.Text`
  font-weight: 700;
`
