import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { ShivReactNavigator } from '~/containers'

export default class AppContainer extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <ShivReactNavigator />
      </View>
    )
  }
}
