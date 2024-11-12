import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService'; // Assuming you have an auth service

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await authService.login(credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    role: null,
    isAuthenticated: false, // Add this property
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false; // Set to false on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.isAuthenticated = true; // Set to true on successful login
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.isAuthenticated = false; // Ensure this is false on failed login
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
