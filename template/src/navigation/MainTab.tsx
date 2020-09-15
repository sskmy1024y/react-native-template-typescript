import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import {TypedNavigatorParams} from './types';
import Profile from 'screens/Profile';

const Tab = createBottomTabNavigator<TypedNavigatorParams<'MainTab'>>();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTabs;
