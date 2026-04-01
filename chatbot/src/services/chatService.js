import axios from 'axios';
import { API_TIMEOUT_MS } from '../constants/constants.js';

const api = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL,
  timeout: API_TIMEOUT_MS,
});

export const sendMessageAPI = async (message) => {
  try {
    const res = await api.post('/chat', { message });
    return res.data.reply;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        'Sorry, something went wrong. Please try again.',
    );
  }
};
