import React from "react";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <TodoHead />
      <section className="flex flex-col h-full min-h-0 text-sm">
        <TodoList />
      </section>
    </>
  );
}
