import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import image from "../images/Rectangle 2.png";
import image1 from "../images/Vector1.png";
import AllTodos from "./AllTodos";
import CompletedTodos from "./CompletedTodos";

function Todo() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [fillter, setFillter] = useState(false);

  const deleteItem = async (id) => {
    const res = await axios.delete(
      `https://todo-app-api-0a5r.onrender.com/api/item/${id}`
    );
  };

  const updateItem = async (id, item) => {
    const res = await axios.put(
      `https://todo-app-api-0a5r.onrender.com/api/item/${id}`,
      {
        completed: !item,
      }
    );
  };
  const addItem = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://todo-app-api-0a5r.onrender.com/api/item",
      {
        item: itemText,
      }
    );
    setItemText("");
  };
  useEffect(() => {
    const getItemsList = async () => {
      const res = await axios.get(
        "https://todo-app-api-0a5r.onrender.com/api/items"
      );
      setListItems(res.data);
    };
    getItemsList();
  }, [listItems]);

  const fillterHandler = (e) => {
    e.preventDefault();
    setFillter(!fillter);
  };
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let days = weekday[d.getDay()];

  const date = new Date();
  const [hour, minutes] = [date.getHours(), date.getMinutes()];
  const [day] = [date.getDate()];

  return (
    <div className="bg-color h-[100vh] xl:flex xl:justify-between xl:p-[10%]">
      <h1 className=" txt xl:text-8xl hidden xl:flex xl:w-[40%] xl:mt-[20%] xl:font-bold">
        Todo
      </h1>

      <div className="bg-white sm:w-[70%] sm:m-auto sm:mt-10 xl:w-[40%]  rounded-b-xl ">
        <img className="w-full" src={image} />
        <div className="-mt-[20%] ml-[60%] w-[30%] ">
          <h1 className="text-white font-bold text-right">{`${days} ${day}`}</h1>
          <p className="text-white font-bold text-3xl text-right">{`${hour}:${minutes}`}</p>
        </div>
        <div className="p-6 pb-20 mt-5 md:mt-20">
          <form className="w-full justify-between flex">
            <div className="inp flex p-1 rounded-md">
              <button
                onClick={(e) => fillterHandler(e)}
                className="border2 rounded-full mr-1 h-[90%] w-[15%]"
              >
                <img className="m-auto" src={image1} />
              </button>
              <input
                className="inp py-1  px-1 w-[75%]"
                placeholder="Note"
                onChange={(e) => {
                  setItemText(e.target.value);
                }}
                value={itemText}
              ></input>
            </div>
            <button
              className="btn ml-2 rounded-md px-6 py-1.5 text-white text-xl w-[20%]	"
              type="submit "
              onClick={(e) => {
                addItem(e);
              }}
            >
              +
            </button>
          </form>
          {!fillter ? (
            <AllTodos
              listItems={listItems}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          ) : (
            <CompletedTodos
              listItems={listItems}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
