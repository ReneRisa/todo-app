function TodoItem({todo}) {
    return (
        <li>
            <p>
               {todo}
            </p>
        </li>
    )
}

export default TodoItem
//<button onClick={() => props.deleteTodo(todo.id)}>Delete</button>