import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  return <div>TodoItem</div>;
};

export default TodoItem;
