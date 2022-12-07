import axios from "axios";
import "../index.css";
import Vector from "../images/Vector.png";
import image1 from "../images/Vector1.png";
import AllTodos from "./AllTodos";

const TodoList = ({ listItems, fillter }) => {
  return (
    <div className="mt-4 ">
      {!fillter ? <AllTodos listItems={listItems} /> : `blaah`}
    </div>
  );
};

export default TodoList;
