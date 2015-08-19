/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var HomeView = require('./App/Views/Home');

var FlashOrdo = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor='white'
        titleTextColor='black'
        navigationBarHidden={true}
        initialRoute={{
          title: 'Flash Ordo',
          component: HomeView,
          backButtonTitle: 'Back'
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('FlashOrdo', () => FlashOrdo);
