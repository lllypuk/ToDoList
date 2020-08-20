package ru.shatrov.todolist.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    @CrossOrigin(origins = "http://localhost:3000")
    public String index() {
        return "index";
    }
}
