import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
// Add other reducers as needed

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other slices here
  },
});

export default store;
