import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { secodaryFontColor } from '../config/colors';
import IPrimaryButton from '../interfaces/IPrimaryButton';

const PrimaryButton = ({ text }: IPrimaryButton) => {

    const style = StyleSheet.create({
        registerButton: { alignItems: 'center', fontSize: 12 }
    })
    return (
        <View style={style.registerButton}><Text style={{ color: secodaryFontColor }}>{text}</Text></View>
    )
}

export default PrimaryButton;
