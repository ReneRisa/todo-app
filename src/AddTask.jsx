import { useState } from "react"

function AddTask(props) {
    const [newTask, setNewTask] = useState('') //state to hold the new task

    const addTask = () => {
        if(newTask.length > 0){
            props.addTodo(newTask)
            setNewTask('')
        }
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            <div>
            <input type="text" name="todoItem" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"/>
            <button onClick={addTask}>Add Task</button>
            </div>
            
        </div>
    )
}

export default AddTask