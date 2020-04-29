import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default class HomePage extends Component {

    lorem = "Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod \n t empor incididunt ut labore "



    render() {
        return (
            <View style={this.styles.main}>
                <View>
                    <Text>Upcoming Workout</Text>
                    <View style={this.styles.upcoming}>
                        <View style={this.styles.event}>
                            <View><MaterialIcons name="date-range" size={32} color='#aec6cf' /></View>
                            <View style={{ borderColor: '#C0C0C0', borderLeftWidth: 1, height: '80%' }}></View>
                            <View>
                                <Text> Yoga </Text>
                                <Text style={{ ...this.styles.txt, paddingVertical: '1%' }}>{new Date().toLocaleDateString()}</Text>
                                <Text style={this.styles.txt}> {this.lorem} </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={this.styles.addButton}>
                    <MaterialIcons name='add' size={30} color={'white'}/>
                </View>
            </View>
        )
    }


    styles = StyleSheet.create({
        main: { flex: 1, alignSelf: 'center', width: '90%', marginTop: '10%', justifyContent: 'space-between' },
        upcoming: {
            backgroundColor: 'white',
            justifyContent: 'center',
            shadowColor: 'gray',
            shadowOffset: { width: 3, height: 5 },
            shadowOpacity: 10,
            shadowRadius: 4,
            elevation: 1
        },
        event: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '2%'
        },
        txt: {
            color: '#C0C0C0'
        },
        addButton: {
            height: 70,
            width: 70,
            borderRadius: 35,
            backgroundColor: 'silver',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end'
        }
    })


}