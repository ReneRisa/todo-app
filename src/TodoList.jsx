function TodoList(props){
    return (
        <div>
            {props.todos.length > 0?(
                <ul>
                    {props.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />))}
                </ul>) : (
                <p>No Tasks yet</p>
            )}
            
        </div>
    )
}

export default TodoList
//deleteTodo={props.deleteTodo}