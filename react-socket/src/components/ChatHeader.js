import image from "../assets/logo192.png";

const ChatHeader = ({ user }) =>{
    return(
        <div className="flex px-5 py-2 border border-b-indigo-500 bg-transparent ">
          <div className="ring-1 ring-blue-500 overflow-hidden rounded-full w-8 h-8">
            <img src={image} alt="" className="p-1" />
          </div>
          <div className="px-2 flex justify-start items-center">
            <p className="text-sm font-bold tracking-wide uppercase">{user.username}</p>
          </div>
        </div>
    )
}

export default ChatHeader;