import { useState } from "react";
import Vector from "../images/Vector.png";
import image1 from "../images/Vector1.png";
import "../index.css";

const CompletedTodos = ({ listItems, deleteItem, updateItem }) => {
  const completedTodos = listItems.find((x) => x.completed == true);

  return (
    <div className="mt-8">
      <div className="flex justify-between mt-2">
        <p>{completedTodos?.item}</p>
        <div className="flex  ">
          <button
            style={{
              backgroundColor: completedTodos?.completed ? "#20eeb0" : "white",
            }}
            onClick={() =>
              updateItem(completedTodos?._id, completedTodos?.completed)
            }
            className="border rounded-full mr-1 w-[50%]"
          >
            <img className="m-auto" src={image1} />
          </button>
          <button
            onClick={() => {
              deleteItem(completedTodos?._id);
            }}
          >
            <img className="h-[70%]" src={Vector}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTodos;
