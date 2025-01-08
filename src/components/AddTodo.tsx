"use client";

import { AddTodoAction } from "../actions/AddTodoAction";

const AddTodo = () => {
  return (
    <form action={AddTodoAction}>
      <input type="text" name="text" className="border border-black-500" />
      <button type="submit">送信</button>
    </form>
  );
};

export default AddTodo;
