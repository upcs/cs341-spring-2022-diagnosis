import React, {useState}  from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Yup from 'yup'

//formik
import { Formik } from 'formik';

import { StyledContainer, 
    InnerContainer,
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
    TextLinkContent,
    StyleInputLabel
} from "../components/SignUpLoginStyles";

import {Octicons, Ionicons } from '@expo/vector-icons';

const {company, placeholder} = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';

const ValidationInputSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too short').max(50, 'Too Long').required('Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be bigger than 8 characters')
                .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirming Password is required'),
});

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageTitle>Sign Up to PDX PDX</PageTitle>
                    <Formik
                        initialValues={{fullName: '', email: '', username: '', password: '', confirmPassword: ''}}
                        validationSchema={ValidationInputSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >{({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                        <StyledForm>
                            <TextInput 
                                label="Full Name"
                                icon="person"
                                placeholder="John Doe"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            />
                            <TextInput 
                                label="Username *"
                                mode="outlined"
                                icon="person"
                                placeholder="username"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            {touched.username && errors.username ? (<Text>{errors.username}</Text>) : null}
                            <TextInput 
                                label="Email Address *"
                                icon="mail"
                                placeholder="your-name@example.com"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {touched.email && errors.email ? (<Text>{errors.email}</Text>) : null}
                            <TextInput 
                                label="Password *"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            {touched.password && errors.password ? (<Text>{errors.password}</Text>) : null}
                            <TextInput 
                                label="Confirm Password *"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            {touched.confirmPassword && errors.confirmPassword ? (<Text>{errors.confirmPassword}</Text>) : null}
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Sign Up</ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Login")}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledForm>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidWrap>
    );
}

const TextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LabelIcon>
                <Octicons name={icon} size={30} color={company}/>
            </LabelIcon>
            <StyleInputLabel>{label}</StyleInputLabel>
            <StyleTextInput {...props} />
            {isPassword && (
                <EyeIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={placeholder} />
                </EyeIcon>
            )}
        </View>
    )
}

export default Signup;