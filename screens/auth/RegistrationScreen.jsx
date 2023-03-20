import React from "react";
import { useState, useEffect } from 'react';
import { 
    Text, 
    TextInput, 
    View, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView, 
    Platform, 
    Dimensions,
    ImageBackground,
    Pressable
 } from 'react-native';
import {styles} from './Auth.styles';
import useTogglePasswordVisibility from '../../hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { authSignUpUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import AvatarAuth from "../../components/AvatarAuth";

const initialState = {
    email: '',
    password: '',
    login: '',
}

const RegistrationScreen = ({navigation}) => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [formSignup, setFormSignup] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2);

    const dispatch = useDispatch();

    const keyboardHide = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
    }

    const isShowAndDimensions = ({marginBottom: isShowKeyboard ? -100 : 78, width: dimensions})
    
    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get('window').width - 16 * 2;
            setDimensions(width)
        }
        const dimensionsSubscription = Dimensions.addEventListener('change', onChange);
        return () => dimensionsSubscription.remove();
    }, [])

    const handleSubmit = () => {
        keyboardHide()
        setFormSignup(initialState)
        dispatch(authSignUpUser(formSignup))
    }

    const handleChange = (inputName, inputValue) => {
        setFormSignup((prevState) => ({...prevState, [inputName]: inputValue}))
    }

    const handleFocused = () => {
        setIsShowKeyboard(true)
    }

    return(  
        <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../assets/images/dream.jpg')}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.homeRegist}>
            <AvatarAuth/>
                <View style={isShowAndDimensions}>
                    <Text style={styles.textRegister}>SignOut</Text>
                        <View>
                        <TextInput 
                            style={ styles.input } 
                            placeholder="Email" 
                            onFocus={handleFocused}
                            value={formSignup.email}
                            onChangeText={value => handleChange('email', value)}
                        />
                        </View>

                        <View style={styles.containerInput}>
                        <TextInput 
                            style={ styles.input } 
                            secureTextEntry={passwordVisibility} 
                            placeholder="Password" 
                            onFocus={handleFocused}
                            value={formSignup.password}
                            onChangeText={value => handleChange('password', value)}
                        />
                        <Pressable style={styles.showPassword} onPress={handlePasswordVisibility}>
                            <MaterialCommunityIcons name={rightIcon} size={22} color="#1B4371" />
                        </Pressable>
                        </View>
                        
                        <View>
                        <TextInput 
                            style={ styles.input } 
                            placeholder="Login" 
                            onFocus={handleFocused}
                            value={formSignup.login}
                            onChangeText={value => handleChange('login', value)}
                        />
                        </View>
                        
                        <TouchableOpacity 
                            style={styles.btn} 
                            activeOpacity={0.8}
                            onPress={handleSubmit}
                        >
                        <Text style={styles.title}>Register</Text>
                        </TouchableOpacity>

                        <View style={styles.goLog}>
                            <Text style={styles.acount}>Already have an account? 
                                <Text 
                                    style={styles.linkRout} 
                                    onPress={() => navigation.navigate('Login')}
                                    > To come in</Text>
                            </Text> 
                        </View>
                </View>  
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
    )
}

export default RegistrationScreen;