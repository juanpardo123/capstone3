package com.example.Capstone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TasksServiceImpl implements TaskService {

    @Autowired
    public TasksRepository tasksRepository;

    @Override
    public List<Tasks> getAllTasks() {
        return tasksRepository.findAll();
    }

    @Override
    public List<Tasks> getAllTasksByUserId(Long id) {
        return tasksRepository.findByUserId(id);
    }

    @Override
    public List<Tasks> getTasksById(Long id) {
        return tasksRepository.findTaskById(id);
    }
}
