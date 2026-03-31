import MarkdownRenderer from "./MarkdownRenderer";

const MessageBubble = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      
      <div
        className={`
          px-4 py-3 rounded-2xl max-w-[80%] text-sm shadow-md
          ${isUser 
            ? "bg-[#10A37F] text-white rounded-br-none"
            : "bg-[#1F2937] text-gray-200 rounded-bl-none border border-gray-700"
          }
        `}
      >
        {isUser ? content : <MarkdownRenderer content={content} />}
      </div>

    </div>
  );
};

export default MessageBubble;