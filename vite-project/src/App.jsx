
import { useState } from 'react'
import './Components/learn/todo/todo.css';
import './App.css';
import reactLogo from './assets/react.svg';
import TodoNew from './Components/learn/todo/todonew';
import TodoData from './Components/learn/todo/tododata';

const App = () => {
  console.log("App component is rendering!");
  console.log("React logo imported:", reactLogo);
  
  // State để quản lý danh sách todo
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching" }
  ]);

  // Function để thêm todo mới
  const addNewtodo = (newTodoName) => {
    const newTodo = {
      id: Date.now(), // Sử dụng timestamp làm ID
      name: newTodoName
    };
    setTodoList([...todoList, newTodo]);
  };

  // Function để xóa todo
  const deleteTodo = (todoId) => {
    setTodoList(todoList.filter(todo => todo.id !== todoId));
  };
  
  return (
    <div className="todo-container">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <div className="todo-title">Todo List</div>
      
      {/* Sử dụng component TodoNew */}
      <TodoNew addNewtodo={addNewtodo} />
      
      {/* Sử dụng component TodoData */}
      <TodoData 
        todoList={todoList} 
        deleteTodo={deleteTodo}
        name="Eric"
        age={25}
        data={{ address: "Hanoi", country: "Vietnam" }}
      />
    </div>
  )
}

export default App;