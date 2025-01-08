import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
    id: serial("id").primaryKey(),
    text: varchar("todoName", { length:256}).notNull(),
    done: boolean("done").notNull().default(false),
});

export type InsertTodo = typeof todos.$inferInsert;
export type SelectTodo = typeof todos.$inferSelect;

