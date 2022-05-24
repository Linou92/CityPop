// @flow

import React from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"


type Props = {
  text: string;
  onPress(): void
}


const Button: React.FC<Props> = ({text, onPress}: Props) => {
	return (
		<TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
			<View style={{flex:1}}>
				<Text style={styles.buttonText}> {text} </Text> 
			</View>
		</TouchableOpacity>

	)
}


const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "#50aab5",
		height: 60,
		width: "60%",
		borderRadius: 10,
		flexDirection: "row",
		alignSelf: "center",
		alignItems: "center"
	},

	buttonText: {
		fontSize: 15,
		textAlign: "center",
		color: "white",
	}
})

export default Button
