/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
import {CartPage, DevicePage} from './pages';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <CartPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
