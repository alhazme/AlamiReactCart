import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const CartPhoto = ({photo}) => {
  return <Image source={{uri: photo}} style={styles.photo} />;
};

const styles = StyleSheet.create({
  photo: {
    width: 80,
    height: 80,
  },
});

export default memo(CartPhoto);
