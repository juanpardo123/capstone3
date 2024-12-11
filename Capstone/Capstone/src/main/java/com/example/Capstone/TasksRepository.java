package com.example.Capstone;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TasksRepository extends JpaRepository<Tasks, Long> {

List<Tasks> findAll();
List<Tasks> findByUserId(Long id);
List<Tasks> findTaskById(Long id);

}
