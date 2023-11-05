import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {

  const[todos, setTodos] = useState([]) //state of todos in an array

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
