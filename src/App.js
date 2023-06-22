import "./App.css";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="body">
      <Title />
      <InputForm />
      <ToDoList />
    </div>
  );
}

export default App;
