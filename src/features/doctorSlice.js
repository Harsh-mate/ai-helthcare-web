// src/features/doctorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import doctorService from '../services/doctorService';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async (_, { rejectWithValue }) => {
  try {
    const response = await doctorService.getAll();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default doctorSlice.reducer;
