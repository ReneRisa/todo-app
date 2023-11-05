function TodoItem({todo, removeTodo}) {

    const handleRemove = (e) => {
        e.stopPropagation();
        removeTodo(todo)
    }

    return (
        <li>
            <div>
            <p>
               {todo}
            </p>
            <input type="checkbox"
                checked={todo.completed}
                onChange={() => removeTodo(todo.id)}/>
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