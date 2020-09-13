import React from 'react';

import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

function Detail() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Text>Detail</Text>
      <Button title={'Go Back'} onPress={onPress} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Detail;
