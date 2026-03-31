import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const sendMessageAPI = async (message) => {
  const res = await api.post('/chat', {
    message,
  });
  return res.data.reply;
};
