
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
        <div>Learninig React</div>
        <div>Watching</div>

      </div>

    </div>
  )
}

export default App;