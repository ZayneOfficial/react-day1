import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }

      
    }

    
    fetchPosts();
  }, []);

  async function deletePost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete post");
    }

    setPosts(posts.filter((post) => post.id !== id));
  } catch (error) {
    setError(error.message);
  }
}

  async function addPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const newPost = await response.json();

    setPosts([newPost, ...posts]);

    setTitle("");
    setBody("");
  } catch (error) {
    setError(error.message);
  }
}

function editPost(post) {
  setEditingId(post.id);
  setTitle(post.title);
  setBody(post.body);
}

async function updatePost() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${editingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingId,
          title: title,
          body: body,
          userId: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    const updatedPost = await response.json();

    setPosts(
      posts.map((post) =>
        post.id === editingId ? updatedPost : post
      )
    );

    setEditingId(null);
    setTitle("");
    setBody("");
  } catch (error) {
    setError(error.message);
  }
}
  return (
    <div>

      <div>
  <input
    type="text"
    placeholder="Post title"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
  />

  <textarea
    placeholder="Post body"
    value={body}
    onChange={(event) => setBody(event.target.value)}
  />

  <button onClick={editingId !== null ? updatePost : addPost}>
  {editingId !== null ? "Update Post" : "Add Post"}
</button>
  
</div>
      <h1>Posts</h1>

      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => editPost(post)}>
                Edit
              </button>
              <button onClick={() => deletePost(post.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;