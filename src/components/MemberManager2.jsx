import { useState,} from 'react';

function MemberManager2() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [members, setMembers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    function handleAddMember() {
        if (name.trim() === '' || phone.trim() === '') {
            alert('Please enter both name and phone number.');
            return;
        }

        if (editingIndex !== null) {
            const updatedMembers = members.map((member, index) => 
                index === editingIndex ? { name, phone } : member
            );
            setMembers(updatedMembers);
            setEditingIndex(null);
        } else {
            setMembers([...members, { name, phone }]);
        }

        setName('');
        setPhone('');
    }

    function handleEditMember(index) {
        const memberToEdit = members[index];
        setName(memberToEdit.name);
        setPhone(memberToEdit.phone);
        setEditingIndex(index);
    }

    function handleDeleteMember(index) {
        const updatedMembers = members.filter((_, i) => i !== index);
        setMembers(updatedMembers);
    }

    return (
        <div>
            <h2>Member Manager</h2>
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
            <button onClick={handleAddMember}>
                {editingIndex !== null ? 'Update Member' : 'Add Member'}
            </button>

            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        {member.name} - {member.phone}
                        <button onClick={() => handleEditMember(index)}>Edit</button>
                        <button onClick={() => handleDeleteMember(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MemberManager2;