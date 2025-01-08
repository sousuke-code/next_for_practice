"use server";

import { db } from "../../db/db";
import { todos, SelectTodo } from "../../db/schema";
import { eq } from "drizzle-orm";

export async function ListTodoAction() {
    const todoLists = await db.select().from(todos).orderBy(todos.id).where(eq(todos.done, false));

    return todoLists;
}
