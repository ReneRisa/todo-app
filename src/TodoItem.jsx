import './TodoItem.css'
function TodoItem({todo, removeTodo, toggleCompleted, index}) {

    const handleRemove = (e) => {
        e.stopPropagation();
        removeTodo(todo)
    }

    return (
        <li>
            <div>
            <p className={todo.completed ? 'completed' : ''}>
               {todo}
            </p>
            <input type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}/>
            </div>
            <div>
                <button onClick={handleRemove}>
                    Delete Task
                </button>
            </div>
            
        </li>
    )
}

export default TodoItem
//<button onClick={() => props.deleteTodo(todo.id)}>Delete</button>