import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput } from 'react-native';
import { secodaryFontColor } from '../config/colors';
import PrimaryButton from '../components/primaryButton'
import SecondaryButton from '../components/secondaryButton';

export default class LoginPage extends Component {

    render() {

        const styles = StyleSheet.create({
            main:
            {
                flex: 1,
                justifyContent: 'space-between',
                alignSelf: 'center', width: '80%',
                paddingTop: '20%'
            },
            sinInTitle:
            {
                color: secodaryFontColor,
                fontSize: 24,
                fontFamily: 'Gibson',
                textAlign: 'center'
            },
            secondaryButtons:
            {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            buttons:
            {
                alignSelf: 'stretch'
            },
            signInButton:
            {
                marginBottom: '3%',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingVertical: '4%',
                borderRadius: 6
            },
            img:
            {
                borderRadius: 10,
                width: 120,
                height: 120
            },
            imageContainer:
            {
                alignItems: 'center'
            }
        })

        return (
            <View style={styles.main}>
                <View><Text style={styles.sinInTitle}>Sign In</Text></View>
                <View style={styles.imageContainer}><Image style={styles.img} source={require('../assets/hiit.jpeg')} /></View>
                <View style={styles.buttons}>
                    <View style={styles.signInButton}><Text>SIGN IN</Text></View>
                    <View style={styles.secondaryButtons}>
                        <SecondaryButton text={'Forgot password'} />
                        <SecondaryButton text={'Switch Account'} />
                    </View>
                </View>
                <PrimaryButton text='REGISTER' />
            </View>
        );
    }

}