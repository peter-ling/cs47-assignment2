import React from "react";
import {StyleSheet, Text, Image, Button, View} from "react-native";
// import light from "./assets/themes.js";
import { Themes } from "../../assets/Themes";



export default function NavBar(){
    return (
        <View style={styles.navBarContainer}>
            <Image
                style={styles.topLeftImage}
                source={require('../../assets/Icons/menu_light.png')}
            />

            <Text style={styles.ensom}>ensom</Text>


            <Image
                style={styles.topRightImage}
                source={require('../../assets/Icons/sun.png')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    navBarContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'blue',
        // paddingTop: 50,
        // paddingBottom: 25,
        fontFamily: "Sydney-Bold",
        backgroundColor: Themes.light.bgSecondary,
    },

    topLeftImage: {
        
        height: 48,
        width: 48,
        backgroundColor: Themes.light.bgSecondary
      },

    topRightImage: {
        height: 48,
        width: 48,
        backgroundColor: Themes.light.bgSecondary
        
    },
    ensom: {
        fontFamily: 'SydneyBold',
        fontSize: 32,
        backgroundColor: Themes.light.bgSecondary

    },

});