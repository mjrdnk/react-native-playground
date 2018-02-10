import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View>
                {
                    // Try removing the `flex: 1` on the parent View.
                    // The parent will not have dimensions, so the children can't expand.
                    // What if you add `height: 300` instead of `flex: 1`?
                }
                <View style={{ height: 100 }}>
                    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                    <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
                </View>

                <View>
                    <View style={{ width: 50, height: 5, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 100, height: 10, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 150, height: 15, backgroundColor: 'steelblue' }} />
                </View>

                {/* // Try setting `alignItems` to 'flex-start'
                // Try setting `justifyContent` to `flex-end`.
                // Try setting `flexDirection` to `row`. */}
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{ width: 50, height: 5, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 50, height: 5, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 50, height: 5, backgroundColor: 'steelblue' }} />
                </View>
            </View>

        );
    }
}