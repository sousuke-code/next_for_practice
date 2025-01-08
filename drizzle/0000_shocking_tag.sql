CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"todoName" varchar(256) NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
