// src/features/patientSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import patientService from '../services/patientService';

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async (_, { rejectWithValue }) => {
  try {
    const response = await patientService.getAll();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default patientSlice.reducer;
