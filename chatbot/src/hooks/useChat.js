import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, addUserMessage } from '../store/slices/chatSlice';

export const useChat = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector((state) => state.chat);

  const send = (message) => {
    dispatch(addUserMessage(message));
    dispatch(sendMessage(message));
  };

  const retry = () => {
    if (messages.length === 0) return;

    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    if (lastUser) dispatch(sendMessage(lastUser.content));
  };

  return { messages, loading, error, send, retry };
};
