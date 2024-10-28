/* eslint-disable react/prop-types */

function ToDoList({tasks, handleRemoveTask}) {

return (
    <div>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Ta bort</button>
          </li>  
        ))}
    </div>
)
}

export default ToDoList