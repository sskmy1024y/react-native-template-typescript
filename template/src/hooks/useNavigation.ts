import {useNavigation as useDefaultNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationParams} from 'navigation';

export const useNavigation = () =>
  useDefaultNavigation<StackNavigationProp<NavigationParams>>();
