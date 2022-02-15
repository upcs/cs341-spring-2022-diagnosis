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
    username: Yup.string().min(2, 'Too short').max(50, 'Too Long').required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be bigger than 8 characters')
                .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirming Password is required'),
});

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [disable, setDisable] = useState(false);
    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageTitle>Sign Up to PDX PDX</PageTitle>
                    <Formik
                        initialValues={{fullName: '', email: '', username: '', password: '', confirmPassword: ''}}
                        validationSchema={ValidationInputSchema}
                        onSubmit={() =>  {navigation.navigate('MainMenu');}}
                    >{({handleChange, handleBlur, handleSubmit, values, touched, errors, isValid, isSubmitting}) => (
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
                                label="Username"
                                mode="outlined"
                                icon="person"
                                placeholder="username"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                testID='username-new'
                            />
                            {touched.username && errors.username ? (<Text style={{color: '#B00000'}} testID='new-username-error'>{errors.username}</Text>) : null}
                            <TextInput 
                                label="Email Address"
                                icon="mail"
                                placeholder="your-name@example.com"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                testID='email-new'
                            />
                            {touched.email && errors.email ? (<Text style={{color: '#B00000'}} testID='new-email-error'>{errors.email}</Text>) : null}
                            <TextInput 
                                label="Password"
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
                                testID='password-new'
                            />
                            {touched.password && errors.password ? (<Text style={{color: '#B00000'}} testID='new-password-error'>{errors.password}</Text>) : null}
                            <TextInput 
                                label="Confirm Password"
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
                                testID='matching-password-new'
                            />
                            {touched.confirmPassword && errors.confirmPassword ? (<Text testID='match-password-error' style={{color: '#B00000'}}>{errors.confirmPassword}</Text>) : null}
                            <StyledButton testID='signup-button' disabled={!isValid || isSubmitting} onPress={handleSubmit} loading={isSubmitting}>
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