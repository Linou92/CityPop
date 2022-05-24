import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import Button from "../components/Buttons"
import Icon from "react-native-vector-icons/AntDesign"


export const TopCities = () => {
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
            
			<View style={styles.title}>
				<Text style={styles.titleText}> Top 3 cities of {"\n"} {data[0].countryName}</Text>
			</View>
            
			<View style={styles.subTitle}>
				<Text style={styles.subTitleText}> Which city do you want to check? </Text>
			</View>

			<View style={styles.button}>
				<Button text={data[0].name} onPress={() => navigation.navigate("PopulationResult", {data: data[0]})}/>
			</View>

			<View style={styles.button}>
				<Button text={data[1].name} onPress={() => navigation.navigate("PopulationResult", {data: data[1]})}/>
			</View>

			<View style={styles.button}>
				<Button text={data[2].name} onPress={() => navigation.navigate("PopulationResult", {data: data[2]})}/>
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

	title: {
		justifyContent: "center",  
	},

	titleText: {
		textAlign: "center",
		fontSize: 30,
		marginTop: 30,
		color: "#50aab5",
	},

	subTitle: {
		justifyContent: "center",
		marginTop: 20,
		marginBottom:20
	},

	subTitleText: {
		textAlign: "center",
		color: "#b4ced1",
		fontSize: 17,
	},

	button: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom:20,
	},

	footer: {
		marginTop: -5,
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