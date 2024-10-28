/* eslint-disable react/prop-types */

function ToDoList({tasks, handleRemoveTask, handleEditTask, 
          editIndex, editText, setEditText, handleSaveEdit
}) {

return (
    <div>
      {tasks.map((task, index) => (
        <li key={index}>
          {editIndex === index ? ( // Om uppgiften är i redigeringsläge, visa ett inputfält
            <>
              <input 
                type="text" 
                value={editText} 
                onChange={(e) => setEditText(e.target.value)} 
              />
              <button onClick={handleSaveEdit}>Spara</button>
            </>
          ) : (
            <>
              {task}
              <button onClick={() => handleEditTask(index)}>Ändra</button>
              <button onClick={() => handleRemoveTask(index)}>Ta bort</button>
            </>
          )}
        </li>
      ))}
    </div>
)
}

export default ToDoList