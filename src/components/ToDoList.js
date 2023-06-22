import React from "react";

const ToDoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  console.log("🚀 ~ ToDoList ~ taskList:", taskList);
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => {
          return (
            <div className="todo" key={index}>
              <div className="todoText">{task.text}</div>
              <div className="icons">
                <button>
                  <i className="fa-solid fa-check"></i>
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
