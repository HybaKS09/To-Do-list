import { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

  return (
    <div>
      <form>
        <button>+</button>
        <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)}
            placeholder='Your next task...'
        />
      </form>
    </div>
  )
}

export default TaskForm
