import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { REACT_APP_API_URL } = process.env;
axios.defaults.baseURL = REACT_APP_API_URL;

const sendFeedback = createAsyncThunk(
  '/users/feedback',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('feedback', credentials);
      console.log(data);
      toast('Thanks you for your valuable feedback!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue();
    }
  }
);

export { sendFeedback };
