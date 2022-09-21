import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getCarts = createAsyncThunk('carts/getCarts', async () => {
  const response = await fetch('https://alhaz.me/data/product/data.json');
  const json = await response.json();
  return json;
});

const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    isLoading: false,
    isError: null,
    carts: [],
  },
  reducers: {
    addAmount(state, {payload}) {
      const updatedCarts = state.carts.map(cart => {
        if (cart.item.id === payload) {
          if (cart.quantity >= cart.item.stock) {
            return {
              ...cart,
              quantity: cart.quantity,
              subtotal: cart.quantity * cart.item.price,
            };
          } else {
            return {
              ...cart,
              quantity: cart.quantity + 1,
              subtotal: (cart.quantity + 1) * cart.item.price,
            };
          }
        } else {
          return cart;
        }
      });
      return {
        ...state,
        carts: updatedCarts,
      };
    },
    reduceAmount(state, {payload}) {
      const updatedCarts = state.carts.map(cart => {
        if (cart.item.id === payload) {
          if (cart.quantity <= 1) {
            return {
              ...cart,
              quantity: 1,
              subtotal: cart.item.price,
            };
          } else {
            return {
              ...cart,
              quantity: cart.quantity - 1,
              subtotal: (cart.quantity - 1) * cart.item.price,
            };
          }
        } else {
          return cart;
        }
      });
      return {
        ...state,
        carts: updatedCarts,
      };
    },
    updateAmount(state, {payload}) {
      const updatedCarts = state.carts.map(cart => {
        if (cart.item.id === payload.id) {
          if (payload.text.length > 0) {
            var updatedAmount = Number(payload.text);
            if (updatedAmount <= 1) {
              return {
                ...cart,
                quantity: 1,
                subtotal: cart.item.price,
              };
            } else if (updatedAmount > 1 && updatedAmount <= cart.item.stock) {
              return {
                ...cart,
                quantity: updatedAmount,
                subtotal: updatedAmount * cart.item.price,
              };
            } else {
              return {
                ...cart,
                quantity: updatedAmount,
              };
            }
          } else {
            return {
              ...cart,
              quantity: 0,
              //   subtotal: 0,
            };
          }
        } else {
          return cart;
        }
      });
      return {
        ...state,
        carts: updatedCarts,
      };
    },
    submitAmount(state, {payload}) {
      const updatedCarts = state.carts.map(cart => {
        if (cart.item.id === payload.id) {
          if (payload.text.length > 0) {
            var updatedAmount = Number(payload.text);
            if (updatedAmount <= 1) {
              return {
                ...cart,
                quantity: 1,
                subtotal: cart.item.price,
              };
            } else if (updatedAmount > 1 && updatedAmount <= cart.item.stock) {
              return {
                ...cart,
                quantity: updatedAmount,
                subtotal: updatedAmount * cart.item.price,
              };
            } else {
              return {
                ...cart,
                quantity: cart.item.stock,
                subtotal: cart.item.stock * cart.item.price,
              };
            }
          } else {
            return {
              ...cart,
              quantity: 1,
              subtotal: cart.item.price,
            };
          }
        } else {
          return cart;
        }
      });
      return {
        ...state,
        carts: updatedCarts,
      };
    },
  },
  extraReducers: {
    [getCarts.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [getCarts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = null;
      let carts = [];
      action.payload.forEach(item => {
        carts.push({
          id: item.id,
          item: item,
          quantity: 1,
          subtotal: item.price,
        });
      });
      state.carts = carts;
    },
    [getCarts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },
  },
});

export const {addAmount, reduceAmount, updateAmount, submitAmount} =
  cartsSlice.actions;
export default cartsSlice.reducer;
