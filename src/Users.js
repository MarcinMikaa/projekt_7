import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@gmail.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@gmail.com" },
    { id: 3, name: "Marin Mika", email: "marcin.mika@gmail.com" },
  ]);

  return (
    <div>
      <form>
        <input type="text"></input>
        <input type="text"></input>
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
