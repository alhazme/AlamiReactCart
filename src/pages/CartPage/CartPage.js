import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Cart} from '../../components';

const CartPage = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Cart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CartPage;
