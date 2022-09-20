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
} from 'react-native';
import {NativeModules} from 'react-native';
const {MFDeviceInfo} = NativeModules;
console.log(MFDeviceInfo);

const App = () => {
  const [deviceID, setDeviceID] = useState('');

  const getDeviceID = () => {
    MFDeviceInfo.getDeviceID(response => setDeviceID(response));
  };

  useEffect(() => {
    getDeviceID();
  });

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.page}>
          <Text>Device ID:</Text>
          <Text>{deviceID}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 16,
  },
});

export default App;
