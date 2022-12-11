import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import ToDoInput from "../../Components/TodoList/TodoInput";
import TodoList from "../../Components/TodoList/TodoList";
import { TodoItem } from "../../Components/TodoList/types";



const TodoListPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: completed } : todo));
  };

  return (
    <Layout>
    <div> 
      <h2>Todo list :</h2>
      <ToDoInput addTodo={addTodo}></ToDoInput>
      <TodoList todos={todos} markCompleted={markCompleted} />
    </div>
    </Layout>
  );

}

export default TodoListPage;