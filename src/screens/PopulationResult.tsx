// @flow

import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"


export const PopulationResult = () => {
	const navigation = useNavigation()
	const route: any = useRoute()
	const data = route.params?.data ? route.params.data : {}
    
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
				<View style={styles.resultContainer}>
					<Text style={styles.titleText}> The population of {"\n"} {data.name} is </Text>
					<View style={styles.populationContainer}>
						<Text style={styles.population}> {data.population} </Text>
					</View>
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
		textAlign: "center"
	},

	content: {
		alignItems: "center",
	},

	resultContainer: {
		alignItems: "center",
		width: 300,
		borderColor: "#50aab5",
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#e8f0f1",
		height: 250, 
		marginTop: 100,
	},

	populationContainer: {
		borderWidth: 1,
		borderColor: "#50aab5",
		height: 50,
		width: 250,
		borderRadius: 20,
		textAlign: "center",
		marginTop: 30
	},

	population: {
		fontSize: 30,
		textAlign: "center"
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