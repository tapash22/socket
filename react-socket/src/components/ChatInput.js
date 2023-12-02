const ChatInput = ({ message, setMessage}) => {
  return (
    <div className="w-full mt-auto ">
      <div className="flex px-2 py-2 ">
        <input
          type="text"
          className="h-8 ring-1 ring-indigo-500 px-2 w-full "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="h-8 px-4 text-sm font-normal bg-blue-500 text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
