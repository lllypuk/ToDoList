package ru.shatrov.todolist.repository;

import ru.shatrov.todolist.entity.Todo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "todolist", path = "todolist")
public interface TodoRepository extends MongoRepository<Todo, String> {

    List<Todo> findByName(String name);

}
