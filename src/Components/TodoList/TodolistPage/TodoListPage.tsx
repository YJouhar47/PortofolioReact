import React, { useState } from "react";
import ToDoInput from "../TodoInput";
import TodoList from "../TodoList";
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
      <h2>Todo list :</h2>
      <ToDoInput addTodo={addTodo}></ToDoInput>
      <TodoList todos={todos} markCompleted={markCompleted} />
    </div>
  );

}

export default TodoListPage;