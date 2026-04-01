import { useState, useRef, useEffect } from 'react';
import { useChat } from '../hooks/useChat.js';
import MessageBubble from '../components/MessageBubble.jsx';
import TypingIndicator from '../components/TypingIndicator';
import toast from 'react-hot-toast';
import { MAX_MESSAGE_LENGTH } from '../constants/constants';

const ChatLayout = () => {
  const [input, setInput] = useState('');
  const { messages, loading, error, send, retry } = useChat();

  const bottomRef = useRef();

  const handleSend = () => {
    const trimmed = input.trim();

    if (!trimmed) return;

    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      toast.error(`Message too long (max ${MAX_MESSAGE_LENGTH} characters)`);
      return;
    }

    send(trimmed);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-200 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111827]/70 backdrop-blur-md">
        <div className="chat-container px-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">MGS AI</h1>
          <span className="text-xs text-gray-400">
            Created by Nilesh Wankhede.
          </span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              Start your conversation 🚀
            </div>
          )}

          {messages.map((msg, i) => (
            <MessageBubble key={`${msg.role}-${i}`} {...msg} />
          ))}

          {loading && <TypingIndicator />}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg text-sm flex justify-between">
              <span>{error}</span>
              <button onClick={retry} className="text-red-400 text-xs">
                Retry
              </button>
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-800 bg-[#111827]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex items-center gap-2 bg-[#0F172A] border border-gray-700 rounded-xl px-3 py-2">
            <input
              className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="
                chat-button
                flex items-center justify-center
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
