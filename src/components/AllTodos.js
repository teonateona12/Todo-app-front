import Vector from "../images/Vector.png";
import image1 from "../images/Vector1.png";
import "../index.css";

const AllTodos = ({ listItems, deleteItem, updateItem }) => {
  return (
    <div className="mt-8">
      {listItems.map((item) => (
        <div className="flex justify-between mt-2">
          <p className="font-semibold">{item.item}</p>
          <div className="flex  ">
            <button
              style={{
                backgroundColor: item.completed ? "#20eeb0" : "white",
              }}
              onClick={() => updateItem(item._id, item.completed)}
              className="border rounded-full mr-1 h-[90%] w-[70%]"
            >
              <img className="m-auto" src={image1} />
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

export default AllTodos;
