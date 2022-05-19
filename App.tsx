import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet } from 'react-native';
import { Homepage } from './scr/screens/Homepage';
import { SearchByCity } from './scr/screens/SearchByCity';
import { SearchByCountry } from './scr/screens/SearchByCountry';
import { PopulationResult } from './scr/screens/PopulationResult';
import { TopCities } from './scr/screens/TopCities'



const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}>
        <Stack.Screen name="Homepage" component={Homepage}></Stack.Screen>
        <Stack.Screen name="SearchByCity" component={SearchByCity}></Stack.Screen>
        <Stack.Screen name="SearchByCountry" component={SearchByCountry}></Stack.Screen>
        <Stack.Screen name="PopulationResult" component={PopulationResult}></Stack.Screen>
        <Stack.Screen name="TopCities" component={TopCities}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App(){
  return(
    <MyStack></MyStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


