import logo from './logo.svg';
import './App.css';
import { useState } from'react';
import TodoList from './TodoList';

function App() {

  const[todos, setTodos] = useState([]) //state of todos in an array
  todos.push('Go Shopping')
  todos.push('Go for a run')
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
