import React from "react";

const ToDoList = () => {
  return (
    <div className="todoList">
      {/* <div className="todos"> */}
      <div className="todo">
        <div className="todoText">programming</div>
        <div className="icons">
          <button>
            <i class="fa-solid fa-check"></i>
          </button>
          <button>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ToDoList;
