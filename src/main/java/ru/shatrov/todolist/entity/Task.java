package ru.shatrov.todolist.entity;

import org.springframework.data.annotation.Id;

public class Task {

    @Id
    private String id;

    private String todo;

    public Task() {
    }

    public Task(String id, String todo) {
        this.id = id;
        this.todo = todo;
    }

    @Override
    public String toString() {
        return String.format(
                "Task[id=%s, todo='%s']",
                id, todo);
    }

    public String getId() {
        return id;
    }

    public String getTodo() {
        return todo;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }
}
