import React, {memo} from 'react';
import {IconButton} from '../Button';

const CartAddButton = ({onPress}) => {
  return <IconButton icon="add" onPress={onPress} />;
};

export default memo(CartAddButton);
