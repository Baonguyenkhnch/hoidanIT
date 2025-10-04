import './Components/learn/todo/todo.css';
import TodoNew from './Components/learn/todo/todonew';
import TodoData from './Components/learn/todo/tododata';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "learning-react" },
    { id: 2, name: "learning react" }
  ]);

  const hoidanit = "Erci";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  };

  // Random id
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Thêm todo
  const addNewtodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000000),
      name: name
    };
    setTodoList([...todoList, newTodo]); 
  };

  // Xóa todo
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      
      {/* Component thêm todo */}
      <TodoNew addNewtodo={addNewtodo} />
     
      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}

      {/* Hiển thị todo list và demo props */}
      <TodoData
        todoList={todoList}
        deleteTodo={deleteTodo}
        name={hoidanit}
        age={age}
        data={data}
      />
    </div>
  );
};

export default App;
