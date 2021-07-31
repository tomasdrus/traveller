import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from './app/screens/CategoriesScreen';
import LanguageScreen from './app/screens/LanguageScreen';
import DetailScreen from './app/screens/DetailScreen';

const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name='Language' component={LanguageScreen} />
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    /* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Language' component={LanguageScreen} />
        <Tab.Screen name='Categories' component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer> */
  )
}
