import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import WorkoutCard from './components/card';
import TrainerAchievments from './pages/TraineeAchievments';
import { Provider } from 'mobx-react';
import traineeAchievmentsStore from './store/traineeAchievmentStore';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import { LinearGradient } from 'expo-linear-gradient';
import { RegisterPage } from './pages/registerPage';
import registerPageStore from './store/registerPageStore';

export default class App extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'Gibson': require('./assets/fonts/Gibson.ttf')
    }).then((res) => this.setState({ fontLoaded: true }));
  }


  render() {
    return (
      <Provider
        registerPageStore={registerPageStore} >
        <LinearGradient
          colors={['#e8f1f2', '#1b98e0', '#006494']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            width: '100%'
          }}
        />
        {/* <LoginPage /> */}
        <RegisterPage />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
