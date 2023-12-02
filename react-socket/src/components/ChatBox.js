import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatBox = ({ user, message, messages, setMessage }) => {
  return (
    <ChatContainer>
        <ChatHeader user={user} />
        <div className="relative overflow-auto">
            <div className="flex flex-col p-2">
                {
                    messages.map((message, index)=>{
                        return (
                            message.type === 'UserStatus' ?
                            (<div key={index} className="text-center">
                                <span className="bg-yellow-500">
                                    {
                                        message.userId === user.userId ? "you have to join" : `${message.username} has joined !`
                                    }
                                </span>
                            </div>) : null
                        )
                    })
                }
            </div>
        </div>
        <ChatInput message={message} setMessage={setMessage} />
     </ChatContainer>
  );
};

export default ChatBox;
