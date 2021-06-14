import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import MainDrawer from './MainDrawer';

const { Navigator, Screen } = createStackNavigator();

export default () => {
  return (
    <Navigator>
      <Screen name="PreloadScreen" component={Preload} options={{ headerShown: false }} />
      <Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }} />
    </Navigator>
  )
}