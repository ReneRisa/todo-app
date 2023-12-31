import TodoItem from "./TodoItem"
function TodoList(props){
    return (
        <div className="container">
            <div className="row g-2 justify-content-center">
                
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
    )
}

export default TodoList
//deleteTodo={props.deleteTodo}