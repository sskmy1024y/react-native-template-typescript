/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <EngineView>
              <Footer>Engine: Hermes</Footer>
            </EngineView>
          )}
          <Body>
            <SectionContainer>
              <Title>Step One</Title>
              <Description>
                Edit <Text style={{fontWeight: '700'}}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Description>
            </SectionContainer>

            <SectionContainer>
              <Title>See Your Changes</Title>
              <Description>
                <ReloadInstructions />
              </Description>
            </SectionContainer>

            <SectionContainer>
              <Title>Debug</Title>
              <Description>
                <DebugInstructions />
              </Description>
            </SectionContainer>

            <SectionContainer>
              <Title>Learn More</Title>
              <Description>
                Read the docs to discover what to do next:
              </Description>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const EngineView = styled.View`
  position: absolute;
  right: 0;
`;

const Body = styled.View`
  background-color: ${Colors.white};
`;

const Footer = styled.Text`
  color: ${Colors.dark};
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  padding-right: 12px;
  text-align: right;
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.black};
`;

const Description = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

export default App;
