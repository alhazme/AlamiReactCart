import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {datas} from '../../assets';
import {Cart, ProgressBar} from '../../components';
import {useNavigation} from '@react-navigation/native';

const CartPage = ({navigation}) => {
  const nav = useNavigation();
  const cartItem = ({item}) => <Cart data={item} />;

  const openAboutPage = () => {
    navigation.navigate('DevicePage');
  };

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <Button onPress={openAboutPage} title="About" color="#1987FF" />
      ),
    });
  });

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <FlatList
          data={datas}
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
