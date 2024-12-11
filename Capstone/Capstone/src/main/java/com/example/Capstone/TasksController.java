package com.example.Capstone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TasksController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public List<Tasks> getTasks() {{
        return taskService.getAllTasks();

    }
    }

    @GetMapping("/tasks/user/{id}")
    public List<Tasks> getTaskByUserId(@PathVariable Long id) {{
        return taskService.getAllTasksByUserId(id);

    }
    }

    @GetMapping("/singletask/{id}")
    public List<Tasks> getTaskById(@PathVariable Long id) {{
        return taskService.getTasksById(id);

    }
    }
}
