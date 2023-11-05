import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

function App() {

  const [todos, setTodos] = useState([]) //state of todos in an array
  const [completed, setCompleted] = useState(false) //state of completed todos

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].completed =!updatedTodos[index].completed
    setTodos(updatedTodos)
   
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(td => td !== todo))
  }

  const addTodo = (todo) => {

    setTodos([...todos, [todo, completed]]) // Each task is now an array with text and completed properties
  
  }
  return (
    <div className="App">
      <AddTask addTodo={addTodo} completed={completed}/>
      <TodoList todos={todos} removeTodo={removeTodo} 
      toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;
