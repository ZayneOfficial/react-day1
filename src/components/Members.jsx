import { useState } from "react";

function Members() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [members, setMembers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    function addMember() {
        if(name.trim() === "" || phone.trim() === "") {
            return;
        }

        if(editingIndex !== null) {
            const updatedMembers = members.map((members, index)=> {
                if(index === editingIndex) {
                    return{
                        name: name,
                        phone: phone
                    };
                }

                return members;
            });

            setMembers(updatedMembers)
            setEditingIndex(null)
        }
        else{
            const newMember = {
                name: name,
                phone: phone
            };

            setMembers ([...members, newMember]);
        }

        setName("");
        setPhone("");
    }

    function deleteMember() {
        const newMembers = members.filter((index) =>
        i !== index)

        setMembers(newMembers)
    }

    function editMember(index) {
        const members = members[index];

        setName(members.name);
        setPhone(members.phone);
        setEditingIndex(index);
    }
    
     return (
    <div>
      <h1>Member Manager</h1>
      <label htmlFor="name">Name</label>

<input
  id="name"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

<label htmlFor="phone">Phone</label>

<input
  id="phone"
  value={phone}
  onChange={(event) => setPhone(event.target.value)}
/>

<button onClick={addMember}>
  Add Member
</button>

<ul>
  {members.map((member, index) => (
    <li key={index}>
      {member.name} - {member.phone}
      <button onClick={() => editMember(index)}>
  Edit
</button>
      <button onClick={() => deleteMember(index)}>
    Delete
  </button>
    </li>
  ))}
</ul>
<p>Total Members: {members.length}</p>


    </div>

  );
}
  

  
 

export default Members;
