import { useState } from "react";

function Member() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [members, setMembers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    function addMember() {
        if (name.trim() === "" || phone.trim() === "") {
            return;
        }

        if (editingIndex !== null) {
            const updatedMembers = members.map((member, index) => {
                if (index === editingIndex) {
                    return {
                        name: name,
                        phone: phone
                    };
                }

                return member;
            });

            setMembers(updatedMembers);
            setEditingIndex(null);
        } else {
            const newMember = {
                name: name,
                phone: phone
            };

            setMembers([...members, newMember]);
        }

        setName("");
        setPhone("");
    }

    function deleteMember(index) {
        const newMembers = members.filter((member, i) => i !== index);

        setMembers(newMembers);
    }

    function editMember(index) {
        const member = members[index];

        setName(member.name);
        setPhone(member.phone);
        setEditingIndex(index);
    }

    return (
        <div>
            <h1>Member Management</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={addMember}>
                {editingIndex !== null ? "Update Member" : "Add Member"}
            </button>

            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        {member.name} - {member.phone}
                        <button onClick={() => editMember(index)}>Edit</button>
                        <button onClick={() => deleteMember(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );      
}

export default Member;