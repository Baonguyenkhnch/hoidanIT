const TodoData = (props) => {
  const { todolist, name } = props;

  console.log("check props", todolist);

  return (
    <div className="todo-data">
      {todolist && todolist.map((item, index) => {
        console.log("check map ", index);
        return (
          <div key={index}>
            {item.name}
          </div>
        );
      })}

      <div>
        {JSON.stringify(todolist)}
      </div>
      <div>My name is {name}</div>
    </div>
  );
};

export default TodoData;
