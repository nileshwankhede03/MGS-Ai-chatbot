import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL,
});

export const sendMessageAPI = async (message) => {
  const res = await api.post('/chat', {
    message,
  });
  return res.data.reply;
};
