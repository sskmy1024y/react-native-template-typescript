import React, {ReactNode} from 'react';

import {useTheme} from '@react-navigation/native';
import {Text as _Text, TextProps} from 'react-native';

type Props = Readonly<TextProps> & Readonly<{children?: ReactNode}>;

export function Text(props: Props) {
  const {colors} = useTheme();

  return <_Text {...props} style={[props.style, {color: colors.text}]} />;
}
