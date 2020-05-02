import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { secodaryFontColor } from '../config/colors';
import Input from '../components/input'
import PrimaryButton from "../components/primaryButton";
import { inject, Observer, observer } from "mobx-react";

// @inject('registerPageStore')
// @observer
export class RegisterPage extends Component {

    styles = StyleSheet.create({
        main: { flex: 1, justifyContent: 'space-around', alignSelf: 'center', width: '80%', paddingTop: '20%' },
        title: { color: secodaryFontColor, fontSize: 24, fontFamily: 'Gibson', textAlign: 'center' },
        imputFields: {justifyContent: 'center'}
    });
    
    render() {
        return (
            <View style={this.styles.main}>
                <Text style={this.styles.title}>Register</Text>
                <View>
                    <Input title={'Full Name'} />
                    <Input title={'Country'} />
                    <Input title={'Password'} />
                </View>
                <View><PrimaryButton text={'Register'}/></View>
            </View>
        )
    }
}