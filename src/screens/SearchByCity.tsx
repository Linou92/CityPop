// @flow

import React, { useState } from "react"
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"


export const SearchByCity = () => {

	// logic and API call
	const navigation = useNavigation()

	const [errorMsg, setErrorMsg] = useState('') // setting error messages
	const [value, onChangeText] = useState("") // setting the input value
	const [isLoading, setIsLoading] = useState(false) // setting the loading
	const [fetchError, setFetchError] = useState(null) // setting the fetch API error

	// cancel fetch request calls and cleanup
	const abortController = new AbortController()
	const signal = abortController.signal 


	// fetch the API with user input
	function fetchAPI (arg: string) {
		setTimeout(() => abortController.abort(), 2000)
		setIsLoading(true)
		fetch("http://api.geonames.org/searchJSON?name=" + arg + "&featureClass=P&maxRows=1&username=weknowit")
			.then(response => response.json())
			.then(res => {
				setIsLoading(false)
				setFetchError(null)
				// Handle illegal cases and limited search to letters only
				if(res.totalResultsCount > 0 && arg != '' && arg.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/)){
					navigation.navigate("PopulationResult", {data: res.geonames[0]})
				}
				else if(arg == ''){
					setIsLoading(false)
					setErrorMsg('Please enter a city !')
				}
				else{
					setIsLoading(false)
					setErrorMsg('Only letters allowed !')
				}
			})
			.catch(err => {
				setIsLoading(false)
				setFetchError(err)
			})
			.finally(() => setIsLoading(false))
	}

	// render error messages
	function renderError () {
		if(errorMsg){
			return(
				<View>
					<Text style={styles.errorText}>
						{errorMsg}
					</Text>
				</View>
			)
		}
	}

	// render fetch API error message
	function renderFetchError () {
		if(fetchError){
			return(
				<View>
					<Text style={styles.errorText}>
						{fetchError}
					</Text>
				</View>
			)
		}
	}

	// render loading message
	function renderLoading () {
		if(isLoading){
			return(
				<View>
					<Text style={styles.loadingText}>
						{'Loading...'}
					</Text>
				</View>
			)
		}
	}

	// design of the page
	return (
		<View style={styles.container}>
            
			<View style={styles.homeIconContainer}>
				<TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate("Homepage")}>
					<View style={styles.homeIcon}>
						<Icon name="home" size={40} color={"#50aab5"}/>
						<Text style={styles.homeIconText}>Home</Text>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.searchContainer}>
					<Text style={styles.titleText}> Search By City </Text>
					<View style={styles.inputContent}>
						<TextInput
							clearTextOnFocus = {true}
							clearButtonMode = {"while-editing"}
							style = {styles.input}
							onChangeText={(text) => onChangeText(text)}
							value = {value}
						></TextInput>
					</View>

					{renderFetchError()}
					{renderError()}

					<View style={styles.searchIcon}>
						<Icon  name="search1" size={50} color={"#50aab5"} onPress={() => fetchAPI(value)}></Icon>
					</View>

					{renderLoading()}
                    
				</View>
			</View>

			<View style={styles.footer}>
				<ImageBackground source={require("../images/background.png")}  resizeMode="stretch" style={styles.background}>
					<Text style={styles.footerText}>By Lina Abu Hijleh - 2022</Text>
				</ImageBackground>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#e6f5ef",
	},

	touchableOpacity: {
		borderRadius: 20,
	},

	homeIconContainer: {
		width: 140,
		height: 50,
		marginTop: 60,
		marginLeft: 30,
		borderColor: "#50aab5",
		borderWidth: 1,
		borderRadius: 20,
		backgroundColor: "#e8f0f1",
		flexDirection: "row",
		alignItems: "center"
	},

	homeIcon: {
		justifyContent: "center", 
		alignItems: "center",
		marginLeft: 10,
		flexDirection: "row"
	},

	homeIconText: {
		fontSize: 20,
		color: "#50aab5",
		marginLeft: 10
	},

	titleText: {
		marginTop: 15,
		color: "#b4ced1",
		fontSize: 25,
	},

	content: {
		alignItems: "center",
	},

	searchContainer: {
		alignItems: "center",
		width: 300,
		borderColor: "#50aab5",
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#e8f0f1",
		height: 250, 
		marginTop: 100,
	},

	input: {
		borderWidth: 1,
		borderColor: "#50aab5",
		height: 50,
		width: 250,
		borderRadius: 20,
		textAlign: "center"
	},

	inputContent: {
		marginTop: 20
	},

	searchIcon: {
		marginTop: 40,
	},

	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},

	loadingText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'green'
	},

	footer: {
		marginTop: 50,
	},
    
	background: {
		justifyContent: "center",
	},

	footerText: {
		fontSize: 13,
		textAlign: "center",
		marginTop: 150,
		color: "#50aab5",
		fontWeight: "bold"
	}
})