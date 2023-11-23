import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES, NavigationProps} from './types';
import {Home} from '../screens/Home';
import {Detail} from '../screens/Detail';

const {Navigator, Screen} = createNativeStackNavigator<NavigationProps>();

export function AppRouter() {
  return (
    <Navigator
      initialRouteName={ROUTES.home}
      screenOptions={{headerShown: false}}>
      <Screen name={ROUTES.home} component={Home} />
      <Screen name={ROUTES.detail} component={Detail} />
    </Navigator>
  );
}
