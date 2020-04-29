import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

class WorkoutCard extends Component {

    private exampleData = {
        trainerName: "stallone",
        workoutType: "hiit",
        data: "Today",
        time: "16:00",
        language: "English"
    }

    styles = StyleSheet.create({
        card: {
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'center',
            marginTop: 100,
            width: '60%',
            height: '20%'
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: "center"
          }
    })


    render() {
        return (
            <View style={this.styles.card}>
                <ImageBackground source={require('../assets/hiit.jpeg')} style={this.styles.backgroundImage}>
                    <Text> Name: {this.exampleData.trainerName}</Text>
                    <Text> Workout tpye: {this.exampleData.workoutType}</Text>
                    <Text>Date: {this.exampleData.data}</Text>
                </ImageBackground>
            </View>
        )
    }



}

export default WorkoutCard;