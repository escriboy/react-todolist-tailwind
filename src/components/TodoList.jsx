import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import TodoCreate from "./TodoCreate";

function TodoList() {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const onHandleCheckedItems = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    console.log("checkedItems", checkedItems);
    console.log(isChecked);
  };

  const [inputs, setInputs] = useState({
    text: "",
  });
  const { text } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "다크모드 구현",
    },
    {
      id: 2,
      text: "섹션 별로 나뉘게끔",
    },
    {
      id: 3,
      text: "useReducer",
    },
  ]);

  const nextId = useRef(4);

  const onCreate = (e) => {
    e.preventDefault();
    // 배열 추가 로직
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));

    setInputs({
      text: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ul className="flex-auto overflow-y-auto mt-8">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            checked={todo.checked}
            onRemove={onRemove}
            onHandleCheckedItems={onHandleCheckedItems}
          />
        ))}
      </ul>
      <TodoCreate text={text} onCreate={onCreate} onChange={onChange} />
    </>
  );
}

export default TodoList;
