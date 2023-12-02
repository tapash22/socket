import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import image from './assets/logo192.png'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      console.log(messageData);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const handleReceiveMessage = (data) => {
        setMessageList((list) => [...list, data]);
      };
    
      socket.on("receive_message", handleReceiveMessage);
    
      return () => {
        // Cleanup the event listener when the component unmounts
        socket.off("receive_message", handleReceiveMessage);
      };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header px-4">
        <img src={image} alt="" className="ring-1 ring-indigo-500 overflow-hidden h-8 w-8 rounded-full p-1 "  />
        <p>{username}</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          
          {messageList.map((messageContent, index) => {
            return (
              <div
              key={index}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div >
                  <div className="message-content">
                    <p className="font-normal text-sm ">{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
          className="font-normal text-sm"
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
