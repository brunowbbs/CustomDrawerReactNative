import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/stacks/AuthStack';

export default () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
