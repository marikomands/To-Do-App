import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <ToDoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
