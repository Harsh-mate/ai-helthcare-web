// src/features/adminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adminService from '../services/adminService';

export const fetchAdminData = createAsyncThunk('admin/fetchAdminData', async (_, { rejectWithValue }) => {
  try {
    const response = await adminService.getDashboardData();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    dashboardData: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.dashboardData = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default adminSlice.reducer;
