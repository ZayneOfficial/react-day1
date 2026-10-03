import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);

    setTasks(newTasks);
  }

  return (
    <div>
      <input
        id="task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button onClick={addTask}>
        Enter Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;