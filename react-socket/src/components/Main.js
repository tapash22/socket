import { useEffect, useState } from "react";
import NewUser from "./NewUser";
import ChatBox from "./ChatBox";

const Main = ({ socket }) => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("users",(users) => {
        const messageArr = [];
        for (const {userId,username} of users){
            const newMessage ={type: "UserStatus", userId,username};
            messageArr.push(newMessage);
        }
        setMessages([...messages,...messageArr]);
        setUsers(users);
    })
    // socket.on("users",(users) =>{
    //     console.log(users);
    // });
    socket.on("session", ({ userId, username}) =>{
        setUser({ userId, username});
    });

    socket.on("user connected", ({
        userId, username
    })=>{
        const newMessage ={type: "UserStatus", userId,username};
        setMessages([...messages, newMessage]);
    })
  },[socket,messages])

  const handleInputChange = (event) => {
    setNewUser(event.target.value);
  };

  const addUser = () => {
    setUser(newUser);
    socket.auth = { username: newUser };
    socket.connect();
  };

  return (
    <div className="block px-5 py-3 ">
      {user.userId && (
        <ChatBox user={user} message={message} messages={messages} setMessage={setMessage} />
      )}

      {!user.userId && (
        <NewUser
          newUser={newUser}
          handleInputChange={handleInputChange}
          addUser={addUser}
        />
      )}
    </div>
  );
};

export default Main;
