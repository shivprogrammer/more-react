import React, { PropTypes, Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import { SplashContainer } from '~/containers';

export default class ShivReactNavigator extends Component {
  renderScene = (route, navigator) => {
    return <SplashContainer navigator={navigator} />
  }
  configureScene = (route) => {

  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene} />
    )
  }
}
