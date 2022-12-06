import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import image from "../images/Rectangle 2.png";
import TodoList from "./TodoList";

function Todo() {
  const [itemText, setItemText] = useState("");
  const addItem = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/api/item", {
      item: itemText,
    });
    setItemText("");
  };

  return (
    <div>
      <img src={image} />
      <div className="p-6">
        <form
          className="w-full justify-between flex"
          onSubmit={(e) => {
            addItem(e);
          }}
        >
          <input
            className="inp py-2 rounded-md px-1 w-[75%]"
            placeholder="Note"
            onChange={(e) => {
              setItemText(e.target.value);
            }}
            value={itemText}
          ></input>
          <button
            className="btn ml-2 rounded-md px-6 py-1.5 text-white text-xl w-[20%]	"
            type="submit "
          >
            +
          </button>
        </form>
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
