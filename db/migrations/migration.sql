DROP DATABASE tasks;
CREATE DATABASE todo_db;
\c todo_db;

DROP TABLE IF EXISTS todos;
CREATE TABLE todos(
    id BIGSERIAL PRIMARY KEY,
    description VARCHAR(255),
    priority VARCHAR(255),
    status BOOLEAN
);