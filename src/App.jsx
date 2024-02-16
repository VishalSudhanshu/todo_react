import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Project 1",
      date: "11/10/2023",
    },
    {
      task: "Test 1",
      date: "12/10/2023",
    },
  ]);

  const handlerOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-black text-white h-screen w-full">
      <AppName />
      <AddTodo btnText="Add" handlerOnChange={handlerOnChange} />
      <TodoItems btnText="Delete" todoList={tasks} />
    </div>
  );
}

export default App;
