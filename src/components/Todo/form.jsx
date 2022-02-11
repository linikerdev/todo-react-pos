import { useState } from "react";
import "./todo.css";

const Form = ({ actions }) => {
  const [text, setText] = useState("");

  const addTask = () => {
    actions.add(text);
    setText("");
  };

  return (
    <div className="insert">
      <input
        min={5}
        type="text"
        placeholder="Insira a tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={!text} onClick={addTask}>
        ADD
      </button>
    </div>
  );
};

export default Form;
