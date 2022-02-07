import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

var time = new Date().getHours();

var button1Cliked = () => {
    alert("Button 1 clicked");
}

var button2Cliked = () => {
    alert("Button 2 clicked");
}

var button3Cliked = () => {
    alert("Button 3 clicked");
}

var button4Cliked = () => {
    alert("Button 4 clicked");
}

const MainMenu = () => (

    
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>   
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
            </View>
            
            <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1}></Image>
            <Text style={styles.welcomeText}>Good Morning, {"\n"}
                Guest
            </Text>

            <View style={styles.quickLinksView}>
                <Text style={styles.exploreText}>Explore:</Text>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button1Cliked}> 
                    <Text style={styles.buttonText}>Knowledge Test</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button2Cliked}> 
                    <Text style={styles.buttonText}>Topic of the Day</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button3Cliked}> 
                    <Text style={styles.buttonText}>Community</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button4Cliked}> 
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
);

// style sheet to keep the enhancements clean and readable
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },

    headerContainer: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: 0,
        height: 100,
        justifyContent: "center",
        alignContent: "center",
        width: '100%',
    },

    PDXLogo: {
        resizeMode: "contain",
        width: 200,
        top: 15,
        left: 90,
        flex: 1,
    },

    accountIcon: {
        position: "absolute",
        resizeMode: "contain",
        width: 50,
        height: 50,
        right: 15,
        top: 35
    },

    stethoscopeImage: {
        resizeMode: "contain",
        position: "absolute",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        top: 38
    },

    welcomeText: {
        position: "absolute",
        color: "#E63610",
        fontSize: 60,
        top: 120,
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Gill Sans",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
        
    },
    
    quickLinksView: {
        top: 65,
        backgroundColor: "#f0f0f0",
        justifyContent: 'center',
        position: "relative",
        marginTop: 280,
        height: 370,
        width: 350,
        borderRadius: 15,
        borderColor: 'red',
        alignContent: 'center'

    },

    exploreText: {
        fontSize: 45,
        marginBottom: 30,
        fontFamily: "Gill Sans",
        position: "relative",
        marginLeft: 110
    },

    magGlassImg: {
        resizeMode: "contain",
        width: '15%',
        position: 'relative'
    },

    quickLinkButtons: {
        marginTop: 9,
        alignItems: 'center',
        marginLeft: 50,
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        borderColor: 'black'

    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Gill Sans",
        fontWeight: "bold"
    }
});
    
export default MainMenu; // send it off



