
import './Components/learn/todo/todo.css';
import './App.css';
import reactLogo from './assets/react.svg';

const App = () => {
  console.log("App component is rendering!");
  console.log("React logo imported:", reactLogo);
  
  return (
    <div className="todo-container">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="todo-title">Todo List</div>
      <div className='todo-new'>
        <input type="text" />
        <button onClick={() => console.log("Add button clicked!")}>Add</button>
      </div>
      <div className='todo-data'>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" onClick={() => console.log("Clicked on Learning React link!")}>Learning React</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" onClick={() => console.log("Clicked on Watching link!")}>Watching</a>
      </div>

    </div>
  )
}

export default App;