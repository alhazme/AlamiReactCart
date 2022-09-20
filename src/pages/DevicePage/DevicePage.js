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

const {MFDeviceInfo} = NativeModules;

const DevicePage = () => {
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

export default DevicePage;
