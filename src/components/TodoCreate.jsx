import React, { useState } from "react";

function TodoCreate({ onCreate, onChange, text }) {
  return (
    <form className="flex w-full px-6 py-4">
      <input
        autoFocus
        name="text"
        type="text"
        className="border-none rounded-t-lg rounded-b-lg flex flex-1 text-base px-3 py-4"
        placeholder="내용을 추가하세요"
        onChange={onChange}
        value={text}
      />
      <button
        onClick={onCreate}
        className="text-2xl px-8 py-0 bg-orange-500 cursor-pointer rounded-tr-lg rounded-br-lg text-white"
      >
        Add
      </button>
    </form>
  );
}

export default TodoCreate;
