import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, done: false }])
  }

  return (
    <div>
      <TaskForm onAdd={addTask} />
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
}

export default App;
