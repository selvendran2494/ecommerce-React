import { event } from "jquery";
import { useState } from "react";

//Reusuable Block - 1
const TodoForm = ({addTodo}) => {
  const [taskname, setTaskname] = useState("");
  const submit = (e)=>{
    e.preventDefault();
    if (!taskname) return;
    addTodo(taskname);
    setTaskname("");
}
  return (
    <form style={{ margin: "3rem" }}>
      <div className="form-group">
        <label for="exampleInputEmail1" className="mb-2">
          Add Task
        </label>
        <input
          type="text"
          value={taskname}
          onChange={(event) => {
            setTaskname(event.target.value);
          }}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Add new to do"
        />
      </div>
      <button onClick={submit} type="add" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};
//Reusuable Block - 2
const TodoList = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <button className="btn btn-outline-success" onClick={() => markTodo(index)}>
          ✓
        </button>{" "}
        <button className="btn btn-outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
};

//main block
const Todo = () => {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe to do",
      isDone: false,
    },
  ]);
  console.log(todos);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo Notes</h1>
        <TodoForm addTodo={addTodo} />
        {/* Reusuable Function */}

        <div>
          {todos.map((todo, index) => (
            <div className="card" style={{marginLeft:"3rem",marginRight:"3rem"}}>
              <TodoList key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Todo;
