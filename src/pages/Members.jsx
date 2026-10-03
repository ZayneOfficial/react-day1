import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Members() {
  const { id } = useParams();

  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMember() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch member");
        }

        const data = await response.json();

        setMember(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchMember();
  }, [id]);

  if (loading) {
    return <p>Loading member...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Member Details</h1>

      <h2>{member.name}</h2>
      <p>Email: {member.email}</p>
      <p>Phone: {member.phone}</p>
      <p>Website: {member.website}</p>
    </div>
  );
}

export default Members;