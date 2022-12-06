import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Vector from "../images/Vector.png";
import image1 from "../images/Vector1.png";

const TodoList = () => {
  const [listItems, setListItems] = useState([]);
  const [toggle, setToggle] = useState(true);

  const toggleIt = () => {
    setToggle(!toggle);
  };
  const deleteItem = async (id) => {
    const res = await axios.delete(`http://localhost:3001/api/item/${id}`);
    console.log(res.data);
  };

  useEffect(() => {
    const getItemsList = async () => {
      const res = await axios.get("http://localhost:3001/api/items");
      setListItems(res.data);
    };
    getItemsList();
  }, [listItems]);
  return (
    <div className="mt-4">
      {listItems.map((item) => (
        <div className="flex justify-between mt-2">
          <p>{item.item}</p>
          <div className="flex  ">
            <button
              onClick={toggleIt}
              style={{ backgroundColor: toggle ? "white" : "#20eeb0" }}
              className="border rounded-full mr-1 w-[50%]"
            >
              <img src={image1} />
            </button>
            <button
              onClick={() => {
                deleteItem(item._id);
              }}
            >
              <img className="h-[70%]" src={Vector}></img>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
