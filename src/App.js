import logo from './logo.svg';
import './App.css';
import { useState } from'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

function App() {

  const [todos, setTodos] = useState([]) //state of todos in an array
  const [completed, setCompleted] = useState(false) //state of completed todos

  const toggleCompleted = (todo) => {
    setCompleted(true)
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(td => td !== todo))
  }

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }
  return (
    <div className="App">
      <AddTask addTodo={addTodo} completed={completed}/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
