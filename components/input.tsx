import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props: any) => {

    const { onTextChange, title } = props;

    const styles = StyleSheet.create({
        main: { justifyContent: 'center', paddingVertical: '4%'},
        input: {borderBottomWidth: 0.17, borderColor: '#ffff' , fontSize: 16, paddingTop: '2%'}
    })

    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 12, color: '#8BB9FC' }}> {title}</Text>
            <TextInput style={styles.input} onChangeText={onTextChange} />
        </View>
    )
}

export default Input;