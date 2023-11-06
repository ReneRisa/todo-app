import TodoItem from "./TodoItem"
function TodoList(props){
    return (
        <div className="b-container fluid">
            <div className="row g-2">
                <div className="col">
                {props.todos.length > 0?(
                <ul>
                    {props.todos.map((todo, index) => (
                    <TodoItem key={index} index={index} todo={todo} 
                    removeTodo={props.removeTodo}
                    toggleCompleted={props.toggleCompleted}/>
                    ))}
                </ul>) : (
                <p>No Tasks yet</p>
            )}
                </div>
            
            </div>
        </div>
    )
}

export default TodoList
//deleteTodo={props.deleteTodo}