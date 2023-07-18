import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Items from './Items';
import ItemPage from './ItemPage';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Items} />
      <Stack.Screen name="Details" component={ItemPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
