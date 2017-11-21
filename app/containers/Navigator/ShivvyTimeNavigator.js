import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavigationExperimental from 'react-native-deprecated-custom-components';

import { SplashContainer } from '~/containers'

export default class ShivReactNavigator extends Component {
  renderScene = (route, navigator) => {
    return <SplashContainer navigator={navigator} />
  }
  configureScene = (route) => {

  }
  render () {
    return (
      <NavigationExperimental.Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene} />
    )
  }
}
