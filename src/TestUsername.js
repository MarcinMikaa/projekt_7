import { useState } from "react";

function TestUsername() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsername = (event) => {
    setUsername(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const sendInputs = (event) => {
    event.preventDefault();
    console.log("Username: " + username);
    console.log("Password: " + password);
  };

  return (
    <div className="test">
      <form onSubmit={sendInputs}>
        <input type="text" onChange={getUsername}></input>
        <input type="text" onChange={getPassword}></input>

        <button>SEND</button>
      </form>
    </div>
  );
}

export default TestUsername;
