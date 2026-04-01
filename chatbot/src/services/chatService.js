import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL,
  timeout: 10000,
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
