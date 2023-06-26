import React from "react";

const ToDoList = ({ taskList, setTaskList }) => {
  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  console.log("🚀 ~ ToDoList ~ taskList:", taskList);
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => {
          return (
            <div
              className={`todo ${task.completed ? "completed" : ""} `}
              key={index}
            >
              <div className="todoText">{task.text}</div>
              <div className="icons">
                <button onClick={() => handleCompleted(task.id)}>
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
