import React, {useState}  from 'react';
import { View, Text, Switch, Stylesheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {RadioGroup, Radio} from '@adobe/react-spectrum'


//formik
import { Formik } from 'formik';

import { StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    StyledForm, 
    LabelIcon, 
    Colors, 
    StyleTextInput, 
    EyeIcon,
    StyledButton,
    ButtonText,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from "./../components/styles";

import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

const {company, placeholder, textInputBackground} = Colors;

const Multimedia = () => {
    let [selected, setSelected] = React.useState('');
    let num_patients = 1;
    let prognosis = "PLACEHOLDER"
    let description = "PLACEHOLDER"
    let block1 = "PLACEHOLDER";
    let ids1 = [472325227, 472325047, 505014368];//Normal, Annotated, Narrated
    let block2 = "PLACEHOLDER";
    let ids2 = [0, 0, 0];//Normal, Annotated, Narrated
    let block3 = "PLACEHOLDER";
    let ids3 = [0, 0, 0];//Normal, Annotated, Narrated
    let block4 = "PLACEHOLDER";
    let ids4 = [0, 0, 0];//Normal, Annotated, Narrated
    let block5 = "PLACEHOLDER";
    let ids5 = [0, 0, 0];//Normal, Annotated, Narrated

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                {/*Page head and logo*/}
                <PageLogo resizeMode="contain" source={require('./../assets/cropped-logo_new-1.png')} />
                <PageTitle>{prognosis}</PageTitle>
                {/*Basic description*/}
                <Text style={styles.baseText}>{description}</Text>
                {/*Available offline switch*/}
                <View style={styles.container}>
                    <Text>{enabled ? "Make page available offline" : "Available offline"}</Text>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                {/*End of universal section*/}

                {/*Patient 1 section*/}
                <Text style={styles.header}>Patient 1</Text>
                {/*Block text for patient 1*/}
                <Text style={styles.baseText}>{block1}</Text>
                {/*Video itself, should change depending on selected radio button*/}
                <Vimeo
                    ref='video'
                    videoId={ids1[options]}
                    onReady={ () => console.log('Vimeo is ready') }
                    onPlay={ () => console.log('Vimeo is playing') }
                    onPlayProgress={ data => console.log('Vimeo progress data:', data) }
                    onFinish={ () => console.log('Vimeo is finished') }
                />
                {/*Video type selection*/}
                <RadioGroup
                    label="Video Options"
                    defaultValue="0"
                    value={selected}
                    onChange={setSelected}>
                    <Radio value="0">Normal</Radio>
                    <Radio value="1">Annotated</Radio>
                    <Radio value="2">Narrated</Radio>
                </RadioGroup>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Multimedia;