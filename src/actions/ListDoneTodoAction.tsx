"use server";

import { db } from "../../db/db";
import { todos } from "../../db/schema";
import { eq } from "drizzle-orm";


export async function ListDoneTodoAction() {
    const todoLists = await db.select().from(todos).orderBy(todos.id).where(eq(todos.done, true));

    return todoLists;
}
