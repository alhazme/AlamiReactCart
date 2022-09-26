import React, {memo} from 'react';
import {IconButton} from '../Button';

const CartReduceButton = ({onPress}) => {
  return <IconButton icon="reduce" onPress={onPress} />;
};

export default memo(CartReduceButton);
