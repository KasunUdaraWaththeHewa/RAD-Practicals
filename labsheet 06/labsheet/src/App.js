import Greeting from'./Greeting';
import './App.css';
import Counter from './Counter';
import Toggle from './Toggle';
import Timer from './Timer';
import TodoList, { todos } from './TodoList'; 
import CardList from './CardList';


function App() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
