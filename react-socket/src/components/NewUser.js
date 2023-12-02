const NewUser = ({ newUser,handleInputChange, addUser }) => {
  return (
    <div className="my-2 py-2 px-2 bg-white">
      <h3 className="text-lg font-bold tracking-wide py-2 text-center">
        Add new user
      </h3>
      <div className="flex justify-center py-2 px-2 w-full ">
        <input
          type="text"
          className="h-10 w-1/4 px-2 py-2 ring-1 ring-blue-600 rounded-lg"
          placeholder="Enter user name"
          value={newUser}
          onChange={handleInputChange}
          onKeyPress={(e) => (e.code === "Enter" ? addUser() : null)}
        />
      </div>
      <div className="w-full py-2 px-2 flex justify-center">
        <button
          className="rounded-lg h-8 text-sm font-medium bg-blue-600 text-white w-1/4"
          onClick={addUser}
        >
          Join !
        </button>
      </div>
    </div>
  );
};

export default NewUser;
