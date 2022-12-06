import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "./index.css";
import Vector from "./images/Vector.png";
import image from "./images/Rectangle 2.png";
import image1 from "./images/Vector1.png";

function App() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [toggle, setToggle] = useState(true);

  const toggleIt = () => {
    setToggle(!toggle);
  };

  const addItem = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/api/item", {
      item: itemText,
    });
    setItemText("");
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
      </div>
    </div>
  );
}

export default App;
