package ru.shatrov.todolist.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Todo")
public class Todo {

    @Id
    private String id;

    @Indexed
    private String name;

    private Boolean done = false;

    public Todo() {
    }

    public Todo(String id, String name, Boolean done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    @Override
    public String toString() {
        return String.format(
                "Task[id=%s, name='%s', done='%s']",
                id, name, done);
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }
}
