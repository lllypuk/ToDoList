package ru.shatrov.todolist.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "task")
public class Task {

    @Id
    private String id;

    @Indexed
    private String todo;

    private Boolean done = false;

    public Task() {
    }

    public Task(String id, String todo, Boolean done) {
        this.id = id;
        this.todo = todo;
        this.done = done;
    }

    @Override
    public String toString() {
        return String.format(
                "Task[id=%s, todo='%s', done='%s']",
                id, todo, done);
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

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }
}
