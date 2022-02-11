import { useState } from "react";
import Header from "../components/Header/";
import FormTodo from "../components/Todo/form";
import Lista from "../components/Todo/list";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [showForm, setShowForm] = useState(true);
  const [todos, setTodo] = useState([]);

  const toogleForm = () => setShowForm(!showForm);

  const formatTask = (text) => ({
    id: uuidv4(),
    text: text,
    status: false,
  });

  const actions = {
    add: (text) => setTodo([...todos, formatTask(text)]),
    remove: (id) => {
      const task = todos.find((item) => item.id === id);
      const index = todos.indexOf(task);
      todos.splice(index, 1);
      setTodo([...todos]);
    },
    update: () => console.log("atualizar"),
  };

  return (
    <div id="todo">
      <Header toogle={toogleForm} show={showForm} />

      {showForm ? <FormTodo actions={actions} /> : null}
      <Lista todos={todos} actions={actions} />
    </div>
  );
};

export default Todo;
