import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@gmail.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@gmail.com" },
    { id: 3, name: "Marcin Mika", email: "marcin.mika@gmail.com" },
  ]);

  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const sendInputs = (event) => {
    event.preventDefault();
    console.log(newName);
    console.log(newEmail);
    const newUser = {
      id: users.length + 1,
      name: newName,
      email: newEmail,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <form onSubmit={sendInputs}>
        <input type="text" onChange={getName}></input>
        <input type="text" onChange={getEmail}></input>
        <button>ADD</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          {user.name}: {user.email}
        </div>
      ))}
    </div>
  );
}

export default Users;
