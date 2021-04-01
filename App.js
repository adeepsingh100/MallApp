import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import MainStack from './src/screens/MainStack';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}

export default App;
