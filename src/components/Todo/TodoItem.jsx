import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext';

const TodoItem = ({ todo }) => {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleCompleted} = useTodo();
  
    const editTodo = () => {
      updateTodo(todo.id, {...todo, todo: todoMsg});
      setIsTodoEditable(false);
    }
  
    const toggleComplete = () => {
        toggleCompleted(todo.id);
    }

  return (
    <div
      className={`flex border border-purpleMain/10 rounded-lg px-3 py-2 gap-x-3 shadow-purpleMain shadow-md duration-300   ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-zinc-200 dark:bg-bgSlightDark"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`capitalize text-xl xl:text-2xl outline-none w-full bg-transparent rounded-lg text-text_gray dark:text-text_gray_dark  ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center  shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem