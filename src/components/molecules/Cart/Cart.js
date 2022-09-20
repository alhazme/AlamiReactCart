import React, {useState, useCallback, useMemo} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {data} from '../../../assets/data';
import IconButton from '../../atoms/Button/IconButton';

const Cart = () => {
  const [price, setPrice] = useState(data.price);
  const [amount, setAmount] = useState(1);

  const addAmount = useCallback(() => {
    setAmount(prev => {
      if (prev >= data.stock) {
        return prev;
      }
      return prev + 1;
    });
  }, []);

  const reduceAmount = useCallback(() => {
    setAmount(prev => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }, []);

  return (
    <View style={styles.page}>
      <CartPhoto photo={data.photo} />
      <View style={styles.textContainer}>
        <CartTitleAndBrand
          title={data.title}
          brand={data.brand}
          variant={data.variant}
        />
        <View style={styles.subtotalContainer}>
          <View style={styles.countContainer}>
            <CartAddButton onPress={addAmount} />
            <CartInput amount={amount} />
            <CartReduceButton onPress={reduceAmount} />
          </View>
          <Text style={styles.price}>Rp {price}</Text>
        </View>
      </View>
    </View>
  );
};

const CartPhoto = React.memo(({photo}) => {
  console.log('CartPhoto renderered');
  return <Image source={photo} style={styles.photo} />;
});

const CartTitleAndBrand = React.memo(({title, brand, variant}) => {
  console.log('CartTitleAndBrand renderer');
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.brand}>
        {brand} - {variant}
      </Text>
    </View>
  );
});

const CartInput = React.memo(({amount}) => {
  console.log('CartInput renderer');
  return (
    <TextInput
      style={styles.amount}
      keyboardType="number-pad"
      autoComplete="off"
      autoCapitalize="none"
      autoCorrect={false}
      defaultValue={1}
      value={amount}
      maxLength={3}>
      {amount}
    </TextInput>
  );
});

const CartAddButton = React.memo(({onPress}) => {
  console.log('CartAddButton renderer');
  return <IconButton icon="add" onPress={onPress} />;
});

const CartReduceButton = React.memo(({onPress}) => {
  console.log('CartReduceButton renderer');
  return <IconButton icon="reduce" onPress={onPress} />;
});

const styles = StyleSheet.create({
  page: {
    padding: 16,
    flexDirection: 'row',
  },
  photo: {
    width: 80,
    height: 80,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  brand: {
    marginTop: 4,
    fontSize: 14,
    color: '#747474',
    fontWeight: '600',
  },
  subtotalContainer: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    marginHorizontal: 8,
    width: 50,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  price: {
    fontSize: 14,
    color: '#FF5722',
    fontWeight: '800',
    textAlign: 'right',
  },
});

export default Cart;
