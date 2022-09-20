import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {IconAdd, IconReduce} from '../../../assets';

const IconButton = ({icon, onPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'reduce':
        return <IconReduce />;
      default:
        return <IconAdd />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.background}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    borderRadius: 14,
  },
});

export default IconButton;
