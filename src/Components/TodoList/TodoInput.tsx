import { useState } from "react";

interface TodoInputProps {
    addTodo:(todo:string) => void
  }
  
  const ToDoInput = ({addTodo}:TodoInputProps) => {
    const [todo, setTodo] = useState("");
  
    return (
      <div>
          <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
          <button onClick={() => addTodo(todo)}>Add</button>
        </div>
    )
  }
  export default ToDoInput;
  