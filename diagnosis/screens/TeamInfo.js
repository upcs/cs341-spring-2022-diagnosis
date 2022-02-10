import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TeamInfo = () => (
    <View style={styles.mainContainer}>
        <Text style={styles.text}> PAGE FOR INFO ABOUT THE TEAM</Text>
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

export default TeamInfo;