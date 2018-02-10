import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {

        this.state = {
            names: [
                'Rexxar',
                'Jaina',
                'Valeera',
            ]
        }

        const names = this.state.names.map(name => <Greeting name={name} />);

        return (
            <View style={{ alignItems: 'center' }}>
                {names}
            </View>
        );
    }
}