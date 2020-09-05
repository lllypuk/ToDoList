package ru.shatrov.todolist;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ru.shatrov.todolist.entity.Todo;
import ru.shatrov.todolist.repository.TodoRepository;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ToDoListAppTests {

    @Autowired
    TodoRepository todoRepository;

//    @BeforeEach
    void fillDB() {
        Todo todo1 = new Todo("Task1", false);
        Todo todo2 = new Todo("Task2", false);
        Todo todo3 = new Todo("Task3", true);

        todoRepository.saveAll(Arrays.asList(todo1, todo2, todo3));
    }

//    @Test
    void testTodoFindByName() {
        String name = "Task1";

        Todo todo1 = new Todo(name, false);
        todo1 = todoRepository.save(todo1);

        Todo todo = todoRepository.findByName(name);

        assertThat(todo).isNotNull();

        todoRepository.delete(todo1);
    }

//    @AfterEach
    void closeTests() {
        todoRepository.deleteAll();
    }
}
