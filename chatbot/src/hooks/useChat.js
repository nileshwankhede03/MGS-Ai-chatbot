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
    if (!messages || messages.length === 0) return;

    const lastUserMessage =
      messages.findLast?.((msg) => msg.role === "user") ||
      [...messages].reverse().find((msg) => msg.role === "user");

    if (lastUserMessage) {
      dispatch(sendMessage(lastUserMessage.content));
    }
  };

  return { messages, loading, error, send, retry };
};
