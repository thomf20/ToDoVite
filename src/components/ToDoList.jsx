/* eslint-disable react/prop-types */

function ToDoList({tasks, handleRemoveLastTask}) {

return (
    <div>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveLastTask(index)}>Ta bort</button>
          </li>  
        ))}
    </div>
)
}

export default ToDoList