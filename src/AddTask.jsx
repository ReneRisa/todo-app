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
        <div className="container">
            <h1>TODO LIST</h1>
            <div className="row g-2">
                <div className="col-12">
                <input type="text" name="todoItem" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                    />
                </div>
                <div className="col-12">
                    <button onClick={addTask} className="btn btn-success btn-lg">Add Task</button>
                </div>
            
            </div>
            
        </div>
    )
}

export default AddTask