import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IPrimaryButton from '../interfaces/IPrimaryButton';
import { secodaryFontColor } from '../config/colors';

const SecondaryButton = ({text} : IPrimaryButton) => {
    
    return (
        <View><Text style={{color: secodaryFontColor}}>{text}</Text></View>
    )
}

export default SecondaryButton;