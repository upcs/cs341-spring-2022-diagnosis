import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AboutUs = () => (
    <View style={styles.mainContainer}>
        <Text style={styles.text}> PAGE FOR INFO ABOUT PDX</Text>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
    },

});

export default AboutUs;