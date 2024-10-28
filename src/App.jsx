import ToDoList  from "./components/ToDoList.jsx"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Läsa React-dokumentationen",
    "Göra klart todolistan",
    "Testa olika hooks"
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if(newTask.trim() !== ""){
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  }
  const handleSaveEdit = () =>{
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  }

  return (
    <>
      <div> 
        <ToDoList 
          tasks={tasks} 
          handleRemoveTask={handleRemoveTask} 
          handleEditTask={handleEditTask} 
          editIndex={editIndex} 
          editText={editText} 
          setEditText={setEditText} 
          handleSaveEdit={handleSaveEdit} 
        />
            <input 
              type="text" 
              value={newTask} 
              onChange={handleInputChange} 
              placeholder="Lägg till en ny uppgift" 
            />
          <button onClick={handleAddTask}>Lägg till</button><br></br>
          <button onClick={handleRemoveTask}>Ta bort senaste uppgiften</button>
      </div>
    </>
  )
}

export default App
