import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function TodoItem({ text, onRemove, id, onHandleCheckedItems }) {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    onHandleCheckedItems(id, target.checked);
  };

  return (
    <li className="add-btn flex items-center justify-between my-0.5 py-2 px-4">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="h-6 w-6"
        onChange={(e) => checkHandler(e)}
      />
      <label htmlFor="" className="flex-1 text-2xl ml-2">
        <span>{text}</span>
      </label>
      <span className="flex h-7 transition-all w-7">
        <button
          onClick={() => {
            onRemove(id);
          }}
        >
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

export default TodoItem;
