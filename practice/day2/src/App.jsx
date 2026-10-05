
import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  
  const handleAddMember = () => {
    if (name.trim() === "") {
      alert("Please enter a name.");
      return;
    }

    if (editingIndex !== null) {
      const updatedMembers = members.map((member, index) =>
        index === editingIndex ? name : member
      );
      setMembers(updatedMembers);
      setEditingIndex(null);
    } else {
      setMembers([...members, name]);
    }

    setName("");            
  }

  const handleEditMember = (index) => {
    setName(members[index]);
    setEditingIndex(index);
  }

  const handleDeleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  }

  return (
    <div className="App">
      <h1>Member Manager</h1>
      <input
        type="text"
        placeholder="Enter member name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddMember}>
        {editingIndex !== null ? "Update Member" : "Add Member"}
      </button>

      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member}
            <button onClick={() => handleEditMember(index)}>Edit</button>
            <button onClick={() => handleDeleteMember(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );    

  

}

export default App;