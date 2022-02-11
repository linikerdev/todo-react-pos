import { AiFillPlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import "./header.css";

const Header = ({ toogle, show }) => {
  

  return (
    <div className="header">
      <div className="title">Gerenciador de Tarefas</div>
      <div className="add" onClick={toogle}>
        {show ? (
          <AiOutlineMinusSquare size={20} />
        ) : (
          <AiFillPlusSquare size={20} />
        )}
      </div>
    </div>
  );
};

export default Header;
