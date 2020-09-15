import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import {TypedNavigatorParams} from './types';
import MainTabs from './MainTab';
import Detail from 'screens/Detail';
import {useColorScheme} from 'react-native-appearance';

const AppStack = createStackNavigator<TypedNavigatorParams<'Root'>>();

function AppStackScreen() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppStack.Navigator initialRouteName="MainTab">
        <AppStack.Screen
          name="MainTab"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <AppStack.Screen name="detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStackScreen;
