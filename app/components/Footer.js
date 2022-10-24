import React from "react";
import {StyleSheet, Text, Image, View, ImageBackground} from "react-native";
// import TextUnderImage from './TextUnderImage'

export default function Footer () {
    return (

        <View style={styles.footerCont}>
            <View style={styles.individual}>
                <Image
                    source={require('../../assets/Icons/discover_light.png')}
                    style={styles.discover}
                />
                <Text style={styles.footerText}>Discover</Text>
            </View>

            <View style={styles.individual}>
                <Image
                    source={require('../../assets/Icons/heart_light.png')}
                    style={styles.discover}
                />
                <Text style={styles.footerText}>Matches</Text>
            </View>

            <View style={styles.individual}>
                <Image
                    source={require('../../assets/Icons/messages_light.png')}
                    style={styles.discover}
                />
                <Text style={styles.footerText}>DMs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    

    discover: {
        marginTop: 10,
        resizeMode: 'contain',
        height: 40, 
        width: 40
    },

    footerCont: {
        resizeMode: 'contain',
        flexDirection: 'row',
        backgroundColor: 'black',
        width: "100%",
        justifyContent: 'space-around',

    }, 

    footerText: {
        fontFamily: 'SydneyBold',
        color: 'white',

    },
    
    individual: {
        alignItems: 'center'   
    }

})