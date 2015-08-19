'use strict';

var React = require('react-native');

var styles = require("./style");

var {
  Text,
  View,
  Image,
} = React;

var ViewReactClass = React.createClass({

	getInitialState: function() {
		return {
		};
	},

	render: function() {
		return (
			<View>
				<Text>Welcome</Text>
			</View>
			);
	}
});

module.exports = ViewReactClass;