import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class TextAngrify extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>{this.props.textToAngrify.toUpperCase()} !!!</Text>
        );
    }
}