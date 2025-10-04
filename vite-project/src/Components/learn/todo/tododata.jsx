const TodoData = (props) => {
  const { todolist, name } = props;

  console.log("check props", todolist);

  return (
    <div className="todo-data">
      {todolist && todolist.map((item, index) => {
        console.log("check map ", index);
        return (
          <div className={`todo-item ${index}`} key={item.id}>
            <span>{item.name}</span>
            <button>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
