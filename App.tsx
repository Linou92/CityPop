import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { Homepage } from "./src/screens/Homepage"
import { SearchByCity } from "./src/screens/SearchByCity"
import { SearchByCountry } from "./src/screens/SearchByCountry"
import { PopulationResult } from "./src/screens/PopulationResult"
import { TopCities } from "./src/screens/TopCities"



const Stack = createStackNavigator()

const MyStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "horizontal",
				}}
			>
				<Stack.Screen name="Homepage" component={Homepage}></Stack.Screen>
				<Stack.Screen name="SearchByCity" component={SearchByCity}></Stack.Screen>
				<Stack.Screen name="SearchByCountry" component={SearchByCountry}></Stack.Screen>
				<Stack.Screen name="PopulationResult" component={PopulationResult}></Stack.Screen>
				<Stack.Screen name="TopCities" component={TopCities}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}


const App = () => {
	return(
		<MyStack></MyStack>
	)
}


export default App
