import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://66657eb1d122c2868e40d795.mockapi.io/api/v1';
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');

      return response.data;
    } catch (error) {
      toast.error('Oops, there was an error, please try reloading!');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
