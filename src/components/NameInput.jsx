import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="name">Enter your name</label>

      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Hello {name}</p>
    </div>
  );
}

export default NameInput;