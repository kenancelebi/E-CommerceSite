import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../Features/Slices/sliderSlice";
import productsReducer from "../Features/Slices/productsSlice";
import cartReducer from "../Features/Slices/cartSlice";
import authReducer from "../Features/Slices/authSilece";
export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});
