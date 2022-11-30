import React from "react";
import { FaRegMoon } from "react-icons/fa";

function TodoHead() {
  const menuList = [
    { id: 1, text: "All" },
    { id: 2, text: "Active" },
    { id: 3, text: "Completed" },
  ];
  const menus = menuList.map((item) => (
    <li className="list-item font-medium active:border-b-white" key={item.id}>
      <button className="text-orange-500 m-1 font-extrabold text-xl">
        {item.text}
      </button>
    </li>
  ));
  return (
    <header className="items-center bg-slate-600 text-gray-50 flex justify-between py-3.5 px-3.5">
      <button>
        <FaRegMoon />
      </button>
      <ul className="flex">{menus}</ul>
    </header>
  );
}

export default TodoHead;
