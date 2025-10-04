
import './Components/learn/todo/todo.css';
import './App.css';
import reactLogo from './assets/react.svg';

const App = () => {
  return (
    <div className="todo-container">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="todo-title">Todo List</div>
      <div className='todo-new'>
        <input type="text" />
        <button>Add</button>
      </div>
      <div className='todo-data'>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">Learning React</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Watching</a>
      </div>

    </div>
  )
}

export default App;