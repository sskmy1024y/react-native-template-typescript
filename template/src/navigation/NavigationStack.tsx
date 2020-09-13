import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Screens} from './types';
import Home from 'screens/Home';
import Detail from 'screens/Detail';

const AppStack = createStackNavigator<Screens>();

function AppStackScreen() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen name="Home" component={Home} options={{}} />
        <AppStack.Screen name="Detail" component={Detail} options={{}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStackScreen;
