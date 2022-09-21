import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {Cart, ProgressBar} from '../../components';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {
  getCarts,
  addAmount,
  reduceAmount,
  updateAmount,
  submitAmount,
} from '../../actions/cartsSlice';

const CartPage = ({navigation}) => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.carts);

  const openAboutPage = () => {
    navigation.navigate('DevicePage');
  };

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <Button onPress={openAboutPage} title="About" color="#1987FF" />
      ),
    });
    dispatch(getCarts());
  }, []);

  const cartItem = ({item}) => {
    return (
      <Cart
        data={item}
        addAmount={() => {
          dispatch(addAmount(item.id));
        }}
        reduceAmount={() => {
          dispatch(reduceAmount(item.id));
        }}
        updateAmount={text => {
          dispatch(updateAmount({id: item.id, text: text}));
        }}
        submitAmount={event => {
          dispatch(submitAmount({id: item.id, text: event.nativeEvent.text}));
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <FlatList
          data={carts}
          renderItem={cartItem}
          keyExtractor={item => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
        <View style={{position: 'absolute', width: '100%', bottom: 0}}>
          <ProgressBar
            percentage={0}
            height={25}
            backgroundColor="#444444"
            completedColor="#1987FF"
            onCompleted={() => {
              console.log('waktunya pindah halaman');
              openAboutPage();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    position: 'relative',
  },
  listContent: {
    paddingBottom: 82,
  },
});

export default CartPage;
