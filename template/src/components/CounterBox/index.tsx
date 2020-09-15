import {Text} from 'components/common';
import {useDispatch} from 'hooks/hooks';
import React from 'react';
import {Button} from 'react-native';
import {decrement, increment, useCount} from 'store/count';
import styled from 'styled-components/native';

export default function CounterBox() {
  const count = useCount();
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Container>
      <Count>{count}</Count>
      <ButtonContainer>
        <Button title={'+'} onPress={onIncrement} />
        <Button title={'-'} onPress={onDecrement} />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  margin: 20px;
  align-items: center;
`;

const Count = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;
