import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, addUserMessage } from '../store/slices/chatSlice';

export const useChat = () => {
  const dispatch = useDispatch();

  const { messages, loading, error } = useSelector((state) => state.chat);

  const lastUserMessage = [...messages]
    .slice()
    .reverse()
    .find((msg) => msg.role === 'user');

  const send = (message) => {
    dispatch(addUserMessage(message));
    dispatch(sendMessage(message));
  };

  const retry = () => {
    if (!lastUserMessage) return;
    dispatch(sendMessage(lastUserMessage.content));
  };

  return {
    messages,
    loading,
    error,
    send,
    retry,
  };
};
