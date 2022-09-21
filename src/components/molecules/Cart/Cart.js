import React, {useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  CartPhoto,
  CartTitleAndBrand,
  CartAddButton,
  CartInput,
  CartReduceButton,
} from '../../atoms';

const Cart = ({data, addAmount, reduceAmount, updateAmount, submitAmount}) => {
  const rupiahFormat = (angka, prefix) => {
    var number_string = angka.toString().replace(/[^,\d]/g, '');
    var split = number_string.split(',');
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      var separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? 'Rp.' + rupiah : '';
  };

  const memoizedRupiahFormat = useMemo(
    () => rupiahFormat(data.subtotal, 'Rp.'),
    [data.subtotal],
  );

  return (
    <View style={styles.page}>
      <CartPhoto
        photo={'https://alhaz.me/data/product/images/' + data.item.photo}
      />
      <View style={styles.textContainer}>
        <CartTitleAndBrand
          title={data.item.title}
          brand={data.item.brand}
          variant={data.item.variant}
        />
        <View style={styles.subtotalContainer}>
          <View style={styles.countContainer}>
            <CartAddButton onPress={addAmount} />
            <CartInput
              amount={data.quantity}
              updateAmount={updateAmount}
              onSubmit={submitAmount}
            />
            <CartReduceButton onPress={reduceAmount} />
          </View>
          <Text style={styles.price}>{memoizedRupiahFormat}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 16,
    flexDirection: 'row',
    height: 111,
    backgroundColor: 'white',
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
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
  price: {
    fontSize: 14,
    color: '#1987FF',
    fontWeight: '800',
    textAlign: 'right',
  },
});

export default Cart;
