import React, { useState } from "react";
import ToDoListProps from "./toDoListProps";

const ret = () => {
  console.log("Hello from ret function");
};

const TodoList = () => {
  // Call the ret function
  ret();

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const ItemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={ItemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}>
            <i className="fa-solid fa-circle-plus"></i>
          </button>
          <ol>
            {Items.map((itemValue, index) => {
              return (
                <ToDoListProps
                  key={index}
                  text={itemValue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
