"use client";

import { db } from "../../db/db";
import { useState, useEffect } from "react";
import { todos, SelectTodo } from "../../db/schema";
import { CompleteToDoAction } from "@/actions/CompleteTodoAction";
import { ListTodoAction } from "@/actions/ListTodoAction";

type Todo = {
  id: number;
  text: string;
  done: boolean;
}

export default function ListTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(()=> {
    async function fetchTodos() {
      const data = await ListTodoAction();
      setTodos(data);
    }
    fetchTodos();
  }, []);

  const handleCompleteTodo = async(id : number) => {
    await CompleteToDoAction(id);
    alert('完了しました');

    const updateTodos = await ListTodoAction();
    setTodos(updateTodos);
  };

  return (
    <div>
      { todos.map((todo: SelectTodo) => {
        return (
          <div key={todo.id} className="border flex justify-center">
             {todo.text}
             <button className="bg-red-500" onClick={() =>handleCompleteTodo(todo.id)}>
               完了
             </button>
          </div>
        )
      })}
    </div>
  );
}

