import React from 'react';

import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from 'hooks/useNavigation';

function Home() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('detail', {});
  };

  return (
    <Container>
      <Text>Home</Text>
      <Button title={'Go To Detail'} onPress={onPress} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Home;
