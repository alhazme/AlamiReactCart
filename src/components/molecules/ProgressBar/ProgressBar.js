import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

const ProgressBar = ({backgroundColor, completedColor}) => {
  const [isInitialized, setIsInitialized] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [getPercentage, setPercentage] = useState(new Animated.Value(1));

  const progressAnimation = Animated.timing(getPercentage, {
    toValue: 100,
    duration: 3000,
    useNativeDriver: false,
  });

  const checkoutHandle = () => {
    setIsInitialized(false);
    progressAnimation.start(finished => {
      resetAnimation(finished);
    });
  };

  const resetAnimation = obj => {
    if (obj.finished) {
      progressAnimation.reset();
    }
    setIsFinished(obj.finished);
  };

  const percentage = getPercentage.interpolate({
    inputRange: [1, 100],
    outputRange: ['1%', '100%'],
  });

  const renderElement = (isInitialized, isFinished) => {
    if (isInitialized) {
      return (
        <View style={styles.checkoutContainer}>
          <TouchableOpacity
            onPress={checkoutHandle}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      if (isFinished) {
        return (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>Success Checkout</Text>
          </View>
        );
      } else {
        return (
          <View>
            <TouchableWithoutFeedback
              onLongPress={() => {
                progressAnimation.stop();
              }}
              onPressOut={() => {
                progressAnimation.start(finished => {
                  resetAnimation(finished);
                });
              }}>
              <View style={styles.progressContainer}>
                <View style={styles.progressBackground(backgroundColor)} />
                <Animated.View
                  style={styles.progressBar(percentage, completedColor)}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      }
    }
  };

  return renderElement(isInitialized, isFinished);
};
export default ProgressBar;

const styles = StyleSheet.create({
  checkoutContainer: {
    width: '100%',
    height: 82,
    padding: 16,
    backgroundColor: 'white',
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
  },
  checkoutButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1987FF',
    justifyContent: 'center',
    borderRadius: 10,
  },
  checkoutText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  successContainer: {
    width: '100%',
    height: 82,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
  },
  successText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1987FF',
    alignContent: 'center',
  },
  progressContainer: {
    width: '100%',
    height: 82,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
  },
  progressBackground: backgroundColor => ({
    width: '100%',
    height: 25,
    marginVertical: 16,
    backgroundColor: backgroundColor,
    borderRadius: 5,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    position: 'relative',
  }),
  progressBar: (percentage, completedColor) => ({
    width: percentage,
    height: 25,
    borderRadius: 5,
    backgroundColor: completedColor,
    position: 'absolute',
    left: 16,
  }),
});
