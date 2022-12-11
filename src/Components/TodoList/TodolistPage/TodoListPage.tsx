import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import ToDoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { TodoItem } from "../types";



const TodoListPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: completed } : todo));
  };

  return (
    <div>
      <ToDoInput addTodo={addTodo}></ToDoInput>
      <TodoList todos={todos} markCompleted={markCompleted} />
    </div>
  );

}

export default TodoListPage;