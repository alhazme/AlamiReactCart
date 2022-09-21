/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {CartPage, DevicePage} from './pages';
import {ProgressBar} from './components';

const App = () => {
  return (
    <SafeAreaView>
      <CartPage />
      <StatusBar />
      <ProgressBar
        percentage={0}
        height={25}
        backgroundColor="#444444"
        completedColor="#1987FF"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
