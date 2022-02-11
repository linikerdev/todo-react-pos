import React from "react";
import TodoItem from "./item";

const Lista = ({ todos, actions }) => {
  return (
    <>
      {todos.map((item, i) => (
        <TodoItem key={i} text={item.text} remove={() => actions.remove(item.id)} />
      ))}
    </>
  );
};

export default Lista;
