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
import FlatListBasic from './src/components/guide/FlatListBasic.js';
import SectionListBasic from './src/components/guide/SectionListBasic.js';
import MoviesWithPromise from './src/components/guide/MoviesWithPromise.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {

    function getMoviesFromApiAsync() {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return (
      <ScrollView>
        <Bananas />
        <LotsOfGreetings />
        <BlinkApp />
        <LotsOfStyles />
        <FlexDimensionsBasics />
        <PizzaTranslator />
        <Butonizer />
        <FlatListBasic />
        <SectionListBasic />
        <MoviesWithPromise />
      </ScrollView>
    );
  }
}