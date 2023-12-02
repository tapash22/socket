const ChatContainer = (props) => {
  return (
    <div className="flex justify-center h-screen px-5 py-2">
      <div className="flex flex-col ring-1 ring-indigo-500 rounded-lg w-screen bg-transparent">
        {props.children}
      </div>
    </div>
  );
};

export default ChatContainer;
