import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import { LoginButton } from 'react-native-fbsdk';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// const welcomeMessage = Platform.select({
//   ios: 'Welcome to React Native iOS!',
//   android: 'Welcome to React Native Android!'
// })

// export default class ShivReact extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           {welcomeMessage}
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <LoginButton
//            onLoginFinished={() => ({})}
//            onLogoutFinished={() => ({})}
//            defaultAudience='everyone' />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default function ShivReact (props) {
  return (
    <AppContainer />
  )
}

///////////// COMPONENTS ////////////////

////////////SPLASH

function Splash (props) {
  return (
    <View>
      <Text>
        Splash
      </Text>
    </View>
  )
}

///////////// CONTAINERS ////////////////

//////// APPCONTAINER

class AppContainer extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <ShivReactNavigator />
      </View>
    )
  }
}

/////// SHIVREACTNAVIGATOR

class ShivReactNavigator extends Component {
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

////// SPLASHCONTAINER

class SplashContainer extends Component {
  render () {
    return (
      <Splash />
    )
  }
}
