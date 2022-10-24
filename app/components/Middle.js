import React from "react";
import {StyleSheet, Text, Image, View, ImageBackground} from "react-native";
import Profiles from "../../assets/Profiles";
import { Themes } from "../../assets/Themes";

export default function Middle () {
    return (
        <View style={styles.midContainer}>
            <ImageBackground
                style={styles.profImage}
                source={Profiles.mtl.image}
            >
                <Text style={styles.nameImageText}>MTL</Text>
                <Text style={styles.imageText}>2 miles away</Text>
            </ImageBackground>

            <View style={styles.audioBox}>
                <Text style={styles.takeText}>My Hottest Take</Text>
                <View style={styles.audioIcons}>
                    <Image
                        source={require('../../assets/Icons/player_light.png')}
                        style={styles.player}
                    />
                    
                    <Image
                        source={require('../../assets/Icons/audio_waveform_light.png')}
                        style={styles.soundWave}
                    />
                </View>

            </View>

        </View>


    )

}

const styles = StyleSheet.create({
    midContainer: {
        paddingTop: 10,
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'red',


    },
    nameImageText: {
        color: 'white',
        fontFamily: 'SydneyBold',
        left: 10,
        top: 10,
        fontSize: 32,
    },

    imageText: {
        position: 'relative', 
        top: '80%', 
        left: 10, 
        right: 0,
        bottom: 0,

        fontFamily: 'SydneyBold',
        color: 'white',
        fontSize: 24,
        

    }, 

    takeText: {
        fontFamily: 'SydneyBold',
        fontSize: 25, 
        paddingTop: 20

    },
    soundWave: {
        resizeMode: 'contain',
        width: '80%',
        // height: 20,
        
    },
    audioBox: {
        marginTop: 25,
        
        width: "80%",
        height: 175,
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 20
    },
    player: {
        resizeMode: 'contain',
        // height: 30,
        width: '20%'

    },

    audioIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    profImage: {
        width: '100%', 
        aspectRatio: 1/1.1
        // backgroundColor: 'red',
    }

})