import './TodoItem.css'

function TodoItem({todo, removeTodo, toggleCompleted, index}) {

    const handleRemove = (e) => {
        e.stopPropagation();
        removeTodo(todo)
    }

    return (
        <li className='container'>
            <div className='row'>
            <div className='col'>
            <p className={todo.completed ? 'completed' : ''}> 
               {todo}
            </p>
            <input type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}/>
            </div>
            <div className='col'>
                <button onClick={handleRemove}>
                    Delete Task
                </button>
            </div>
            
            </div>
            
        </li>
    )
}

export default TodoItem