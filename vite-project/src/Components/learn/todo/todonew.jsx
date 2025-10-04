import { useState } from "react";

const TodoNew = (props) => {
  const { addNewtodo } = props;
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    addNewtodo(value);
    setValue(""); // clear input
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoNew;
