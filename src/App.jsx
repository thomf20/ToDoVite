import ToDoList  from "./components/ToDoList.jsx"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Läsa React-dokumentationen",
    "Göra klart todolistan",
    "Testa olika hooks"
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    if(newTask.trim() !== ""){
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }
  const handleRemoveLastTask = () => {
    if (tasks.length > 0) {
      setTasks(tasks.slice(0, -1));
    }
  };

  return (
    <>
      <div>
        <ToDoList tasks={tasks} handleRemoveLastTask={handleRemoveLastTask} />
            <input 
              type="text" 
              value={newTask} 
              onChange={handleInputChange} 
              placeholder="Lägg till en ny uppgift" 
            />
          <button onClick={handleAddTask}>Lägg till</button><br></br>
          <button onClick={handleRemoveLastTask}>Ta bort senaste uppgiften</button>
      </div>
    </>
  )
}

export default App
