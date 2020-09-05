package ru.shatrov.todolist.entity;

import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Todo")
public class Todo {

    @Id
    private String id;

    @NonNull
    private String name;

    @NonNull
    private Boolean done = false;

    public Todo(String name, Boolean done) {
        this.name = name;
        this.done = done;
    }
}
