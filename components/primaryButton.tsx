import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { secodaryFontColor, primaryFontColor } from '../config/colors';
import IPrimaryButton from '../interfaces/IPrimaryButton';

const PrimaryButton = ({ text }: IPrimaryButton) => {

    const style = StyleSheet.create({
        registerButton: { marginBottom: '3%', alignItems: 'center', backgroundColor: 'white', paddingVertical: '4%', borderRadius: 6 },
    })
    return (
        <View style={style.registerButton}><Text style={{ color: primaryFontColor }}>{text}</Text></View>
     )
}

export default PrimaryButton;
