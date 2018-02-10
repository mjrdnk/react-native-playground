import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class MoviesWithPromise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            info: '',
        }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                    info: responseJson.description,
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Text>{this.state.info}</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        );
    }
}