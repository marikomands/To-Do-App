import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// function generateUniqueId() {
//   return Math.random().toString(36).substr(2, 9);
// }

function generateUniqueId() {
  return uuidv4();
}

const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");
  console.log("🚀 ~ InputForm ~ inputText:", inputText);

  const handleSubmit = (e) => {
    console.log("a");
    e.preventDefault();
    setTaskList([
      ...taskList,
      { text: inputText, id: generateUniqueId(), completed: false },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
