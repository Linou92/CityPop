// @flow

import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"


export const SearchByCountry = () => {

	// logic and API call
	const navigation = useNavigation()

	const [errorMsg, setErrorMsg] = useState('') // setting error message
	const [value, onChangeText] = useState("") // setting the input value
	const [isLoading, setIsLoading] = useState(false) // setting the loading
	const [fetchError, setFetchError] = useState(null) // setting the fetch API error

	// cancel fetch request calls and cleanup
	const abortController = new AbortController()
	const signal = abortController.signal

	// fetch the API with country code from user input
	function fetchAPI (arg: string) {
		setTimeout(() => abortController.abort(), 2000)
		setIsLoading(true)
		fetch("http://api.geonames.org/searchJSON?country="+ arg +"&featureClass=P&orderby=population&maxRows=3&username=weknowit", {signal: signal })
			.then(response => response.json())
			.then(res => {
				setIsLoading(false)
				setFetchError(null)
				// Handle illegal cases and limited search to letters only
				if(res.totalResultsCount > 0 && arg != '' && arg.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/)){
					navigation.navigate("TopCities", {data: res.geonames})
				}
				else if(arg == ''){
					setIsLoading(false)
					setErrorMsg('Please enter a country !')
				}
				else if(!(arg.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/))) {
					setIsLoading(false)
					setErrorMsg('Only letters allowed !')
				}
				else {
					setIsLoading(false)
					setErrorMsg('Error fetching the API !')
	    		}
			})
			.catch(err => {
				setIsLoading(false)
				setFetchError(err)
			})
			.finally(() => setIsLoading(false))
	}


	// fetches the user input's country code result first and use it to fetch it to the main API
	function fetchByCountryCode(arg: string) {
        setTimeout(() => abortController.abort(), 2000);
        fetch('http://api.geonames.org/searchJSON?name=' + arg + '&featureClass=A&orderby=population&maxRows=1&username=weknowit', {signal: signal })
        .then((response) => response.json())
          .then((res) => {
            setIsLoading(false)
			// Handle illegal cases and limited search to letters only            
			if (res.totalResultsCount > 0 && arg != ''  && arg.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/)) {
                fetchAPI(res.geonames[0].countryCode)
				console.log(res.geonames[0].countryCode)
            } 
			else if(arg == ''){
				setIsLoading(false)
				setErrorMsg('Please enter a country !')
			}
			else if(!(arg.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/))) {
				setIsLoading(false)
				setErrorMsg('Only letters allowed !')
			}
			else {
                setErrorMsg('Error fetching country code API !')
                setTimeout(() => 2000);
              }
          })
          .catch((err) => setFetchError(err))
      }

	// handles press button to allow it to call fetchByCountryCode and using its result for fetchAPI
	// avoid for example if we type "bingo" to have different country codes such as US, SS, BF and so to have different countries
	// so it allows to fetch the country code with a unique country with the same country code
	const pressButton = async (arg: string) => {
		await fetchByCountryCode(arg)
	}

	
	// render error message
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
					<ActivityIndicator size='large' color='green' ></ActivityIndicator>
					<Text style={styles.loadingText}>{'Loading...'}</Text>
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
					<Text style={styles.titleText}> Search By Country </Text>
					<View style={styles.inputContent}>
						<TextInput
							clearTextOnFocus = {true}
							clearButtonMode = {"while-editing"}
							style = {styles.input}
							onChangeText = {text => onChangeText(text)}
							value = {value}
						></TextInput>
					</View>

					{renderFetchError()}
					{renderError()}
					
					<View style={styles.searchIcon}>
						<Icon  name="search1" size={50} color={"#50aab5"} onPress={() => pressButton(value)}></Icon>
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