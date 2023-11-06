
function TodoItem({todo, removeTodo, toggleCompleted, index}) {

    const handleRemove = (e) => {
        e.stopPropagation();
        removeTodo(todo)
    }

    return (
        <li className='container'>
            <div className='row g-2'>
                    <div className='col-lg-7 col-md-7 col-sm-4'>
                    <p className={todo.completed ? 'completed' : ''}> 
                    {todo}
                    </p>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                    <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleCompleted(index)}
                    className="form-check-input"/>
                    </div>
            <div className='col-lg-3 col-md-3 col-sm-12'>
                <button onClick={handleRemove} className="btn btn-danger btn-sm">
                    Delete Task
                </button>
            </div>
            
            </div>
            
        </li>
    )
}

export default TodoItem