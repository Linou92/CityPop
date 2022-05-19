import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Button from "../components/Buttons"

export const Homepage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.title}>
                <Text style={styles.titleText}> CityP<Image source={require('../images/logo.png')} style={styles.logoIcon}/>p </Text>
            </View>
            
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}> Welcome to CityPop ! {"\n"} You can check the population count {"\n"} of the cities all around the world ! </Text>
            </View>

            <View style={styles.button}>
                <Button text="SEARCH BY CITY" onPress={() => navigation.navigate('SearchByCity')}/>
            </View>

            <View style={styles.button}>
                <Button text="SEARCH BY COUNTRY" onPress={() => navigation.navigate('SearchByCountry')}/>
            </View>

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

    title: {
        flex: 4,
        justifyContent: 'center',  
    },

    titleText: {
        flex: 3,
        textAlign: 'center',
        fontSize: 50,
        marginTop: 50,
        color: '#50aab5',
    },

    logoIcon: {
        width:80,
        height: 70,
    },

    subTitle: {
        flex: 3,
        justifyContent: 'center',
        marginTop: 50,
    },

    subTitleText: {
        flex: 3,
        textAlign: 'center',
        color: '#b4ced1',
        fontSize: 17,
    },

    button: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
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