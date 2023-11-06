
function TodoItem({todo, removeTodo, toggleCompleted, index}) {

    const handleRemove = (e) => {
        e.stopPropagation();
        removeTodo(todo)
    }

    return (
        <li className='container p-3 mx-auto'>
            <div className='row g-2 justify-content-center'>
                    <div className='col-lg-5 col-md-5 col-sm-4 '>
                    <p className={todo.completed ? 'completed' : ''}> 
                    {todo}
                    </p>
                    </div>
                    <div className='col-lg-2 col-md-1 col-sm-1'>
                    <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleCompleted(index)}
                    className="form-check-input"/>
                    </div>
            <div className='col-lg-3 col-md-3 col-sm-3'>
                <button onClick={handleRemove} className="btn btn-danger btn-sm">
                    Delete Task
                </button>
            </div>
            
            </div>
            
        </li>
    )
}

export default TodoItem