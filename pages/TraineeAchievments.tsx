import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Swiper from 'react-native-swiper';
import { observer, inject } from 'mobx-react';

@inject('traineeAchievmentsStore')
@observer
export default class TrainerAchievments extends Component {


    style = StyleSheet.create({
        main: { flex: 1, alignSelf: 'center', width: '100%', marginTop: 25 },
        heading: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 10 },
        name: {
            fontSize: 24
        },
        data: {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            width: '95%',
            alignSelf: 'center',
            padding: 5
        },
        date: { fontSize: 24, textAlign:'right' },
        text: { fontSize: 18, paddingVertical: '2%' },

    })

    /**
     * This page should show data about a trainee:
     * Heading:
     * 1. Name
     * 2. Measuring Date
     * Data:
     * 1. Date of measuring.
     * 2. Weight.
     * 3. Fat %.
     * 4. belly scope
     */
    render() {

        const { traineeAchievmentsStore } = this.props;

        return (
            <View style={this.style.main}>
                {/* Heading */}
                <View>
                    <Image source={require('../assets/hiit.jpeg')} />
                </View>
                <View style={this.style.heading}>
                    <Text>{traineeAchievmentsStore.personalData.name}</Text>
                </View>
                {/* Body */}
                <Swiper showsPagination={true}>
                    {traineeAchievmentsStore.statsList.map((fakeData: any) => {
                        return (
                            <View style={this.style.data}>
                                <Text style={this.style.date}>{fakeData.date.toDateString()}</Text>
                                <Text style={this.style.text}>{`Weight: ${fakeData.weight} Kg`}</Text>
                                <Text style={this.style.text}>{`Fat percentage: ${fakeData.fat}%`}</Text>
                                <Text style={this.style.text}>{`Scope: ${fakeData.scope} cm`}</Text>
                            </View>
                        )
                    })}
                </Swiper>

            </View>
        )
    }

}