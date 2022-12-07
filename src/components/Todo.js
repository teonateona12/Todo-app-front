import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import image from "../images/Rectangle 2.png";
import TodoList from "./TodoList";

function Todo() {
  const [itemText, setItemText] = useState("");
  const [currentTime, setCurrentTime] = useState();

  const addItem = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/api/item", {
      item: itemText,
    });
    setItemText("");
  };

  const date = new Date();
  const [hour, minutes] = [date.getHours(), date.getMinutes()];
  const [month, day] = [date.getMonth(), date.getDate()];

  return (
    <div className="bg-color h-[100vh] xl:flex xl:justify-between xl:p-[10%]">
      <h1 className=" txt xl:text-8xl hidden xl:flex xl:w-[40%] xl:mt-[20%] xl:font-bold">
        TODO
      </h1>

      <div className="bg-white sm:w-[70%] sm:m-auto sm:mt-10 xl:w-[40%]  rounded-b-xl ">
        <img className="w-full" src={image} />
        <div className="-mt-[20%] ml-[60%] w-[30%] ">
          <h1 className="text-white font-bold text-right">{`${month} ${day}`}</h1>
          <p className="text-white font-bold text-3xl text-right">{`${hour}:${minutes}`}</p>
        </div>
        <div className="p-6 pb-20 mt-5 md:mt-20">
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
    </div>
  );
}

export default Todo;
