"use server";
import { redirect } from "next/navigation";
import { db } from "../../db/db";
import { todos, InsertTodo } from "../../db/schema";

export async function AddTodoAction(formData: FormData) {
  const text = formData.get("text") as string;

  const newTodo: InsertTodo = {
    text: text,
  };
  await db.insert(todos).values(newTodo);
  redirect("/list");
}
