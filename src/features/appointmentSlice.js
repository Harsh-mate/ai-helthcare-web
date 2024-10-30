// src/features/appointmentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import appointmentService from '../services/appointmentService';

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async (_, { rejectWithValue }) => {
  try {
    const response = await appointmentService.getAll();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default appointmentSlice.reducer;
