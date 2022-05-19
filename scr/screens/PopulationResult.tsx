import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";


export const PopulationResult = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            
            <View style={styles.footer}>
                <ImageBackground source={require('../images/background.png')}  resizeMode="stretch" style={styles.background}>
                    <Text style={styles.footerText}>By Lina Abu Hijleh - 2022</Text>
                </ImageBackground>
            </View>
            
            
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#e6f5ef',
    },

    footer: {
        flex: 5,
    },
    
    background: {
        flex: 5,
        justifyContent: "center",
    },

    footerText: {
        fontSize: 13,
        textAlign: "center",
        marginTop: 150,
        color: '#50aab5',
        fontWeight: 'bold'
    }

})