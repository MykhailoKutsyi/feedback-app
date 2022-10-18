import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://127.0.0.1:5000/';

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
