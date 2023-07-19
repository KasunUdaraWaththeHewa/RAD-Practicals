import Greeting from'./Greeting';
import './App.css';
import Counter from './Counter';
import Toggle from './Toggle';
import Timer from './Timer';
import TodoList, { todos } from './TodoList'; 


function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
