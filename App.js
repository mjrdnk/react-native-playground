/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Bananas from './src/components/guide/Bananas';
import LotsOfGreetings from './src/components/guide/Names';
import BlinkApp from './src/components/guide/Blink';
import LotsOfStyles from './src/components/guide/Styler';
import FlexDimensionsBasics from './src/components/guide/Dimensions.js';
import PizzaTranslator from './src/components/guide/Pizzify.js';
import Butonizer from './src/components/guide/Butonizer.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <Bananas />
        <LotsOfGreetings />

        {
          // commented it out because it's annoying :P
          // <BlinkApp />
        }

        <LotsOfStyles />
        <FlexDimensionsBasics />
        <PizzaTranslator />
        <Butonizer />
      </ScrollView>
    );
  }
}