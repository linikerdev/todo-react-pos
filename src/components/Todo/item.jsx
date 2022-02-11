import "./todo.css";

const TodoItem = ({ text, remove }) => {
  return (
    <div className="item">
      <div className="text">{text}</div>
      <button className="action" onClick={remove}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
