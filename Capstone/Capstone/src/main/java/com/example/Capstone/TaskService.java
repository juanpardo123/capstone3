package com.example.Capstone;

import java.util.List;

public interface TaskService {
    List<Tasks> getAllTasks();

    List<Tasks> getAllTasksByUserId(Long id);

    List<Tasks> getTasksById(Long id);

}
