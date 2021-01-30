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

import styled from 'styled-components'

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

const Body = styled.view`
  background-color: ${Colors.white};
`

const SectionContainer = styled.view`
  margin-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
`

const SectionTitle = styled.text`
  font-size: 24;
  font-weight: 600;
  color: ${Colors.black};
`

const SectionDescription = styled.text`
  margin-top: 8px;
  font-size: 18;
  font-weight: 400;
  color: ${Colors.black};
`

const Highlight = styled.text`
  font-weight: 700;
`
