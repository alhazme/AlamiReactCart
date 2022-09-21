import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../actions/cartsSlice';

export default configureStore({
  reducer: {
    carts: cartReducer,
  },
});
