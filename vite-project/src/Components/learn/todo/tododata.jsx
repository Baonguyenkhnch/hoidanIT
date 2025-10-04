import React from "react";

const TodoData = (props) => {
  const { todoList, deleteTodo, name, age, data } = props;

  return (
    <div className="todo-data">
      {todoList && todoList.map((item, index) => (
        <div className={`todo-item ${index}`} key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => deleteTodo(item.id)}>DELETE</button>
        </div>
      ))}

      {/* Demo props khác */}
      {name && <div>My name is {name}</div>}
      {age && <div>Age: {age}</div>}
      {data && <div>Address: {data.address}, {data.country}</div>}
    </div>
  );
};

export default TodoData;
