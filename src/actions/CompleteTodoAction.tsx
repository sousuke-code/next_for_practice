"use server";
import { eq } from 'drizzle-orm';
import { db } from '../../db/db';
import { todos } from '../../db/schema';

export  async function CompleteToDoAction(id:number) {
    await db.update(todos).set({ done: true }).where(eq(todos.id, id));
}
