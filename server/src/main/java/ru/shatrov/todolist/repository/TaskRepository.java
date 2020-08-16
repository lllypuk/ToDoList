package ru.shatrov.todolist.repository;

import ru.shatrov.todolist.entity.Task;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "todolist", path = "todolist")
public interface TaskRepository extends MongoRepository<Task, String> {

    List<Task> findByTodo(String todo);

}
